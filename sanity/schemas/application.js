import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'application',
  title: 'Application',
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
      validation: (rule) => rule.required(),
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
