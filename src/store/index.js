import { createStore } from "vuex";
import { UserModule } from "./User";

export default createStore({
  state: {},
  //EFFECT THE STATE
  mutations: {},
  //CALLING MUTATIONS
  actions: {},

  modules: {
    User: UserModule,
  },
});
