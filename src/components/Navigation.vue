<template>
  <span>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="brown lighten-2"
      dark
      disable-resize-watcher
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>
              {{ item.title }}
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="brown darken-4" dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer">
      </v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/">
        <v-toolbar-title>
          {{ appTitle }}<span class="beta"> beta</span></v-toolbar-title
        >
      </router-link>
      <v-btn flat class="hidden-sm-and-down" to="/admin">Admin</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn flat class="hidden-sm-and-down" to="/sign-in">SIGN IN</v-btn>
      <v-btn color="brown lighten-3" class="hidden-sm-and-down" to="/sign-up"
        >Sign Up
      </v-btn>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      appTitle: "WhatsMy",
      drawer: false,
      items: [
        { title: "Menu" },
        { title: "Admin" },
        { title: "Sign In" },
        { title: "Sign Up" }
      ]
    };
  }
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
.beta {
  font-size: 0.9rem;
  font-weight: bolder;
  letter-spacing: 0.3rem;
  vertical-align: bottom;
  color: aquamarine;
}
</style>
