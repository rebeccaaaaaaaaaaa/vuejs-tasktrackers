<template>
  <div>
    <strong class="display">{{ tempoDecorrido }}</strong>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Cronometro',
  props: {
    tempoEmSegundos: {
      type: Number,
      default: 0
    }
  },
  computed: {
    // similar ao useEffect
    // posso passar uma função q retorna algo como se fosse uma prop
    tempoDecorrido() {
      return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11, 8)
    }
  }
})
</script>

<style scoped>
 .display{
  color: var(--texto-primario);
  background-color: var(--bg-primario);
 }
</style>
