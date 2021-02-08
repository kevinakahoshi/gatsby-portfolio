export default {
  title: 'Experience Content',
  name: 'experience',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'altText',
      title: 'Alt Text',
      type: 'string'
    },
    {
      name: 'mainDescription',
      title: 'Main Description',
      type: 'array', of: [{
        type: 'block'
      }]
    },
    {
      name: 'technologiesUsed',
      title: 'Technologies Used',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{
          type: 'technology'
        }]
      }],
    },
    {
      name: 'liveLink',
      title: 'Live Link',
      type: 'url'
    }
  ]
}
