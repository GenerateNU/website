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
      name: 'pills',
      title: 'Pills',
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
      name: 'builders',
      title: 'Builders',
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
      team: 'team',
      pills: 'pills',
      description: 'description',
      builders: 'builders',
      leaders: 'leaders',
      chiefs: 'chiefs',
    },
  },
})
