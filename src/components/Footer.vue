<script setup lang="ts">
const info: string[] = [
  '地址：100212 臺北市中正區南海路 37 號',
  '電話：+886-2-2381-2991',
  '傳真：886-2-2331-0341'
]

const copyright = 'Copyright © 農業部 版權所有'

</script>

<template>
  <footer style="margin-top: 5rem;">
    <div class="container">
      <div class="d-flex flex-column flex-lg-row justify-content-lg-between">
        <!-- content -->
        <div class="content d-flex flex-column py-2 flex-lg-column justify-content-xl-center">
          <ul
            class="contact-info list-group list-group-flush d-flex flex-column flex-sm-row flex-wrap">
            <li v-for="i in info" class="list-group-item">{{ i }}</li>
          </ul>
          <ul class="contact-info list-group list-group-flush d-flex flex-lg-column">
            <li class="list-group-item">建議使用 Chrome，最佳瀏覽解析度為 1024x768 以上</li>
          </ul>
        </div>

        <!-- copyright -->
        <div class="copyright text-center fw-bold my-2">
          <ul class="list-group list-group-flush d-flex flex-column">
            <li class="list-group-item">
              <a href="https://www.gov.tw/" title="(另開新視窗)我的E政府" target="_blank" class="gov"
                 style="width:100px">
                <img
                  src="https://www.moa.gov.tw/img/gov.svg" alt="我的E政府"
                  class="img-fluid"
                  style="width: 40px;"
                >
              </a>
            </li>
            <li class="list-group-item">{{ copyright }}</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>