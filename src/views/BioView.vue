<template>
  <div class="bio" @mouseenter="setToolbarFalse" @touchmove="setToolbarFalse">
      <p>this is the bio page</p>
  </div>
</template>

<script>
import useToolbarSwitch from '../modules/useToolbarSwitch'

export default {
  name: 'BioView',
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
  .bio {
    height: 85vh;
    z-index: -1;
    background: #f0f;
    /* background: #f5f5dc; */
  }
</style>