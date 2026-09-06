import { defineField, defineType } from 'sanity';

const COPY_KEYS = [
  'what-is-generate-landing',
  'why-generate-1',
  'why-generate-2',
  'why-generate-3',
  'how-were-structured',
  'celebrate-our-wins',
] as const;

export const copyType = defineType({
  name: 'copy',
  title: 'Copy',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Key',
      description: 'Identifies which section of the site renders this copy.',
      type: 'string',
      options: {
        list: COPY_KEYS.map(key => ({ title: key, value: key })),
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'text' }],
      validation: Rule => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'key',
      subtitle: 'header',
    },
  },
});
