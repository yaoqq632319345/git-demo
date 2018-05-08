<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        {{hello}}
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <el-button>默认按钮</el-button>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  data () {
    return {
      // title: '111'
    }
  },
  asyncData (context) {
    return new Promise((resolve) => {
      setTimeout(function () {
        console.log(111)
        resolve({ hello: 'hello world' })
      }, 1000)
    })
  }
}
</script>

<style lang="stylus">
.container
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center
.title
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  display: block
  font-weight: 300
  font-size: 100px
  color: #35495e
  letter-spacing: 1px

.subtitle
  font-weight: 300
  font-size: 42px
  color: #526488
  word-spacing: 5px
  padding-bottom: 15px

.links
  padding-top: 15px
</style>
