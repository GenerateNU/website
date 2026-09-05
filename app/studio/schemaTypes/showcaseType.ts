import { defineField, defineType } from 'sanity';

export const showcaseType = defineType({
  name: 'showcase',
  title: 'Showcase Carousel',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'semester',
      title: 'Semester',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      description: 'Crop to 4:3 aspect ratio to preserve proportions when rendering.',
      type: 'image',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'year',
      media: 'image',
    },
  },
});
