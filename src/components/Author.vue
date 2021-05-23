<template>
  <div class="author">
    <g-image
      alt="Author image"
      class="author__image"
      src="~/assets/images/author.png"
      blur="5"
      width="150px"
      height="180px"
    />

    <h1 v-if="showTitle" class="author__site-title">
      {{ $static.metadata.siteName }}
    </h1>

    <p v-if="showIntro" class="author__intro">
      {{ $static.metadata.siteDescription }}
    </p>

    <p v-if="showLinks" class="author__links">
      <g-link to="/about/"><strong>About Me</strong></g-link>
      <g-link to="/services/"><strong>Services</strong></g-link>
      <g-link to="/testimonials/"><strong>Testimonials</strong></g-link>
    </p>
    <p>
      <a href="https://www.linkedin.com/in/edelenbosedwin/" target="_blank"
        >Follow me on LinkedIn</a
      >
    </p>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName,
	siteDescription
  }
}
</static-query>

<script>
export default {
  props: ["showTitle", "showIntro", "showLinks"],
};
</script>

<style lang="scss">
.author {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding: calc(var(--space) / 2) 0;

  &__image {
    // border-radius: 100%;
    width: 150px;
    height: auto;
    margin-bottom: 1em;
  }

  &__intro {
    opacity: 0.8;
  }

  &__site-title {
    font-size: 1.5em;
  }

  &__links {
    margin-top: -0.5em;
    a {
      margin: 0 0.5em;
    }
  }
}
</style>
