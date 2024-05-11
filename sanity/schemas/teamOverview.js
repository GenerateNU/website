import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamOverview',
  title: 'Team Overview',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
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
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'inactiveIcon',
      title: 'Inctive Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'largePicture',
      title: 'Large Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mainDescription',
      title: 'Main Description',
      type: 'string',
    }),
    defineField({
      name: 'wheelDescription',
      title: 'Wheel Description',
      type: 'string',
    }),
    defineField({
      name: 'whatWeDo',
      title: 'What We Do',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      color: 'color',
      activeIcon: 'activeIcon',
      inactiveIcon: 'inactiveIcon',
      largePicture: 'largePicture',
      mainDescrption: 'mainDescription',
      wheelDescription: 'wheelDescription',
      whatWeDo: 'whatWeDo',
    },
  },
})
