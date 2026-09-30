import { defineField, defineType } from 'sanity';

export const valueType = defineType({
  name: 'value',
  title: 'Value',
  type: 'document',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'index',
      title: 'Index',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'value',
      media: 'image',
    },
  },
});
