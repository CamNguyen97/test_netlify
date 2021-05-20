<template>
  <Layout :show-logo="true">
    
    <div class="main-text body-text">
      <h1>About Me</h1>
      <p>
        A brief introduction: My name is Edwin Edelenbos, a Dutch guy with a
        love for developing technology-based solutions that help create
        memorable experiences (memorable in a good way of course!). I've been
        gathering knowledge and honing my skills in this area for well over a
        decade, with a focus on systems for the largest superyachts in the
        world. I know how to design complex multiroom systems, I know how to
        get the most out of them, but equally as important, I  know the pitfalls and
        how to avoid them.
      </p>

      <p>
        My degrees in Industrial Design Engineering (BSc) and Design For
        Interaction (MSc) combined with my domain specific knowledge, allow me
        speak the language of the designers, the engineers, the project managers 
        and the technicians on site, and to take a unique, design based approach 
        to developing these systems. My approach puts the user first, and the 
        enabling technology second not the other way around.
      </p>

      <p>
        In short, by applying my interaction design, product design and
        technology design skills, I help you create an environment that suits
        your needs. My focus is on making sure you and your guests have the best
        possible experience.
      </p>

      <p>
        I particularly enjoy working with clients who want to go the extra mile
        and enjoy developing new and unique things. If you want bespoke, 
        you're in the right place!
      </p>

    </div>
    <Author :show-title="false" :show-intro="true" :show-links="true" />
  </Layout>
</template>

<script>
import Author from "~/components/Author.vue";
export default {
  components: {
    Author
  },
  metaInfo: {
    title: "About",
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

