<template>
  <div id="app">
    <Header />
    <main>
      <vue-page-transition name="fade-in-up">
        <router-view />
      </vue-page-transition>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">
  main {
    margin: 0 auto;
    max-width: 1400px;
    min-height: 80vh;
    padding: 0 20px;
    padding-top: 80px;
  }

  @media only screen and (max-width: 650px) {
    main {
      padding-top: 50px;
    }
  }
</style>