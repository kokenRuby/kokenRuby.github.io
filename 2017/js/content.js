let Content = {
  data: function () {
  },
  filters: {},
  methods: {
    highlightCode: _.debounce (
      function () {
        let codes = document.querySelectorAll('pre');
        if (codes) {
          for (let i = 0; i < codes.length; i++) {
            hljs.highlightBlock(codes.item(i));
          }
        }
      },
      1000
    )
  },
  computed: {
    compiledMarkdown: function () {
      this.highlightCode();
      return marked(this.$store.state.content)
    }
  },
  template: `
  <div class="box container" style="margin-top: 2rem;">
    <div class="main-contents" v-html="compiledMarkdown"></div>
  </div>
  `
};
