export default {
  namespaced: true,
  state: {
    loading: false,
    list: []
  },
  getters: {
    formatList(state) {
      return state.list.map(item => item.label);
    }
  },
  mutations: {
    setList(state, data) {
      state.list = data || [];
    }
  },
  actions: {
    getList({ state, commit }, payload) {
      new Promise((resolve, reject) => {
        state.loading = true;
        setTimeout(() => {
          resolve([
            {
              label: 'L1',
              value: '01'
            },
            {
              label: 'L2',
              value: '02'
            },
            {
              label: 'L3',
              value: '03'
            }
          ]);
        }, 1500);
      })
        .then(res => {
          state.loading = false;
          commit('setList', res);
        })
        .catch(err => err);
    }
  }
};
