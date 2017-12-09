const store = new Vuex.Store({
  state: {
    content: ""
  },
  mutations: {
    changeContent: function (state, payload) {
      // console.log("section: " + payload.section + ", page: " + payload.page)
      // state.content = "# changed!!";

      // Json取得
      // this.get_ajax('contents/section_0/1.md', 'content');
      let vuex_store = state;

      axios.get('https://kokenstudy.github.io/2017/contents/section_0/1.md').then(function (res) {
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
