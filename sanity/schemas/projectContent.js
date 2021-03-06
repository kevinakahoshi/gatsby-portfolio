export default {
  title: 'Project Content',
  name: 'projects',
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
      name: 'gitHubLink',
      title: 'GitHub Link',
      type: 'url'
    },
    {
      name: 'liveLink',
      title: 'Live Link',
      type: 'url'
    }
  ]
}
