export default {
  title: 'About Me Section',
  name: 'aboutMe',
  type: 'document',
  fields: [
    {
      name: 'headshot',
      title: 'Headshot',
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
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'social',
      title: 'Social',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'social'
            }
          ]
        }
      ]
    }
  ]
}
