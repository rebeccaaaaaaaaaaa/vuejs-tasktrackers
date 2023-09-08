<template>
  <section class="projetos p-5">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvar">
        <div class="field">
            <label class="label" for="nomeDoProjeto">
                Nome do projeto
            </label>
            <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto"/>
        </div>
        <div class="field">
            <button class="button" type="submit">
                Salvar
            </button>
        </div>
    </form>
    <table class="table is-fullwidth mt-5">
        <thead>
            <tr>
                <th> ID</th>
                <th> Nome do Projeto</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="projeto in projetos" :key="projeto.id">
                <td> {{ projeto.id}} </td>
                <td> {{ projeto.nome }} </td>
            </tr>
        </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import type IProjeto from "@/interfaces/IProjeto";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Projetos",
  data(){
    return{
        nomeDoProjeto: '',
        projetos: [] as IProjeto[]
    }
  },
  methods:{
    salvar(){
        const projeto: IProjeto = {
            nome: this.nomeDoProjeto,
            id: new Date().toLocaleDateString(),
        }
        this.projetos.push(projeto)
        this.nomeDoProjeto = ''
    }
  }
});
</script>
