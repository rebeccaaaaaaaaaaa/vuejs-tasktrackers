<script lang="ts">
console.log("Is Working");
import { defineComponent } from "vue";
import BarraLaterral from "./components/BarraLaterral.vue";


export default defineComponent({
  name: "App",
  components: { BarraLaterral},
  data (){
    return{
      modoEscuroAtivo: false
    }
  },
  methods: {
    trocarTema(modoEscuroAtivo : boolean){
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>

<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLaterral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
     <RouterView></RouterView>
    </div>
  </main>
</template>

<style scoped>
main {
  --bg-primario: #fff;
  --texto-primario: #000
}

main.modo-escuro{
  --bg-primario: #2b2d42;
  --texto-primario: #ddd
}

.conteudo{
  background-color: var(--bg-primario);
}

</style>
