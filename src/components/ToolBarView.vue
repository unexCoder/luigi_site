<template>
  <div class="main-toolbar">
    <div class="local">
      <p><span @click="$i18n.locale='en'">en</span> | <span @click="$i18n.locale='es'">es</span> | <span @click="$i18n.locale='it'">it</span></p>
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
    background: #333;
    width: 100%;
    height: 3vh;
    display: flex;
    position:relative; 
    justify-content: flex-end;
  }

  .local {
    padding: 0 2.2vw;
    font-weight: bold;
    cursor: pointer;
  }

</style>