import {createSchema} from 'sanity'
import {SchemaType} from 'sanity'

import experience from './experience'
import pageInfo from './pageInfo'
import project from './project'
import skill from './skill'
import social from './social'

export const schemaTypes = [experience, pageInfo, project, skill, social]
