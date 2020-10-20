export default {
  title: 'Social',
  name: 'social',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'displayText',
      title: 'Display Text',
      type: 'string'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image'
    },
    {
      name: 'file',
      title: 'File Upload',
      type: 'file'
    }
  ]
}
