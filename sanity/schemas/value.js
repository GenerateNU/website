import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'value',
  title: 'Value',
  type: 'document',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'value',
      media: 'image',
    },
  },
})
