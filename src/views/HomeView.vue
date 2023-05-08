<template>
  <div class="home" @mouseenter="setToolbarFalse" @touchmove="setToolbarFalse">
    <iframe className='videoframe' src="https://www.youtube.com/embed/TmbGAhIF0tE" title="\unexCoder Youtube Channel" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe className='videoframe' src="https://www.youtube.com/embed/h_rOT0_fQow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe className='videoframe' src="https://www.youtube.com/embed/ZBZUYBtERNk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe className='videoframe' src="https://www.youtube.com/embed/Y7IJKNiBWeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe className='videoframe' src="https://www.youtube.com/embed/c_M3wOWSaqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe className='videoframe' title="vimeo-player" src="https://player.vimeo.com/video/40779704?h=08fcf13689" frameborder="0" allowfullscreen></iframe>
    <iframe title="vimeo-player" className='videoframe' src="https://player.vimeo.com/video/1450085?h=a2e0eae9f1" frameborder="0" allowfullscreen></iframe>
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
    background: #000000;
    height: 85vh;
    z-index: -1;
    /* background: #777; */
    color: #fff;
    overflow: scroll;
  }

  .videoframe {
    width:1120px;
    height:630px;
    margin: 3vh 0;
  }

  @media only screen and (max-width: 768px) {
  /* For mobile phones: */
    .videoframe {
      width:100%;
      height:100%;
    }
  }
</style>