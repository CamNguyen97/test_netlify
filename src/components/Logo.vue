<template>
  <g-link class="logo" to="/">
    <span class="logo__text"
      ><span
        ><g-image
          alt="Clarity Logo"
          class="logo__image"
          src="~/assets/images/Clarity_Logo_1.svg"
          width="180"
          height="180"
          blur="5"
          immediate="true"
          data-netlify="true"
      /></span>
      &larr; {{ $static.metadata.siteName }}
    </span>
  </g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.logo {
  text-decoration: none;
  color: var(--body-color) !important;
  font-size: 0.9em;

  &__image {
    vertical-align: middle;
    border-radius: 99px;
    height: 40px;
    width: 40px;
    margin-right: 0.5em;
  }
}
</style>
