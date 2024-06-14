import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'team',
  title: 'Team',
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
      name: 'image',
      title: 'Team Wheel Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      type: 'text',
    }),
    defineField({
      name: 'contributorDescription',
      title: 'Contributor Description',
      type: 'text',
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
      type: 'text',
    }),
    defineField({
      name: 'leadRoles',
      title: 'Lead Roles',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'application'}]}],
    }),
    defineField({
      name: 'chiefDescription',
      title: 'Chief Description',
      type: 'text',
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
      media: 'image',
    },
  },
})
