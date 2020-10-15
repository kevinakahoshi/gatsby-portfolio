export default {
  title: 'Technologies',
  name: 'technology',
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
      name: 'logo',
      title: 'Logo',
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
      name: 'currentlyUsing',
      title: 'Currently Using',
      type: 'boolean'
    }
  ]
}
