<script setup>
const route = useRoute();
</script>

<template>
  <div class="p-recipe-id">
    <p>recette avec id : {{ route.params.id }}</p>
  </div>
</template>

<style lang="scss"></style>
