<template>
  <div>
    <div id="message">
      <h2>Welcome</h2>
      <h1>Firebase Hosting Setup Complete</h1>
      <p>
        You're seeing this because you've successfully setup Firebase Hosting.
        Now it's time to go build something extraordinary!
      </p>
      <a target="_blank" href="https://firebase.google.com/docs/hosting/"
        >Open Hosting Documentation</a
      >
    </div>
    <p id="load">Firebase SDK Loading&hellip;</p>
    <p>Inbound data: {{ msg }}</p>
    <p v-for="book of books" :key="book.id">{{ book.title }}</p>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Firebase",
  data() {
    return {
      books: [],
      book: {}
    };
  },
  props: {
    msg: String
  },
  firestore() {
    return {
    };
  },
  created() {
    this.source = booksRef
    this.$store.dispatch('setBooksRef', this.source)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
