export default {
  title: 'Experience Content',
  name: 'experience',
  type: 'document',
  fields: [
    {
      name: 'projectName',
      title: 'Project Name',
      type: 'string'
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
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
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string'
    },
    {
      name: 'mainDescription',
      title: 'Main Description',
      type: 'text',
    },
    {
      name: 'technologiesUsed',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'liveLink',
      title: 'Live Link',
      type: 'url'
    }
  ]
}
