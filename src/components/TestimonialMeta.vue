<template>
   <div class="post-meta">
      Posted {{ testimonial.date }}.
      <template v-if="testimonial.timeToRead">
        <strong>{{ testimonial.timeToRead }} min read.</strong>
      </template>
    </div>
</template>

<script>
export default {
  props: ['testimonial']
}
</script>

<style lang="scss">
.post-meta {
  font-size: .8em;
  opacity: .8;
}
</style>