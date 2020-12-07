<template>
  <div>
      <v-toolbar dense dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title class="text-center">Rick y Morty</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>      
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('traerData'); 
  },
};
</script>
