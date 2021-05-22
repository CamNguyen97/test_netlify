<template>
  <div class="post-meta">Posted {{ testimonial.date }}.</div>
</template>

<script>
export default {
  props: ["testimonial"],
};
</script>

<style lang="scss">
.post-meta {
  font-size: 0.8em;
  opacity: 0.8;
}
</style>