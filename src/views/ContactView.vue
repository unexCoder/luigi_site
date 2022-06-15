<template>
  <div class="contact" @mouseenter="setToolbarFalse" @touchmove="setToolbarFalse">
    <h1>This is the contact page</h1>
  </div>
</template>

<script>
import useToolbarSwitch from '../modules/useToolbarSwitch'

export default {
  name: 'ContactView',
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
  .contact {
    height: 85vh;
    z-index: -1;
    /* background: #f0f; */
    background: #f5f5dc;
  }
</style>