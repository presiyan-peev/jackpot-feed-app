<template>
  <div class="padding">
    <div :class="{stars: stars}">
      <div class="transparentComponent">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stars"]
};
</script>

<style>
.stars {
  background: url("../assets/stars.png");
}
.padding {
    padding-bottom: 21px;
}
.transparentComponent {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 82px;
  background: radial-gradient(rgba(0, 0, 0, 0.452) 50%, rgba(33, 39, 89, 0.747) 75%);
}
</style>