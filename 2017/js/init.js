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
    },
    changeTestContent: function (state) {
      state.content = "" +
        "# midasi 1 \n " +
        "## midasi 2 \n " +
        "### midasi 3 \n " +
        "#### midasi 4 \n" +
        "##### midasi 5 \n" +
        "###### midasi 6 \n" +
        "kaigyou \n" +
        "hoge  \n" +
        "fuga\n" +
        "> 引用\n" +
        ">> 多重引用\n" +
        "[Google]: http://www.yahoo.co.jp\n" +
        "*Italic*, _Italic_, **Bold**, __Bold__\n" +
        "```ruby \n" +
        "def sample \n" +
        "  a = 2 \n" +
        "  puts 'fjeiwjf ' \n" +
        "end \n" +
        "``` \n"
        ;
    }
  },
  getters: {
    content(state) {
      _.debounce(function () { hljs.highlightBlock(document.querySelector('pre code')); }, 1000)
      return state.content
    }
  }
})

window.vm = new Vue({
  el: '#app',
  components: {
    App, Content
  },
  store
})
