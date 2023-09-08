import type IProjeto from "@/interfaces/IProjeto";
import { createStore, Store, useStore as vueXUseStore } from "vuex";
import type { InjectionKey } from 'vue'

interface Estado {
  projetos: IProjeto[];
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    projetos: [],
  },
  mutations: {
    'ADD_PROJECT'(state: any, nomeDoProjeto: string){
      const projeto = {
        id: new Date().toLocaleDateString(),
        nome: nomeDoProjeto
      } as IProjeto
      state.projetos.push(projeto)
    },
  }
});

export function useStore() : Store<Estado>{
  return vueXUseStore(key)
}






























