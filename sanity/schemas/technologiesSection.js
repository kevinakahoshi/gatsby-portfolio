export default {
  title: 'Technologies Section',
  name: 'technologiesSection',
  type: 'document',
  fields: [
    {
      name: 'technologiesSelectionAndOrder',
      title: 'Technologies Selection and Order',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{
          type: 'technology'
        }]
      }]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Technologies and Order'
      };
    }
  }
}
