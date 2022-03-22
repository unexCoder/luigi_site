<template>
  <HeaderView />
  <router-view/>
  <FooterView />
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'

export default {
  components: { HeaderView, FooterView } 
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
 }
</style>
