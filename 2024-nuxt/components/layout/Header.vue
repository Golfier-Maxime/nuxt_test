<template>
  <div class="l-Header">
    <img src="logo.png" alt="" />
    <div class="l-Header__menu">
      <p>Home</p>
      <p>Menu</p>
      <p>Service</p>
      <p>Shop</p>
    </div>
    <div class="l-Header__search">
      <img src="search.svg" alt="" />
      <input class="l-Header__search-input" type="text" placeholder="Search" />
      <img src="shop.svg" alt="" />
    </div>
  </div>
</template>

<style lang="scss">
.l-Header {
  display: flex;
  justify-content: space-around;
  &__menu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
  &__search {
    padding-right: 30px;
    padding-left: 30px;
    display: flex;
    gap: 20px;
    border-radius: rem(5);
    box-shadow: -2px 0px 10px 1px rgb(200, 200, 200),
      2px 0px 10px 1px rgb(200, 200, 200);
  }
  &__search-input {
    border: none;
  }
}
</style>
