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
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'ic',
      title: 'Individual Contributors',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'applicationv2'}]}],
    }),
    defineField({
      name: 'leaders',
      title: 'Leaders',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'applicationv2'}]}],
    }),
    defineField({
      name: 'chiefs',
      title: 'Cheifs',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'applicationv2'}]}],
    }),
  ],
  preview: {
    select: {
      title: 'team',
      tags: 'tags',
      description: 'description',
      ic: 'ic',
      leaders: 'leaders',
      chiefs: 'chiefs',
    },
  },
})
