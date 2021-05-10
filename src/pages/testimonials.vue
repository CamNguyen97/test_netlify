<template>
  <Layout :show-logo="false">

    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <TestimonialCard
        v-for="edge in $page.testimonials.edges"
        :key="edge.node.id"
        :testimonial="edge.node"
      />
    </div>

  </Layout>
</template>

<script>

</script>
