import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teams',
  title: 'Teams',
  type: 'document',
  fields: [
    defineField({
      name: 'team',
      title: 'Team',
      type: 'string',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'teamDescription',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'contributorDescription',
      title: 'Contributor Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'contributorRoles',
      title: 'Contributor Roles',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'application'}]}],
    }),
    defineField({
      name: 'leadDescription',
      title: 'Lead Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'leadRoles',
      title: 'Lead Roles',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'application'}, {type: 'director'}]}],
    }),
    defineField({
      name: 'chiefDescription',
      title: 'Chief Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'chiefRoles',
      title: 'Chief Roles',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'application'}]}],
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
    }),
    defineField({
      name: 'zIndex',
      title: 'Z Index',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'team',
    },
  },
})
