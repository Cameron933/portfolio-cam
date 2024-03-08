import {createSchema} from 'sanity'
import { Schema } from 'sanity'

import experience from './experience'
import pageInfo from './pageInfo'
import project from './project'
import skill from './skill'
import social from './social'

export const createSchema = {
  name: 'default',
  types: [experience, pageInfo, project, skill, social],
}
