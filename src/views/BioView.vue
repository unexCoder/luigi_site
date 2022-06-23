<template>
  <div class="bio" @mouseenter="setToolbarFalse" @touchmove="setToolbarFalse">
      <h2>Luis Tamagnini <span class="content" style="font-size:0.65em">(AR/IT)</span></h2>
      <div class="content">
        <br>
        <p>{{$t('bio.bio')}}</p>
        <br>
        <p>{{$t('bio.bio2')}}</p>
        <br>
        <p>{{$t('bio.bio3')}}</p>
        <br>
        <p>{{$t('bio.bio4')}}</p>
        <!-- <br>
        <p>{{$t('bio.bio5')}}</p> -->
        <div class="logos">
        <a href="https://www.facebook.com/unexcoder">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="38" height="38" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73Z"></path></svg>
        </a>
        <a href="https://www.instagram.com/unexcoder">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="38" height="38" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"></path></svg>
        </a>
        <a href="mailto:bosca.music@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="38" height="38" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5l8-5v10z"></path></svg>
        </a>
      </div>
      </div>
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
    height: 70.6vh;
    z-index: -1;
    padding: 2vw;
    background: #555;
    color: #fff;
    text-align: left;
    font-family: 'Helvetica' ;
    font-size: 1.5em;
    font-weight: 900;
    line-height: 0.75em;
    overflow:scroll;
  }
  .content {
    font-size: 0.85em;
    font-weight: 700;
    line-height: 1em;
  }
  .logos svg{
    padding: 1rem 0.35rem;
  }
  a {
    color: #fff;
  }

</style>