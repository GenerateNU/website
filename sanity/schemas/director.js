import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'director',
  title: 'Director',
  type: 'document',
  fields: [
    defineField({
      name: 'team',
      title: 'Team',
      type: 'reference',
      to: [{type: 'teamOverview'}],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
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
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
    defineField({
      name: 'email',
      title: 'NU Email Prefix',
      type: 'string',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color',
    }),
    defineField({
      name: 'activeIcon',
      title: 'Active Icon',
      type: 'image',
    }),
    defineField({
      name: 'inactiveIcon',
      title: 'Inctive Icon',
      type: 'image',
    }),
    defineField({
      name: 'zIndex',
      title: 'Z Index',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      team: 'team.name',
      title: 'title',
      name: 'name',
      image: 'image',
      bio: 'bio',
      email: 'email',
      color: 'color', // Or team.color
      activeIcon: 'activeIcon',
      inactiveIcon: 'inactiveIcon',
      zIndex: 'zIndex',
    },
  },
})
