import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'showcase',
  title: 'Showcase Carousel',
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
      description: 'Crop to 4:3 aspect ratio to preserve proportions when rendering.',
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
