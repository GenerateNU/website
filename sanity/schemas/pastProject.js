import {defineField, defineType} from 'sanity'

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
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'clientTitle',
      title: 'Client Title',
      type: 'string',
    }),
    defineField({
      name: 'semester',
      title: 'Semester',
      type: 'string',
    }),
    defineField({
      name: 'teamResponsible',
      title: 'Team Responsible',
      type: 'string', // revisit - team as in 'software' or as in 'Care-Wallet'?
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
      type: 'string',
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      clientName: 'clientName',
      clientTitle: 'clientTitle',
      semester: 'semester',
      teamResponsible: 'teamResponsible',
      image: 'image',
      description: 'description',
      quote: 'quote',
      featured: 'featured',
    },
  },
})
