<template>
  <div class="projects" @mouseenter="setToolbarFalse" @touchmove="setToolbarFalse">
  </div>
</template>

<script>
import useToolbarSwitch from '../modules/useToolbarSwitch'

export default {
  name: 'ProjectsView',
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
  .projects {
    height: 85vh;
    z-index: -1;
    background: #555;
    text-align: left;
    padding: 2vw;
    font-family: 'Helvetica' ;
  }
</style>