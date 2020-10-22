export default {
  title: 'Tools Section',
  name: 'toolsSection',
  type: 'document',
  fields: [
    {
      name: 'toolsSelectionAndOrder',
      title: 'Tools Selection and Order',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{
          type: 'tool'
        }]
      }]
    }
  ]
}
