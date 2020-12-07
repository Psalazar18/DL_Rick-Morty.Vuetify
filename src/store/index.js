import Vue from 'vue'
import Vuex from 'vuex'
import { db } from "../main";
import router from '../router/index';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: []
  },
  getters: {
    traerCharacters(state){
      return state.characters;
    }
  },
  mutations: {
    mutarCharacters(state,array){
      state.characters = array;
    }
  },
  actions: {
    traerData({commit}){
      db.collection("characters").onSnapshot(respuesta => {
        let array = [];
        respuesta.forEach(element =>{
          array.push({
            id: element.id,
            name: element.data().name,
            image: element.data().image,
          })
        });
        commit('mutarCharacters',array);
      });
    },
    eliminarCharacter(context, id){
      db.collection('characters').doc(id).delete().then(()=>{
      }).catch(error=>{
        console.log(error);
      })
    },
    Editing(context, data){
      db.collection("characters").doc(data.id).update({
        name: data.name,
        image: data.image,
        id: data.id
      }).then(()=>{
        setTimeout(()=>{
          router.push('/cards');
        },1000);
      })
    },
    addingCharacter(context, data){
      db.collection("characters").add({
        name: data.name,
        image: data.image,
      }).then(resp=>{
        console.log(resp);
      })
    }
    

  },
})
