import { defineField, defineType } from 'sanity';

export const copyType = defineType({
  name: 'copy',
  title: 'Copy',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Key',
      type: 'string',
    }),
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'text' }],
    }),
  ],
  preview: {
    select: {
      title: 'key',
      subtitle: 'header',
    },
  },
});
