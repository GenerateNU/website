import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'applicationv2',
  title: 'ApplicationV2',
  type: 'document',
  fields: [
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'team',
      title: 'Team',
      type: 'string',
    }),
    defineField({
      name: 'activeApplication',
      title: 'Active Application',
      type: 'boolean',
    }),
    defineField({
      name: 'applicationLink',
      title: 'Application Link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'role',
      activeApplication: 'activeApplication',
      applicationLink: 'applicationLink',
    },
  },
})
