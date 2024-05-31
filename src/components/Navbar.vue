<template>
  <!-- header -->
  <div style="background-image: url(https://agrstat.moa.gov.tw/sdweb/images/banner_bg.gif);">
    <img src="https://agrstat.moa.gov.tw/sdweb/images/banner.jpg?1120731" alt="農業統計資料查詢" class="img-fluid"/>
  </div>

  <nav class="book-navbar navbar navbar-expand-lg py-md-0">
    <div class="container px-md-0">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bookNavBar"
              aria-controls="bookNavBar" aria-expanded="false">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- nav wrapper -->
      <div id="bookNavBar" class="collapse navbar-collapse">
        <ul class="navbar-nav mb-sm-0 w-full justify-content-lg-center">
          <li v-for="(item, index) in navItems" :key="index" class="nav-item">
            <a
              class="nav-link px-md-2 px-lg-3 px-xl-4"
              :href="item.href"
              :class="{ active: isActive(item.href)}"
              @click="setActiveHref(item.href)"
            >{{ item.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
interface NavItem {
  text: string
  href: string
}

export default {
  name: 'Navbar',
  data() {
    return {
      activeHref: null as string | null,
      navItems: [
        {text: '系統公告', href: '#'},
        {text: '農業指標', href: 'indicator.html'},
        {text: '動態查詢', href: 'inquire_advance.html'},
        {text: '農業貿易', href: '#'},
        {text: '統計書刊', href: 'book.html'},
        {text: '下載區', href: '.#'},
        {text: '公務統計', href: '#'},
        // {text: '常見問題', href: '../maintenance/Question.aspx'}
      ] as NavItem[]
    }
  },
  computed: {
    currentURL(): string {
      return window.location.href;
    }
  },
  methods: {
    setActiveHref(href: string): void {
      this.activeHref = href;
    },
    isActive(href: string): boolean {
      return this.currentURL.includes(href);
    }
  }
}
</script>