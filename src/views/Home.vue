<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <firebase msg="msg from home" />
  </div>
</template>

<script>
// @ is an alias to /src
import Firebase from "@/components/Firebase.vue";

export default {
  name: "home",
  components: {
    Firebase
  }
};
</script>
