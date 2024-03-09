// import { useUserStore } from "./modules/user";
// import { useCounterStore } from "./modules/counter"

// const useStore = () => {
//   return {
//     user: useUserStore(),
//     counter: useCounterStore(),
//   };
// }

// export default useStore;
const appStore: {[x:string]: any} = {};

async function importAllModules() {
  const modulesFiles = import.meta.globEager('./modules/*.{js,ts}')
  const pathList: string[] = [];

  // console.log('modulesFiles', modulesFiles)
  // console.log('pathList', pathList)
  for (const path in modulesFiles) {
    pathList.push(path);
  }

  const modules = pathList.reduce((modules: { [x: string]: any }, modulePath: string) =>{
    const value = modulesFiles[modulePath];
    for(const key in value){
      modules[key] = modulesFiles[modulePath][key];
    }
    return modules;
  }, {})
  
  // console.log('modules', modules)
  return modules;
}

const all_modules = await importAllModules()
// console.log('all_modules', all_modules)

export const registerStore = () =>{
  for(const key in all_modules){
    // console.log('key', key)
    appStore[key] = all_modules[key]()
  }
}
// console.log('appStore', appStore)

export default appStore