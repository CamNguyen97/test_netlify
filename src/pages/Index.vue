<template>
  <Layout :show-logo="false">
    <Author :show-title="true" />

    <div class="main-text body-text">
      <p>
        Catering to the needs of superyacht owners and high end property owners
        looking for a respected and trusted sparring partner/advisor in the
        fields of:
      </p>

      <ul>
        <li>Audio Visial/Entertainment Systems</li>
        <li>IT Systems</li>
        <li>Lighting Systems</li>
        <li>Control Systems</li>
        <li>Special Features (AV/IT/Lighting related)</li>
      </ul>

      <p>
        Clarity Technical Services was founded, and is operated by Edwin
        Edelenbos. The testimonials on this website regarding both his skills
        and his character, speak for themselves.
      </p>
      <p>
        A sample of testimonials can be found below, and a complete list can be
        found on the
        <g-link to="/testimonials/"><strong>testimonials</strong></g-link> page.
      </p>
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
    title: "Hello, world!",
  },
};
</script>

<style lang="scss">
.main-text {
  margin-bottom: var(--space);
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