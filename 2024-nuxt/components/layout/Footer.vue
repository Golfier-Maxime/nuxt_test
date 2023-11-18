<template>
  <div class="l-Footer">
    <div>
      <img src="logo.png" alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Commodo libero viverra dapibus odio sit malesuada in quis. <br />
        Arcu tristique elementum viverra integer id.
      </p>
    </div>
    <div>
      <p class="l-Footer__text">Opening Restaurant</p>
      <p class="l-Footer__marge">Sat-Wet: 09:00am-10:00PM</p>
      <p>Thursdayt: 09:00am-11:00PM</p>
      <p>Friday: 09:00am-8:00PM</p>
    </div>
    <div>
      <p class="l-Footer__text">User Link</p>
      <p class="l-Footer__marge">About Us</p>
      <p>Contact Us</p>
      <p>Order Delivery</p>
      <p>Payment & Tex</p>
      <p>Terms of Services</p>
    </div>
    <div>
      <p class="l-Footer__text">Contact Us</p>
      <p class="l-Footer__marge">1234 Country Club Ave</p>
      <p>NC 123456, London, UK</p>
      <p>+0123 456 7891</p>
    </div>
  </div>
</template>

<style lang="scss">
.l-Footer {
  display: flex;
  justify-content: space-around;
  gap: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
  &__text {
    font-size: 24px;
    font-weight: bold;
  }
  &__marge {
    margin-top: 20px;
  }
}
</style>
