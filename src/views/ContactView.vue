<template>
  <div class="contact" @mouseenter="setToolbarFalse" @touchmove="setToolbarFalse">
    <div class="content">
      <h2><a href="mailto:bosca.music@gmail.com">Email me</a></h2>
    </div>
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
    background: #555;
    text-align: left;
    padding: 2vw;
    font-family: 'Helvetica' ;
  }
  .content a{
    color: #fff;
    text-decoration: none; 
    font-size: 1.5em;
    font-weight: 900;
  }
</style>