<script setup>
import MyTitle from "../components/elements/MyTitle.vue";
import MyIcon from "../components/elements/MyIcon.vue";

defineProps({
  imageSrc: String,
  imageAlt: String,
  title: String,
  prix: String,
  desc: String,
});
</script>

<template>
  <div class="card">
    <div class="card__logo">
      <MyIcon name="fc" color="light-orange"></MyIcon>
    </div>
    <div class="card__c1">
      <MyTitle size="weight" :content="title" class="card__c1--title">
        {{ content }}</MyTitle
      >
      <p class="card__c1--desc">
        But I must explain to you how all this mistaken idea of denouncing
        pleasur and prasising pain was bron.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  font-family: Arial, Helvetica, sans-serif;

  margin-top: 50px;

  &__logo {
    display: flex;
    justify-content: center;
  }

  .card__arrow {
    margin-top: -25px;
    margin-bottom: -100px;
    display: flex;
    justify-content: center;
    gap: 40px;
  }
  .card__c1 {
    display: flex;
    flex-direction: column;
    padding-right: 30px;
    padding-left: 30px;
    margin-top: -120px;
    padding-top: 150px;
    padding-bottom: 100px;
    border-radius: rem(20);
    box-shadow: -2px 0px 10px 1px rgb(200, 200, 200),
      2px 0px 10px 1px rgb(200, 200, 200);
  }
  .card__c1--title {
    margin-left: 20px;
    margin-top: rem(32);
    display: flex;
    justify-content: center;
  }
  .card__c1--desc {
    margin-left: 20px;
    margin-top: rem(32);
    display: flex;
    justify-content: center;
  }
  .card__c1--prix {
    padding-bottom: rem(32);
    margin-left: 20px;
    margin-top: rem(16);
    display: flex;
    justify-content: center;

    &::before {
      content: "$ ";
      color: red;
    }
  }
}
</style>
