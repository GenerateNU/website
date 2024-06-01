import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'application',
  title: 'Application',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'team',
      title: 'Team',
      type: 'string',
    }),
    defineField({
      name: 'descrption',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'activeApplication',
      title: 'Active Application',
      type: 'boolean',
    }),
    defineField({
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'workCommitment',
      title: 'Work Commitment (hrs/week)',
      type: 'number',
    }),
    defineField({
      name: 'remarks',
      title: 'Remarks',
      type: 'string',
    }),
    defineField({
      name: 'applicationLink',
      title: 'Application Link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})

