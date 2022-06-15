<template>
  <div class="works" @mouseenter="setToolbarFalse" @touchmove="setToolbarFalse">
      <p>this is the works page</p>
  </div>
</template>

<script>
import useToolbarSwitch from '../modules/useToolbarSwitch'

export default {
  name: 'WorksView',
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
  .works {
    height: 85vh;
    z-index: -1;
    background: #ff55ff55;
  }
</style>