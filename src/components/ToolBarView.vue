<template>
  <div class="main-toolbar">
    <div id="local">
      <p>
        <span @click="$i18n.locale='en'" :class="$i18n.locale === 'en' && 'active'">en</span>
        <span class="bar"> | </span><span @click="$i18n.locale='es'" :class="$i18n.locale === 'es' && 'active'">es</span>
        <span class="bar"> | </span><span @click="$i18n.locale='it'" :class="$i18n.locale === 'it' && 'active'">it</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
        return {
            langs: ['en','es','it'],
            globalInjection: true,
        }
    }
}
</script>

<style>
  .main-toolbar {
    color: #ff0032;
    background: #111;
    width: 100%;
    height: 3vh;
    display: flex;
    position:relative; 
    justify-content: flex-end;
  }

  #local {
    padding: 0 2.2vw;
    font-weight: bold;
    cursor: pointer;
  }

  .active {
    color: #fff;
  }

  .bar {
    font-weight:100;
  }
</style>