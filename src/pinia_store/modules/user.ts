import { defineStore } from "pinia";

interface IUser {
  name: string;
  age: number;
}

export const useUserStore = defineStore("user", {
  state() {
    return {
      userList: [] as IUser[],
    };
  },
  actions: {
    getList() {
      // 模拟从后端获取数据
      let resList: IUser[] = [
        { name: "张三", age: 18 },
        { name: "李四", age: 19 },
      ];
      //   resList[0].name  此时resList[0]只能点出 name 或 age
      this.userList = resList;
    },
  },

  // 持续化
  persist: true,
});
