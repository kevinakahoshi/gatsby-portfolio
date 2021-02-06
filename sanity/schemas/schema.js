// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import technologyContent from './technologyContent';
import aboutMeSection from './aboutMeSection';
import socialContent from './socialContent';
import toolsContent from './toolsContent';
import projectContent from './projectContent';
import toolsSection from './toolsSection';
import technologiesSection from './technologiesSection';
import projectsSection from './projectsSection';
import experienceContent from './experienceContent';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    aboutMeSection,
    technologiesSection,
    toolsSection,
    experienceContent,
    projectsSection,
    projectContent,
    socialContent,
    technologyContent,
    toolsContent
  ])
})
