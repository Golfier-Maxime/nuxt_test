<script setup>
const env = useRuntimeConfig();
const props = defineProps({
  title: Array,
  text: Array,
  buttons: Array,
});

const { data: recipes } = await useAsyncData("recipes", async () => {
  return $fetch(env.public.apiUrl + "/recipes");
});
</script>

<template>
  <section class="c-hero">
    <div class="c-hero__title">
      <!-- Convert prismic rich text field to full html text -->
      <PrismicRichText :field="title" />
    </div>
    <div class="c-hero__text">
      <!-- Convert prismic rich text field to full html text -->
      <PrismicRichText :field="text" />
    </div>
    <div class="c-hero__buttons">
      <div v-for="button in buttons">
        <!-- v-if within the loop -->
        <!--        <button v-if="button.button_type === 'default'" class="c-hero__button -default">-->
        <!--          <a :href="button.button_link.url">{{ button.button_label }}</a>-->
        <!--        </button>-->
        <!--        <button v-else class="c-hero__button -video">-->
        <!--          <a :href="button.button_link.url">{{ button.button_label }}</a>-->
        <!--        </button>-->
        <!-- Or variant props inside <Button /> component to handle all possible cases-->
        <MyButton :href="button.buton_link.url" :variant="button.button_type">{{
          button.button_label
        }}</MyButton>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.c-hero {
  &__title {
    font-size: 95px;
    font-weight: 700;
    line-height: 1.2;
    color: black;
    width: 600px;

    strong {
      color: orange;
    }
  }

  &__text {
    width: 500px;
    font-size: 18px;
    line-height: 1.1;
    color: black;
    &:not(:first-child) {
      margin-top: 1rem;
    }
  }

  &__buttons {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    &:not(:first-child) {
      margin-top: 2rem;
    }
  }

  &__button {
    &.-default {
      background-color: orange;
    }
  }
}
</style>
