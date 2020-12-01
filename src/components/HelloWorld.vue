<template>
  <v-container>
    <v-row no-gutters style="height: 150px;">
      <v-col md="4" lg="4" v-for="(item,index) in Personajes" :key="index">
        <v-card max-width="350" class="my-auto" >
          <v-img :src="item.image"></v-img>
          <v-card-text class="black--text">
            <v-card-title class="text-center">{{item.name}}</v-card-title>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      Personajes: [
        {name: 'Rick Sanchez', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},
        {name: 'Morty Smith', image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'},
        {name: 'Summer Smith', image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'},
        {name: 'Beth Smith', image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'},
        {name: 'Jerry Smith', image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg'},
        {name: 'Abadango Cluster Princess', image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}
      ]
    } 
  },
}
</script>