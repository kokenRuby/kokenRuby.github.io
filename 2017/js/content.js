let Content = {
  data: function () {
  },
  filters: {},
  methods: {
  },
  computed: {
    compiledMarkdown: function () {
      // _.debounce(function () { hljs.highlightBlock(document.querySelector('pre code')); }, 1000)
      return marked(this.$store.state.content)
    }
  },
  template: `
  <div class="box container" style="margin-top: 2rem;">
    <div class="main-contents" v-html="compiledMarkdown"></div>
  </div>
  `
};
