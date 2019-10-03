<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <my-button @click="onMyButtonClick" button-text="My button" />"
    <my-button2 @click="onMyButton2Click" button-text="My button 2" />
    <div>Last button clicked: {{ lastButtonClicked }}</div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MyButton from "./components/MyButton";
import MyButton2 from "./components/MyButton2";

export default {
  name: "app",
  components: {
    HelloWorld,
    MyButton,
    MyButton2
  },
  data() {
    return { lastButtonClicked: "" };
  },
  methods: {
    onMyButtonClick() {
      this.lastButtonClicked = "My Button";
    },
    onMyButton2Click() {
      this.lastButtonClicked = "My Button 2";
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
