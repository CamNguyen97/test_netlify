<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">
        {{ $page.testimonial.author }}
      </h1>

      <TestimonialMeta :testimonial="$page.testimonial" />
    </div>

    <div class="post content-box">
      <div class="post__header">
        <g-image
          alt="Cover image"
          v-if="$page.testimonial.cover_image"
          :src="$page.testimonial.cover_image"
        />
      </div>

      <div class="post__content" v-html="$page.testimonial.content" />

      <div class="post__footer">
        <TestimonialTags :testimonial="$page.testimonial" />
      </div>
    </div>

    <div class="post-comments">
      <!-- Add comment widgets here -->
    </div>

    <Author :show-title="false" :show-intro="true" :show-links="true" />
  </Layout>
</template>

<script>
import TestimonialMeta from "~/components/TestimonialMeta";
import TestimonialTags from "~/components/TestimonialTags";
import Author from "~/components/Author.vue";

export default {
  components: {
    Author,
    TestimonialTags,
    TestimonialMeta,
  },
  metaInfo() {
    return {
      author: this.$page.testimonial.author,
      role: this.$page.testimonial.role,
    };
  },
};
</script>

<page-query>
query Testimonial ($id: ID!) {
  testimonial: testimonial (id: $id) {
    path
    author
    role
    date (format: "D. MMMM YYYY")
    tags {
      id
      title
      path
    }
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
