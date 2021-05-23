// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Clarity Technical Services',
  siteDescription: 'Expert Advice on AV/IT Systems for Superyachts and High-End Properties',
  siteUrl: 'https://clarity-tech.nl',

  templates: {
    Testimonial: '/testimonials/:author',
    Post: '/blog/:title',
    Tag: '/tag/:id',
    TestimonialTag: '/testimonialtag/:id'
  },
  

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Testimonial',
        path: 'content/testimonials/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'TestimonialTag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-robots-txt'
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/testimonialtag/*', '/testimonials/*', '/tag/*', '/404', '/blog']
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
