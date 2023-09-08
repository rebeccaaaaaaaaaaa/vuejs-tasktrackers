import type IProjeto from "@/interfaces/IProjeto";
import { createStore, Store } from "vuex";
import type { InjectionKey } from 'vue'

interface State {
  projetos: IProjeto[];
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    projetos: [
      {
        id: new Date().toLocaleDateString(),
        nome: "Estudar VueX",
      },
    ],
  },
});
