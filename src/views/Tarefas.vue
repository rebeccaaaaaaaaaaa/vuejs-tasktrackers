<script lang="ts">
import { defineComponent } from "vue";
import FormularioContent from "../components/Formulario.vue";
import Tarefa from '../components/Tarefa.vue'
import Box from '../components/Box.vue'
import type {ITarefa} from '../interfaces/ITarefa'

export default defineComponent({
  name: "Tarefas",
  components: { FormularioContent, Tarefa, Box },
  data (){
    return{
      tarefas: [] as ITarefa[]
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
    }
  }
});
</script>

<template>
      <FormularioContent @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
        <Box v-if="listaEstaVazia">
          Você ainda não adicionou nenhuma tarefa!
        </Box>
      </div>
</template>

<style scoped>

.lista{
  padding: 1.2rem;
}

</style>