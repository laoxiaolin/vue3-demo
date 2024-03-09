import { createStore } from 'vuex'

const modules = {}

async function importAllModules() {
  const files = import.meta.glob('./modules/*.{js,ts}')
  for (const path in files) {
    const key = path.match(/([a-z_1-9]+)\.js$/i)[1]
    // const key = path.replace(/\.\/modules\/|\.js/g, '')
    // console.log(path, key)
    const module = await files[path]()
    modules[key] = module.default
  }
}

await importAllModules()

const test3 = {
  test3: {
    state: {
      test3: 'ref(3)'
    },

    mutations: {
      setTest3(state, param) {
        state.test3 = param
      }
    }
  }
}
const newModuels = Object.assign(modules, test3)   //合并对象
// console.log(newModuels)

//创建 vuex Store
const store = createStore({
  modules
})
// console.log(store)

export default store
