import { ref } from 'vue'

export default {
  state: {
    test2: 'ref(1)'
  },

  mutations: {
    setTest2(state, param) {
      state.test2 = param
    }
  }
}
