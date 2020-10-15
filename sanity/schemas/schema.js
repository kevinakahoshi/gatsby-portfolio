// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import technology from './technology';
import aboutMe from './aboutMe';
import social from './social';
import tools from './tools';
import project from './project';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    aboutMe,
    project,
    social,
    technology,
    tools
  ])
})
