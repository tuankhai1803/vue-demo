import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const host = "https://provinces.open-api.vn";

export const store = new Vuex.Store({
  state: {
    cities: [],
  },
  mutations: {
    getInfo(state, payload) {
      state.cities = payload.cities;
    },
    searchByName(state, payload) {
      state.cities = payload.cities;
    },
  },
  actions: {
    async getInfo({ commit }) {
      const res = await axios.get(`${host}/api/?depth=2`);
      commit("getInfo", {
        cities: res.data,
      });
    },
    async searchByName({ commit }, searchText) {
      const res = await axios.get(`${host}/api/d/search/?q=${searchText}`);
      commit("searchByName", {
        cities: res.data,
      });
    },
  },
  getters: {
    filterTheCity: function(state) {
      return state.cities.map(
        ({ division_type, code, codename, name, phone_code }) => ({
          code,
          codename,
          division_type,
          name,
          phone_code,
        })
      );
    },
  },
});
