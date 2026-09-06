import { defineField, defineType } from 'sanity';

export const teamType = defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    defineField({
      name: 'team',
      title: 'Team',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'cardVariant',
      title: 'Card Variant',
      description:
        'How this team renders on the apply page. "Client" uses the client styling and the "Work with us" label.',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Client', value: 'client' },
        ],
        layout: 'radio',
      },
      initialValue: 'default',
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
      title: 'Team Wheel Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'team_abbreviation',
      title: 'Team Abbreviation',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'teamDescription',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'contributorDescription',
      title: 'Contributor Description',
      type: 'text',
    }),
    defineField({
      name: 'contributorRoles',
      title: 'Contributor Roles',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'application' }] }],
    }),
    defineField({
      name: 'leadDescription',
      title: 'Lead Description',
      type: 'text',
    }),
    defineField({
      name: 'leadRoles',
      title: 'Lead Roles',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'application' }] }],
    }),
    defineField({
      name: 'chiefDescription',
      title: 'Chief Description',
      type: 'text',
    }),
    defineField({
      name: 'chiefRoles',
      title: 'Chief Roles',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'application' }] }],
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      description: 'When set, the card links out instead of listing open roles.',
      type: 'url',
    }),
    defineField({
      name: 'zIndex',
      title: 'Z Index',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'team',
      subtitle: 'cardVariant',
      media: 'image',
    },
  },
});
