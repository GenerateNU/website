import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'showcase',
  title: 'Showcase',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'semester',
      title: 'Semester',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'year',
      media: 'image',
    },
  },
})
