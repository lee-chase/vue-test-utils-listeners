<template>
  <button v-bind="$attrs" v-on="$listeners" @click="$emit('click', e)">
    <div class="content">{{ buttonText }}</div>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  inheritAttrs: false,
  props: {
    buttonText: { type: String, default: "Button" }
  }
};
</script>

<style lang="scss" scoped>
$size: 256px;

button {
  background-color: #35495e;
  border: 2px solid #41b883;
}

.content {
  color: #fff;
}
</style>
