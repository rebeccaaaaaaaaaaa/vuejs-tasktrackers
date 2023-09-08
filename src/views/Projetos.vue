<template>
  <section class="projetos p-5">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvar">
      <div class="field">
        <label class="label" for="nomeDoProjeto"> Nome do projeto </label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto" />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
    <table class="table is-fullwidth mt-5">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome do Projeto</th>
          <th>Editar</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
          <td>
            <button class="button">
              <i class="fa fa-edit"></i>
            </button>
          </td>
          <td>
            <button class="button">
              <i class="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { useStore } from '../store'
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Projetos',
  setup() {
    const store = useStore()

    const nomeDoProjeto = ref('')

    const salvar = () => {
      store.commit('ADD_PROJECT', nomeDoProjeto.value)
      nomeDoProjeto.value = ''
    }
    return {
      projetos: computed(() => store.state.projetos),
      nomeDoProjeto,
      salvar,
    }
  },
})
</script>

