<template>
  <div>
    <input type="text" v-model="message" />
    <br />
    <button v-on:click="start">start</button>
  </div>
</template>

<script>
export default {
  name: "start_page",
  data: function() {
    return {
      message:''
    };
  },
  methods: {
    start: function() {
      this.$router.push("/welcome/" + this.message);
    }
  }
};
</script>