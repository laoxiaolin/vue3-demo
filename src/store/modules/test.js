import { ref } from 'vue'

export default {
  state: {
    test: 'ref(1)'
  },

  mutations: {
    setTest(state, param) {
      state.test = param
    }
  }
}
