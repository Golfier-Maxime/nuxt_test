<template>
  <main class="layout">
    <header class="layout__header">
      <Header></Header>
    </header>
    <aside class="layout__aside">
      <slot name="aside"></slot>
    </aside>
    <article class="layout__article">
      <NuxtPage />
    </article>
    <footer class="layout__footer">
      <Footer></Footer>
    </footer>
  </main>
</template>
<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template:
    "header"
    "article"
    "aside"
    "footer";

  @include medium-up {
    grid-template:
      "header header header"
      "article article aside"
      "footer footer footer";
  }

  > * {
    padding: rem(16);
  }
  &__article {
    grid-area: article;
  }
  &__aside {
    grid-area: aside;
  }
  &__footer {
    margin-top: 200px;
    background: #fafaff;
    grid-area: footer;
  }
  &__header {
    background: white;
    grid-area: header;
  }
}
</style>
