<script lang="ts">
console.log("Is Working");
import { defineComponent } from "vue";
import BarraLaterral from "./components/BarraLaterral.vue";
import FormularioContent from "./components/Formulario.vue";
import Tarefa from './components/Tarefa.vue'
import Box from './components/Box.vue'
import type ITarefa from './interfaces/ITarefa'

export default defineComponent({
  name: "App",
  components: { BarraLaterral, FormularioContent, Tarefa, Box },
  data (){
    return{
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false
    }
  },
  computed:{
    listaEstaVazia() : boolean{
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa){
      this.tarefas.push(tarefa)
    },
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
      <FormularioContent @aoSalvarTarefa="salvarTarefa"/>
      <!-- Lista de tarefas -->
      <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
        <Box v-if="listaEstaVazia">
          Você ainda não adicionou nenhuma tarefa!
        </Box>
      </div>
    </div>
  </main>
</template>

<style scoped>
.lista{
  padding: 1.2rem;
}

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
