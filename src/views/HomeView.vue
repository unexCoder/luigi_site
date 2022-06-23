<template>
  <div class="home" @mouseenter="setToolbarFalse" @touchmove="setToolbarFalse">
    <h2> This is the {{$t('navbar.home')}} page</h2>
    <iframe title="vimeo-player" src="https://player.vimeo.com/video/40779704?h=08fcf13689?byline=0" width="640" height="480" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>
// @ is an alias to /src
import useToolbarSwitch from '@/modules/useToolbarSwitch'

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
    background: #777;
    color: #fff;
  }
</style>