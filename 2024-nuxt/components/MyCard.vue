<script setup>
import MyButton from "../components/elements/MyButton.vue";
import MyTitle from "../components/elements/MyTitle.vue";

defineProps({
  imageSrc: String,
  imageAlt: String,
  title: String,
  note: String,
  prix: String,
  buttonLabel: String,
  id: Number,
  description: String,
});
</script>

<template>
  <div class="card">
    <div class="card__image">
      <img class="card__image--size" :src="imageSrc" :alt="imageAlt" />
    </div>
    <div class="card__c1">
      <div class="card__title">
        <MyTitle size="weight" :content="title"></MyTitle>
      </div>
      <div class="card__note">
        <img
          class="card__note--etoile"
          src="etoile_note.svg"
          alt="etoile note"
        />
        <p class="card__note--chiffre">{{ note }}</p>
      </div>
    </div>
    <div class="card__desc">
      <p>{{ description }}</p>
    </div>
    <div class="card__c2">
      <div class="card__button">
        <MyButton size="small" variant="rounded">{{ buttonLabel }}</MyButton>
      </div>
      <div class="card__prix">
        <p>
          <!-- {{ prix }} -->
          $25.00
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  font-family: Arial, Helvetica, sans-serif;
  max-width: 400px;
  max-height: 485px;
  border-radius: rem(20);
  box-shadow: -2px 0px 10px 1px rgb(200, 200, 200),
    2px 0px 10px 1px rgb(200, 200, 200);

  .card__image--size {
    width: 485px;
    height: 333px;
    border-radius: rem(20) rem(20) 0px 0px;
  }

  .card__c1 {
    display: flex;
    justify-content: space-between;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: rem(16);
    align-items: center;
  }
  .card__c2 {
    display: flex;
    justify-content: space-between;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: rem(16);
    align-items: center;
    padding-bottom: rem(16);
  }
  .card__note {
    display: flex;
    gap: rem(16);
    align-items: center;
  }
  .card__desc {
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 10px;
  }
}
</style>
