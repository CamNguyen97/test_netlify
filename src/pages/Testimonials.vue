<template>
  <Layout :show-logo="true">
    <div class="main-text body-text">
      <h1>Testimonials</h1>
    </div>

    <!-- List posts -->
    <div class="posts">
      <TestimonialCard
        v-for="edge in $page.testimonials.edges"
        :key="edge.node.id"
        :testimonial="edge.node"
      />
    </div>
    <Author :show-title="false" :show-intro="true" :show-links="true" />
  </Layout>
</template>

<page-query>
query {
  testimonials: allTestimonial {
    edges {
      node {
        id
        author
        role
        date (format: "D. MMMM YYYY")
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
        content
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import TestimonialCard from "~/components/TestimonialCard.vue";

export default {
  components: {
    Author,
    TestimonialCard,
  },
  metaInfo: {
    title: "Testimonials",
  },
};
</script>

<style lang="scss">
.main-text {
  // margin-bottom: var(--space);
  position: relative;

  &__header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    overflow: hidden;

    &:empty {
      display: none;
    }
  }
}
</style>
