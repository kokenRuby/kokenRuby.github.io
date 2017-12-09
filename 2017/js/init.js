const store = new Vuex.Store({
  state: {
    content: ""
  },
  mutations: {
    changeContent: function (state, payload) {
      let vuex_store = state;

      axios.get('https://kokenstudy.github.io/2017/contents/section_' + payload.section + '/' + payload.page + '.md').then(function (res) {
        vuex_store.content = res.data;
      })
    }
  },
  methods: {
  }
})

window.vm = new Vue({
  el: '#app',
  components: {
    App, Content
  },
  store
})
