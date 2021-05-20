<template>
  <Layout :show-logo="true">
    <div class="main-text body-text">
      <h1>Services</h1>
      <h2>Being Your Advisor</h2>
      <p>
        Having a trusted partner in your corner to advise you on how to best
        achieve things, what you should be looking out for, what's hot and
        what's not, where to take more risk, and where to play it safe, can be
        invaluable.
      </p>
      <p>
        Two skills come into play here. The first is my ability to provide
        excellent advice. The second is my ability to communicate clearly, and
        to provide the advice to any stakeholder in an understandable manner.
      </p>

      <h2>Designing Your Systems</h2>

      <p>
        <strong>Step 1:</strong> We sit down and talk through what you are
        trying to achieve. You tell me what you like and dislike, what you want
        and don't want. What experiences you are looing for, both for yourself
        and for your guests.
      </p>
      <p>
        <strong>Step 2:</strong> I take that information and mould it into a
        simple functional descripton of the system, written in non-technical
        terms, allowing you to verify that I have understood your intentions
        correctly.
      </p>
      <p>
        <strong>Step 3:</strong> I translate this into a system design. A set of
        charts, lists, flow diagrams etc, that will provide a solid foundation
        for a technical specification.
      </p>
      <p>
        <strong>Note:</strong> Here is where I can go quite a few steps further than most. If you want something that does not exist off the shelf, my design services reach far beyond 
      </p>

      <h2>Creating Specifications For Your Systems</h2>
      <p>
        Having a clear and well written technical specification is a must for
        today's complex systems. This document will be key reference material
        for all parties involved, and throughout the lifecycle of the project,
        and of the systems themselves.
      </p>
      <p>
        I have seen many specifications in my career, varying wildly in quality,
        and I am confident in my ability to create high quality specifications.
        That means: comprehensive, accurate, understandable, and unambiguous.
      </p>

      <h2>Project Management</h2>
      <p>
        Even with the best specifications, and the best intentions, the process
        of building complex systems such as these is far from simple, and there
        are many potential pitfalls. To avoid those pitfalls and to get the best
        possible result, excellent project management is a necessity.
      </p>
      <p>
        I have managed enough of such projects to know that my skills in this
        area are well received. So yes, this is part of my services portfolio,
        but I am happy to go on record here as saying that it is not something I
        particularly enjoy. I would much rather focus my energy on doing things
        that bring me more joy, such as being that trusted advisor, and getting
        the creative juices flowing in the design phase. So for project
        management, I much prefer to work with my own trusted partners who
        thrive in that part of the process, and allow me to oversee things on
        the client's behalf and step in as needed.
      </p>
    </div>

    <Author :show-title="false" :show-intro="true" :show-links="true" />
  </Layout>
</template>

<script>
import Author from "~/components/Author.vue";
export default {
  components: {
    Author,
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

