var App = {
  data: function () {
    return {
      isOpenDrawer: false
    };
  },
  filters: {},
  methods: {
    toggleDrawer: function () {
      this.isOpenDrawer = !this.isOpenDrawer;
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
      <aside class="menu">
        <p class="menu-label">第1回講習</p>
        <ul class="menu-list">
          <li>
            <a href="http://google.com">
              <span class="icon">
                <i class="fa fa-home"></i>
              </span>
              <span>Home</span>
            </a>
          </li>
        </ul>
        <p class="menu-label">第2回講習</p>
        <ul class="menu-list">
          <li>
            <a>
              <span class="icon">
                <i class="fa fa-book"></i>
              </span>
              <span>Book検索</span>
            </a>
          </li>
          <li>
            <a class="is-active">
              <span class="icon">
                <i class="fa fa-user"></i>
              </span>
              <span>User検索</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon">
                <i class="fa fa-tags"></i>
              </span>
              <span>Tag検索</span>
            </a>
          </li>
        </ul>
        <p class="menu-label">第3回講習</p>
        <ul class="menu-list">
          <li>
            <a>
              <span class="icon">
                <i class="fa fa-book"></i>
              </span>
              <span>Book</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon">
                <i class="fa fa-tag"></i>
              </span>
              <span>Tag</span>
            </a>
          </li>
        </ul>
        <p class="menu-label">第4回講習</p>
        <ul class="menu-list">
          <li>
            <a href="/users/edit">
              <span class="icon">
                <i class="fa fa-cog"></i>
              </span>
              <span>設定</span>
            </a>
          </li>
          <li>
            <a href="/users/sign_out">
              <span class="icon">
                <i class="fa fa-sign-out"></i>
              </span>
              <span>ログアウト</span>
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
              <strong>2017. Ruby on Rails lecture by <a href="">Takuto Ohoka(koken15)</a>. 
            </h4>
          </div>
        </div>
      </footer>

    </div>

  </div>
  `
};

window.vm = new Vue({
  el: '#app',
  components: {
    App, Content
  }
})