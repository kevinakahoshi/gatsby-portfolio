export default {
  title: 'Projects Section',
  name: 'projectsSection',
  type: 'document',
  fields: [
    {
      name: 'projectsSelectionAndOrder',
      title: 'Projects Selection and Order',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{
          type: 'projects'
        }]
      }]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Projects and Order'
      };
    }
  }
}
