let App = {
  data: function () {
    return {
      isOpenDrawer: false,
      sections: [
        {
          id: 0,
          title: '第0回~環境構築~',
          pages: [
            { id: 1, name: '必要ソフトのインストールをしよう' },
            { id: 2, name: 'vimの使い方' },
            { id: 3, name: 'MySQLの使い方' }
          ]
        },
        {
          id: 1,
          title: '第1回~HTML,CSS,Ruby,javascript~',
          pages: [
            { id: 1, name: 'HTML, CSS入門' },
            { id: 2, name: 'javascript入門' },
            { id: 3, name: 'Ruby基本文法入門' }
          ]
        },
        {
          id: 2,
          title: '第2回~Rails入門~ railsコマンドの使い方を覚える',
          pages: [
            { id: 1, name: 'Railsとは' },
            { id: 2, name: 'オブジェクト指向とは？クラスとは何か' },
            { id: 3, name: 'MVCアーキテクチャとは' },
            { id: 4, name: 'Railsコマンドを使いこなす' },
            { id: 5, name: 'Rails開発の流れを学ぼう' }
          ]
        },
        {
          id: 3,
          title: '第3回~WEBサービス作成1~',
          pages: [
            { page: 1, name: 'Twitterもどきを作ろう' }
          ]
        },
        {
          id: 4,
          title: '第4回~WEBサービス作成2~',
          pages: [
            { id: 1, name: 'Databaseとは' }
          ]
        },

      ]
    };
  },
  filters: {},
  methods: {
    toggleDrawer: function () {
      this.isOpenDrawer = !this.isOpenDrawer;
    },
    changeContent: function (section, page) {
      this.$store.commit('changeContent', { section: section, page: page })
    },
    changeTestContent: function () {
      this.$store.commit('changeTestContent');
    }
  },
  components: {
    Content
  },
  template: `
  <div v-bind:class='{"side-open": isOpenDrawer}'>

    <!-- サイドオープン時メインコンテンツを覆う -->
    <div class="overlay" v-on:click="toggleDrawer"></div>

    <!-- 開閉用ボタン -->
    <a class="side-menu-btn button" v-on:click='toggleDrawer'>
      <span class="icon">
        <i class="fa fa-navicon fa-2x"></i>
      </span>
    </a>

    <!-- サイドメニュー(drawer menu bar) -->
    <div class="side-menu">
      <aside class="menu scroll">

        <template v-for="section in sections">
        <p class="menu-label">{{ section.title }}</p>
        
        <ul class="menu-list">
          <template v-for="page in section.pages">
          <li>
            <a v-on:click="changeContent(section.id, page.id)">
              <span class="icon"><i class="fa fa-window-maximize"></i></span>
              <span>{{ page.name }}</span>
            </a>
          </li>
          </template>
        </ul>
        </template>

        <p class="menu-label">test</p>
        <ul class="menu-list">
          <li>
            <a v-on:click="changeTestContent()">
              <span class="icon"><i class="fa fa-window-maximize"></i></span>
              <span>test</span>
            </a>
          </li>
        </ul>

      </aside>
    </div>
    <!-- サイドメニュー -->

    <!-- drawer menuによってずれるもの -->
    <div class="wrapper">

      <!-- header -->
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-start">
          <!-- navbar items -->
        </div>

        <div class="navbar-end">
          <!-- navbar items -->
          <a class="navbar-item" href="">
            <img src="https://thinkster.io/assets/homepage/rails-9b13de39de9d2eed10a2418734ee1e584cdc9634c04206af1c2bfcc8b0d0e3d5.png" alt="(No Image)" width="28" height="28">
            <span style="padding-left: 0.5rem; font-size: 1.5rem; font-weight: bold;">Ruby on Rails Lecture</span>
          </a>
        </div>
      </nav>

      <div class="header-content" style="width: 100%; min-height: 20rem;" >
      </div>

      <!-- main contents -->
      <div class="main-content">
        <Content />
      </div>

      <!-- footer -->
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            <h4>
              <strong>2017. Ruby on Rails lecture by <a href="">Takuto Ohoka(koken15)</a>. </strong>
            </h4>
          </div>
        </div>
      </footer>

    </div>

  </div>
  `
};
