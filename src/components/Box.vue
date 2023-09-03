<template>
     <div class="box has-text-weight-bold" :style="estilos">
      <slot></slot>
     </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Box',
    data(){
      return {
        // bom pra usar quando algum estado altera um estilo
        estilos: {
          fontSize: '20px'
        }
      }
    }
})

</script>

<style scoped>
.box {
  background-color: #faf0ca;
}
</style>