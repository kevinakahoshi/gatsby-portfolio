export default {
  title: 'Site Metadata',
  name: 'siteMetadata',
  type: 'document',
  fields: [
    {
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(50).max(60)
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'string',
      validation: (Rule) => Rule.required().min(50).max(160)
    },
    {
      name: 'siteOGImage',
      title: 'OG Image',
      type: 'image',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'siteFavicon',
      title: 'Favicon',
      type: 'image'
    }
  ]
}
