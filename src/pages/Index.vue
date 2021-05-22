<template>
  <Layout :show-logo="false">
    <Author :show-title="true" :show-intro="true" :show-links="true" />

    <div class="main-text body-text">
      <h2>Expertise</h2>
      <p>
        Clarity Technical Services is a valuable resource for owners of
        superyachts and high-end properties looking for a reliable expert to
        ensure they get the best out of their systems.
      </p>

      <ul>
        <li>Audio Visial/Entertainment</li>
        <li>IT</li>
        <li>Lighting</li>
        <li>Control</li>
        <li>Special Features (related to the above)</li>
      </ul>

      <h2>A Trusted Name In The Superyacht Industry</h2>
      <p>
        Clarity Technical Services was founded, and is operated by Edwin
        Edelenbos. The testimonials on this website regarding both his skills
        and his character, speak for themselves.
      </p>
      <p>
        A small selection of testimonials can be found below, a complete list
        can be found on the
        <g-link to="/testimonials/"><strong>testimonials</strong></g-link> page.
      </p>

      <h3>A Few Testimonials...</h3>
    </div>

    <!-- List testimonials -->
    <div class="posts">
      <TestimonialCard
        v-for="edge in $page.testimonials.edges"
        :key="edge.node.id"
        :testimonial="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  testimonials: allTestimonial(filter: { front_page: { eq: true }}) {
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
    title: "Home",
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