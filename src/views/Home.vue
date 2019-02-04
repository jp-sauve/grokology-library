<template>
  <span>
    <home-hero></home-hero>
    <book-list></book-list>
  </span>
</template>

<script>
import HomeHero from "@/components/HomeHero.vue";
import BookList from "@/components/BookList.vue";

export default {
  name: "home",
  components: {
    HomeHero,
    BookList
  }
};
</script>
