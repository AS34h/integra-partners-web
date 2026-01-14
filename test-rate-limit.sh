#!/bin/bash
# Test du Rate Limiting et des logs anonymisés

echo "🧪 Test Rate Limiting API /api/diagnostic"
echo "=========================================="
echo ""

# Test 1: Requête valide
echo "1️⃣ Envoi requête valide..."
curl -X POST http://localhost:3000/api/diagnostic \
  -H "Content-Type: application/json" \
  -H "X-Forwarded-For: 192.168.1.100" \
  -d '{
    "organization": "Test Corp",
    "sector": "Tech",
    "size": "10-50",
    "firstName": "John",
    "lastName": "Doe",
    "position": "CEO",
    "email": "john.doe@test.com",
    "phone": "0123456789",
    "domain": "strategie",
    "challenges": "Test de la nouvelle fonctionnalité de rate limiting avec anonymisation des logs RGPD",
    "consent": true
  }' 2>/dev/null | jq '.'

echo ""
echo "2️⃣ Spam 6 requêtes pour trigger rate limit..."
for i in {1..6}; do
  echo -n "Requête $i: "
  STATUS=$(curl -s -w "%{http_code}" -X POST http://localhost:3000/api/diagnostic \
    -H "Content-Type: application/json" \
    -H "X-Forwarded-For: 192.168.1.100" \
    -d '{
      "organization": "Spam",
      "sector": "Test",
      "size": "1-10",
      "firstName": "Test",
      "lastName": "User",
      "position": "Tester",
      "email": "spam@test.com",
      "phone": "0000000000",
      "domain": "test",
      "challenges": "This is a test spam request to trigger rate limiting",
      "consent": true
    }' -o /dev/null)
  
  if [ "$STATUS" = "429" ]; then
    echo "❌ RATE LIMITED (429)"
  elif [ "$STATUS" = "201" ]; then
    echo "✅ SUCCESS (201)"
  else
    echo "⚠️  STATUS: $STATUS"
  fi
  sleep 0.5
done

echo ""
echo "✅ Test terminé - Vérifiez les logs du serveur pour l'anonymisation"
