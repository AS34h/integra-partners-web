// sanity/schemas/article.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: Rule => Rule.required(),
      description: 'Catégorie unique pour éviter la cannibalisation'
    }),
    defineField({
      name: 'targetKeyword',
      title: 'Mot-clé principal',
      type: 'string',
      description: 'Mot-clé principal ciblé (vérifier non-duplication)',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Extrait',
      type: 'text',
      rows: 3,
      description: 'Description courte pour les cartes et meta description',
      validation: Rule => Rule.required().max(160)
    }),
    defineField({
      name: 'featuredImage',
      title: 'Image à la une',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texte alternatif',
          validation: Rule => Rule.required()
        }
      ]
    }),
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texte alternatif',
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'author',
      title: 'Auteur',
      type: 'reference',
      to: [{ type: 'author' }]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'updatedAt',
      title: 'Dernière mise à jour',
      type: 'datetime'
    }),
    defineField({
      name: 'relatedService',
      title: 'Service associé',
      type: 'reference',
      to: [{ type: 'service' }],
      description: 'Service vers lequel rediriger (CTA interne)'
    }),
    defineField({
      name: 'ctaType',
      title: 'Type de CTA',
      type: 'string',
      options: {
        list: [
          { title: 'Diagnostic IMS', value: 'diagnostic' },
          { title: 'Service spécifique', value: 'service' },
          { title: 'Contact', value: 'contact' },
        ]
      }
    }),
    defineField({
      name: 'ctaText',
      title: 'Texte du CTA',
      type: 'string',
      description: 'Texte personnalisé pour le bouton d\'appel à l\'action'
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'readingTime',
      title: 'Temps de lecture',
      type: 'number',
      description: 'Temps de lecture estimé en minutes'
    }),
    defineField({
      name: 'metaTitle',
      title: 'Méta titre (SEO)',
      type: 'string',
      description: 'Titre pour les moteurs de recherche (60 caractères max)',
      validation: Rule => Rule.max(60)
    }),
    defineField({
      name: 'metaDescription',
      title: 'Méta description (SEO)',
      type: 'text',
      rows: 2,
      description: 'Description pour les moteurs de recherche (160 caractères max)',
      validation: Rule => Rule.max(160)
    }),
    defineField({
      name: 'featured',
      title: 'Article en vedette',
      type: 'boolean',
      description: 'Afficher cet article en vedette sur la page d\'accueil'
    }),
    defineField({
      name: 'status',
      title: 'Statut',
      type: 'string',
      options: {
        list: [
          { title: 'Brouillon', value: 'draft' },
          { title: 'Publié', value: 'published' },
          { title: 'Archivé', value: 'archived' }
        ]
      },
      initialValue: 'draft',
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'featuredImage',
      category: 'category.name',
      status: 'status'
    },
    prepare(selection) {
      const { title, author, media, category, status } = selection
      return {
        title: title || 'Sans titre',
        subtitle: `${category || 'Sans catégorie'} • ${author || 'Sans auteur'} • ${status}`,
        media: media
      }
    }
  }
})
