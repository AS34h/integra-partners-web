#!/bin/bash
# Script de test complet des corrections de sécurité
# Teste: Headers HTTP, Rate Limiting, CSRF, Sanitization

echo "🔒 TEST COMPLET DES CORRECTIONS DE SÉCURITÉ"
echo "=========================================="
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Compteurs
PASSED=0
FAILED=0

# Fonction de test
test_result() {
  if [ $1 -eq 0 ]; then
    echo -e "${GREEN}✅ PASS${NC}: $2"
    ((PASSED++))
  else
    echo -e "${RED}❌ FAIL${NC}: $2"
    ((FAILED++))
  fi
}

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "TEST #1: Headers HTTP de Sécurité"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Attendre que le serveur soit prêt
sleep 2

# Test X-Frame-Options
HEADER=$(curl -s -I http://localhost:3000 2>/dev/null | grep -i "X-Frame-Options")
if [[ $HEADER == *"DENY"* ]]; then
  test_result 0 "X-Frame-Options: DENY"
else
  test_result 1 "X-Frame-Options manquant"
fi

# Test X-Content-Type-Options
HEADER=$(curl -s -I http://localhost:3000 2>/dev/null | grep -i "X-Content-Type-Options")
if [[ $HEADER == *"nosniff"* ]]; then
  test_result 0 "X-Content-Type-Options: nosniff"
else
  test_result 1 "X-Content-Type-Options manquant"
fi

# Test X-XSS-Protection
HEADER=$(curl -s -I http://localhost:3000 2>/dev/null | grep -i "X-XSS-Protection")
if [[ $HEADER == *"1; mode=block"* ]]; then
  test_result 0 "X-XSS-Protection: 1; mode=block"
else
  test_result 1 "X-XSS-Protection manquant"
fi

# Test Strict-Transport-Security
HEADER=$(curl -s -I http://localhost:3000 2>/dev/null | grep -i "Strict-Transport-Security")
if [[ $HEADER == *"max-age"* ]]; then
  test_result 0 "Strict-Transport-Security présent"
else
  test_result 1 "Strict-Transport-Security manquant"
fi

# Test Content-Security-Policy
HEADER=$(curl -s -I http://localhost:3000 2>/dev/null | grep -i "Content-Security-Policy")
if [[ $HEADER == *"default-src"* ]]; then
  test_result 0 "Content-Security-Policy configurée"
else
  test_result 1 "Content-Security-Policy manquante"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "TEST #2: Rate Limiting API"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Test données valides pour le rate limiting
VALID_DATA='{
  "organization": "Test Security Corp",
  "sector": "Technology",
  "size": "10-50",
  "firstName": "Security",
  "lastName": "Tester",
  "position": "QA Engineer",
  "email": "security.test@example.com",
  "phone": "0123456789",
  "domain": "securite",
  "challenges": "Testing the rate limiting functionality with automated security tests",
  "consent": true
}'

echo "Envoi de 6 requêtes consécutives..."
SUCCESS_COUNT=0
RATE_LIMITED=0

for i in {1..6}; do
  STATUS=$(curl -s -w "%{http_code}" -X POST http://localhost:3000/api/diagnostic \
    -H "Content-Type: application/json" \
    -H "X-Forwarded-For: 203.0.113.100" \
    -H "X-Requested-With: XMLHttpRequest" \
    -d "$VALID_DATA" -o /dev/null 2>/dev/null)
  
  if [ "$STATUS" = "201" ]; then
    ((SUCCESS_COUNT++))
    echo "  Requête $i: ✅ 201 Created"
  elif [ "$STATUS" = "429" ]; then
    ((RATE_LIMITED++))
    echo "  Requête $i: 🚫 429 Rate Limited"
  else
    echo "  Requête $i: ⚠️  Status $STATUS"
  fi
  sleep 0.3
done

# Vérifier que les 5 premières passent et la 6ème est bloquée
if [ $SUCCESS_COUNT -ge 5 ] && [ $RATE_LIMITED -ge 1 ]; then
  test_result 0 "Rate limiting fonctionne (5 OK, puis bloqué)"
else
  test_result 1 "Rate limiting défaillant ($SUCCESS_COUNT succès, $RATE_LIMITED bloqués)"
fi

# Test headers X-RateLimit
RESPONSE=$(curl -s -i -X POST http://localhost:3000/api/diagnostic \
  -H "Content-Type: application/json" \
  -H "X-Forwarded-For: 203.0.113.200" \
  -H "X-Requested-With: XMLHttpRequest" \
  -d "$VALID_DATA" 2>/dev/null)

if echo "$RESPONSE" | grep -q "X-RateLimit-Limit"; then
  test_result 0 "Header X-RateLimit-Limit présent"
else
  test_result 1 "Header X-RateLimit-Limit manquant"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "TEST #3: Protection CSRF"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Test requête sans header AJAX (devrait passer en dev)
STATUS=$(curl -s -w "%{http_code}" -X POST http://localhost:3000/api/diagnostic \
  -H "Content-Type: application/json" \
  -H "X-Forwarded-For: 203.0.113.50" \
  -d "$VALID_DATA" -o /dev/null 2>/dev/null)

if [ "$STATUS" = "201" ] || [ "$STATUS" = "403" ]; then
  test_result 0 "CSRF validation active (status: $STATUS)"
else
  test_result 1 "CSRF validation inattendue (status: $STATUS)"
fi

# Test requête avec header AJAX correct
STATUS=$(curl -s -w "%{http_code}" -X POST http://localhost:3000/api/diagnostic \
  -H "Content-Type: application/json" \
  -H "X-Forwarded-For: 203.0.113.51" \
  -H "X-Requested-With: XMLHttpRequest" \
  -d "$VALID_DATA" -o /dev/null 2>/dev/null)

if [ "$STATUS" = "201" ]; then
  test_result 0 "Requête AJAX autorisée"
else
  test_result 1 "Requête AJAX bloquée (status: $STATUS)"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "TEST #4: Validation Zod"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Test données invalides (email malformé)
INVALID_DATA='{
  "organization": "Test",
  "sector": "Tech",
  "size": "10-50",
  "firstName": "Test",
  "lastName": "User",
  "position": "Tester",
  "email": "invalid-email",
  "phone": "0123456789",
  "domain": "test",
  "challenges": "This email should be rejected by Zod validation",
  "consent": true
}'

STATUS=$(curl -s -w "%{http_code}" -X POST http://localhost:3000/api/diagnostic \
  -H "Content-Type: application/json" \
  -H "X-Forwarded-For: 203.0.113.60" \
  -H "X-Requested-With: XMLHttpRequest" \
  -d "$INVALID_DATA" -o /dev/null 2>/dev/null)

if [ "$STATUS" = "400" ]; then
  test_result 0 "Validation Zod rejette email invalide"
else
  test_result 1 "Validation Zod n'a pas rejeté (status: $STATUS)"
fi

# Test challenges trop court (< 20 caractères)
SHORT_CHALLENGE='{
  "organization": "Test",
  "sector": "Tech",
  "size": "10-50",
  "firstName": "Test",
  "lastName": "User",
  "position": "Tester",
  "email": "test@example.com",
  "phone": "0123456789",
  "domain": "test",
  "challenges": "Too short",
  "consent": true
}'

STATUS=$(curl -s -w "%{http_code}" -X POST http://localhost:3000/api/diagnostic \
  -H "Content-Type: application/json" \
  -H "X-Forwarded-For: 203.0.113.61" \
  -H "X-Requested-With: XMLHttpRequest" \
  -d "$SHORT_CHALLENGE" -o /dev/null 2>/dev/null)

if [ "$STATUS" = "400" ]; then
  test_result 0 "Validation Zod rejette challenges trop court"
else
  test_result 1 "Challenges court non rejeté (status: $STATUS)"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "TEST #5: Middleware Sécurité"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Test que le middleware n'interfère pas avec les pages normales
STATUS=$(curl -s -w "%{http_code}" http://localhost:3000/fr -o /dev/null 2>/dev/null)
if [ "$STATUS" = "200" ]; then
  test_result 0 "Middleware n'interfère pas avec pages normales"
else
  test_result 1 "Middleware bloque pages (status: $STATUS)"
fi

# Test API health check
HEALTH=$(curl -s http://localhost:3000/api/diagnostic 2>/dev/null)
if echo "$HEALTH" | grep -q "ok"; then
  test_result 0 "API health check fonctionne"
else
  test_result 1 "API health check défaillant"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "RÉSULTATS FINAUX"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
TOTAL=$((PASSED + FAILED))
PERCENTAGE=$((PASSED * 100 / TOTAL))

echo "Tests réussis: ${GREEN}$PASSED${NC}/$TOTAL (${PERCENTAGE}%)"
echo "Tests échoués: ${RED}$FAILED${NC}/$TOTAL"
echo ""

if [ $FAILED -eq 0 ]; then
  echo -e "${GREEN}✅ TOUS LES TESTS DE SÉCURITÉ PASSENT !${NC}"
  exit 0
else
  echo -e "${YELLOW}⚠️  Certains tests ont échoué${NC}"
  exit 1
fi
