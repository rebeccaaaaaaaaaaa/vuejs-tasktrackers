<template>
    <header>
        <h1>
            <img src="../assets//logo.svg" alt="Logo" width="100">
        </h1>
        <button class="button" @click="alterarTema">
          {{ textoBotao }}
        </button>
        <nav class="menu mt-5">
          <ul class="">
            <li>
              <RouterLink :to="'/'" class="link">
                <i class="fa fa-tasks"></i>
                Tarefas
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="'/projetos'" class="link">
                <i class="fa fa-project-diagram"></i>
                Projetos
              </RouterLink>
            </li>
          </ul>
        </nav>
    </header>
</template>

<script lang="ts">
 import { defineComponent } from 'vue';

 export default defineComponent({
    name: 'BarraLateral',
    emits: ['aoTemaAlterado'],
    data(){
      return {
        modoEscuroAtivo: false
      }
    },
    computed:{
      textoBotao(){
        if(this.modoEscuroAtivo){
          return 'Desativar modo escuro'
        }
        return 'Ativar modo escuro'
      }
    },
    methods:{
      alterarTema(){
        this.modoEscuroAtivo = !this.modoEscuroAtivo
        this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
      }
    }
 })
</script>

<style scoped>
/* todo o estilo do componente */
header {
  padding: 1rem;
  background:  var(--bg-primario);
  width: 100%;
  height: 100vh;
  text-align: center;
  border-right: solid 1px #eee;
}

h1{
    text-align: center;
}

.menu li {
    margin: 8px 0;
}
.link {
    color: var(--texto-primario);
}
.link:hover {
    color: #FAF0CA;
}
.link.router-link-active {
    color: #10c166;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>