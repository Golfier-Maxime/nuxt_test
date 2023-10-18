<script setup>
const env = useRuntimeConfig();
const { client } = usePrismic();
const { data: home } = await useAsyncData("home", () =>
  client.getSingle("homepage")
);

const { data: recipes, error } = await useAsyncData("recipes", () => {
  return $fetch(env.public.apiUrl + "/recipes");
});

// index de 0 à 3 (4 exclus)
const recipesInHero = 4;
const heroRecipes = computed(() => {
  return recipes.value.slice(0, recipesInHero);
});
</script>

<template>
  <div class="p-index">
    <!-- <PrismicRichText
      class="P-index__title"
      v-bind="{ field: home.data.hero_title }"
    ></PrismicRichText> -->
    <div class="p-index__hero">
      <div class="p-index__hero-content">
        <MyHero
          :title="home.data.hero_title"
          :text="home.data.hero_text"
          :buttons="home.data.hero_buttons"
        ></MyHero>
      </div>
      <!-- <p>{{ home.data.hero_buttons }}</p> -->
      <div>
        <img class="p-index__img" src="Abstract.svg" alt="" />
      </div>
      <div class="p-index__recipes">
        <div v-for="recipe in heroRecipes">
          <MyCard2
            v-bind="{
              id: recipe.recipe_id,
              title: recipe.recipe_name,
              description: recipe.recipe_description,
            }"
          ></MyCard2>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="p-index__AllRecipes">
        <div v-for="recipe in recipes">
          <MyCard
            buttonLabel="Add to cart"
            v-bind="{
              id: recipe.recipe_id,
              title: recipe.recipe_name,
              description: recipe.recipe_description,
            }"
          ></MyCard>
        </div>
      </div>
    </div>

    <!-- <p>{{ recipes }}</p> -->
  </div>
</template>

<style lang="scss">
.p-index {
  &__recipes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 50px;
  }
  &__hero-content {
    margin-top: 200px;
    margin-left: rem(30);
  }
  &__hero {
    display: flex;
  }
  &__img {
    height: 100%;
  }
  &__AllRecipes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 50px;
  }
}
.flex {
  display: flex;
  justify-content: center;
}
</style>
