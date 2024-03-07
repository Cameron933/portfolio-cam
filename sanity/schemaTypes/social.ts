import {defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title for social media',
      type: 'sting',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
    },
  ],
})
