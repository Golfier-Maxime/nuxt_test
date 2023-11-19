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

// index de 0 à 5 (6 exclus)
const recipesInCard = 6;
const cardRecipes = computed(() => {
  return recipes.value.slice(0, recipesInCard);
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
              imageSrc: recipe.image_url,
            }"
          ></MyCard2>
        </div>
      </div>
    </div>

    <div class="p-index__contact">
      <div class="p-index__contact-time">
        <img src="logo_time.svg" alt="" class="p-index__contact-time-logo" />
        <p>Today 10:00am - 10:00pm</p>
        <p>Working time</p>
      </div>
      <div class="p-index__contact-time">
        <img src="logo_time.svg" alt="" class="p-index__contact-time-logo" />
        <p>Washington, D.C., DC,USA</p>
        <p>Our Location</p>
      </div>
      <div class="p-index__contact-time">
        <img src="logo_time.svg" alt="" class="p-index__contact-time-logo" />
        <p>+0123 456 7891</p>
        <p>Phone Number</p>
      </div>
    </div>

    <div class="p-index__titre">
      <p class="p-index__titre-product">Product</p>
      <h2 class="p-index__titre-item">Most Popular Items</h2>
    </div>
    <div class="flex">
      <div class="p-index__AllRecipes">
        <div v-for="recipe in cardRecipes">
          <MyCard
            buttonLabel="Add to cart"
            v-bind="{
              id: recipe.recipe_id,
              title: recipe.recipe_name,
              description: recipe.recipe_description,
              imageSrc: recipe.image_url,
            }"
          ></MyCard>
        </div>
      </div>
    </div>
    <div class="p-index__titre">
      <p class="p-index__titre-product">Services</p>
      <h2 class="p-index__titre-item">Why Choose Our Favorite Food</h2>
    </div>
    <div class="p-index__card3">
      <MyCard3 title="Qualityfull Food" class="p-index__card3-card"></MyCard3>
      <MyCard3 title="Healthy Food"></MyCard3>
      <MyCard3 title="Fast Delivery"></MyCard3>
    </div>
    <!-- <p>{{ recipes }}</p> -->
  </div>
</template>

<style lang="scss">
.p-index {
  &__card3 {
    display: flex;
    justify-content: center;
    gap: 40px;
  }

  &__recipes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 50px;
  }
  &__contact {
    border-radius: rem(20);
    box-shadow: -2px 0px 10px 1px rgb(200, 200, 200),
      2px 0px 10px 1px rgb(200, 200, 200);
    display: flex;
    justify-content: space-evenly;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-top: 200px;
    margin-bottom: 50px;
  }
  &__contact-time {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__contact-time-logo {
    width: 42px;
    margin-bottom: 1rem;
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
  &__titre {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  &__titre-product {
    color: $primary-color;
    font-size: 18px;
    margin-top: 20px;
  }

  &__titre-item {
    font-weight: bold;
    font-size: 36px;
  }
}
.flex {
  display: flex;
  justify-content: center;
}
</style>
