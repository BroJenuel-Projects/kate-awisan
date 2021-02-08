<template>
  <div id="app">
    <Header />
    <main>
      <vue-page-transition name="fade-in-up">
        <router-view />
      </vue-page-transition>
    </main>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
<style lang="scss">
  main {
    margin: 0 auto;
    max-width: 900px;
    padding: 0 20px;
    padding-top: 120px;
  }
</style>