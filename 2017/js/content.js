let Content = {
  data: function () {
  },
  filters: {},
  methods: {
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.$store.state.content)
    }
  },
  template: `
  <div class="box container" style="margin-top: 2rem;">
    <div v-html="compiledMarkdown"></div>
  </div>
  `
};
