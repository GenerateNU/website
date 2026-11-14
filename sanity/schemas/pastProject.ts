import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pastProject',
  title: 'Past Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'semester',
      title: 'Semester',
      type: 'string',
    }),
    defineField({
      name: 'teams',
      title: 'Teams',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Hardware', value: 'hardware' },
          { title: 'Software', value: 'software' },
          { title: 'Data', value: 'data' },
          { title: 'Games', value: 'games' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Image/Mockup',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    }),
    defineField({
      name: 'roundedPopupImage',
      title: 'Rounded popup image',
      type: 'boolean',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'semester',
      media: 'image',
    },
  },
});
