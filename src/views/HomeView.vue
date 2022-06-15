<template>
  <div class="home" @mouseenter="setToolbarFalse" @touchmove="setToolbarFalse">
    <h1> This is the {{$t('navbar.home')}} page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import useToolbarSwitch from '../modules/useToolbarSwitch'

export default {
  name: 'HomeView',
  components: {},
  setup() {
    const { setToolbarView } = useToolbarSwitch()

    function setToolbarFalse () {
      setToolbarView(false)
    }

    return {
      setToolbarFalse
    }
  }
}
</script>


<style>
  .home {
    height: 85vh;
    z-index: -1;
    background: #ffff0094;
  }
</style>