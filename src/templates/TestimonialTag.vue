<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom">
      # {{ $page.testimonialTag.title }}
    </h1>

    <div class="posts">
      <TestimonialCard v-for="edge in $page.testimonialTag.belongsTo.edges" :key="edge.node.id" :testimonial="edge.node"/>
    </div>
  </Layout>
</template>

<page-query>
query TestimonialTag ($id: ID!) {
  testimonialTag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Testimonial {
            author
            path
            date (format: "D. MMMM YYYY")
            role
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import TestimonialCard from '~/components/TestimonialCard.vue'

export default {
  components: {
    Author,
    TestimonialCard
  },
  metaInfo: {
    title: 'Tags'
  }
}
</script>

<style lang="scss">

</style>

