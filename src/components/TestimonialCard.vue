<template>
  <div
    class="post-card content-box"
    :class="{ 'post-card--has-poster': testimonial.poster }"
  >
    <div class="post-card__header">
      <g-image
        alt="Cover image"
        v-if="testimonial.cover_image"
        class="post-card__image"
        :src="testimonial.cover_image"
      />
    </div>
    <div class="post-card__content">
      <h2 class="post-card__title" v-html="testimonial.author" />
      <p class="post-card__description" v-html="testimonial.role" />
      <p class="post-card" v-html="testimonial.content" />

      <!-- <TestimonialMeta class="post-card__meta" :testimonial="testimonial" /> -->
      <TestimonialTags class="post-card__tags" :testimonial="testimonial" />

      <g-link class="post-card__link" :to="testimonial.path">Link</g-link>
    </div>
  </div>
</template>

<script>
import TestimonialTags from "~/components/TestimonialTags";
import TestimonialMeta from "~/components/TestimonialMeta";

export default {
  components: {
    TestimonialTags,
    TestimonialMeta,
  },
  props: ["testimonial"],
};
</script>

<style lang="scss">
.post-card {
  margin-bottom: var(--space);
  position: relative;

  &__header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    &:empty {
      display: none;
    }
  }

  &__description {
    font-style: italic;
  }

  &__image {
    min-width: 100%;
  }

  &__title {
    margin-top: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);
  }

  &__tags {
    z-index: 1;
    position: relative;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>
