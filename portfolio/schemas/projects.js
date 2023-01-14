export default {
  name: 'projects',
  type: 'document',
	title: 'Projects',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
            source: 'title'
        }
    },
    {
        name: 'image',
        type: 'image',
        title: 'Project Picture',
        options: {
          hotspot: true
        }
    },
    {
        name: 'summary',
        type: 'text',
        title: 'Summary'
    },
    {
        title: 'Skills',
        name: 'skills',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          layout: 'tags'
        }
    },
    {
        title: 'Links',
        name: 'links',
        type: 'object',
        fields: [
          {name: 'github', type: 'object', title: 'Github URL', fields: [
            {name: 'link', type: 'url', title: 'Link'}
          ]},
          {name: 'live', type: 'object', title: 'Live Web URL', fields: [
            {name: 'link', type: 'url', title: 'Link'},
            {name: 'logo', type: 'image', title: 'Logo'}
          ]}
        ]
      }
  ]
}