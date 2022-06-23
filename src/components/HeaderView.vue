<template>
  <div class="main-header" @mouseenter="showtoolbar=true" @touchmove="showtoolbar=true">
    <div id="header-main-title">
      <router-link to="/">
        <h1>luis_tamagnini</h1>
      </router-link>
    </div>
    <nav id="main-navbar">
      <router-link to="/">{{$t('navbar.home')}}</router-link>
      <router-link to="/works">{{$t('navbar.works')}}</router-link>
      <router-link to="/projects">{{$t('navbar.projects')}}</router-link>
      <router-link to="/bio">{{$t('navbar.bio')}}</router-link>
    </nav>
  </div>
  <transition name="toolbar">
    <div class="main-toolbar" v-if="showtoolbar">
      <tool-bar-view />    
    </div>
  </transition>
</template>

<script>
import ToolBarView from './ToolBarView.vue'
import useToolbarSwitch from '../modules/useToolbarSwitch'

export default {
  components: { ToolBarView },   
  setup() {
    const { showtoolbar } = useToolbarSwitch()
    return {
       showtoolbar
    }
  }
}
</script>

<style>
  .main-header {
    color: #ff0032;
    background: #333;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content:space-between;
    padding: 10px 0;
  }
  
  #header-main-title {
    align-self: flex-end;
    position: relative;
    left: 2vw;
    font-weight: 600;
    font-size: 1.5em;
  }
  
  #header-main-title a {
    color: #ff0032;
  }
  #main-navbar {
    position: relative;
    right: 2vw;
    align-self: flex-end;
  }

  #main-navbar a {
    font-weight: bold;
    color: #fff;
    padding: 1px 4px;
  }
  #main-navbar a.router-link-exact-active {
    color: #ff0032;
  }

  @media (max-width: 460px) {
    #main-navbar {
      display:flex;
      flex-direction: column;
      text-align: right;
      margin-top: 1vh;
    }
  }

  .toolbar-enter-from {
    top: -3vh;
    height: 0; 
    z-index: -1;
  }
  .toolbar-enter-to {
    top: 0;
    height: 3vh;
    z-index: -1; 
  }
  .toolbar-enter-active,
  .toolbar-leave-active {
    transition: all 0.4s ease;
  }
  .toolbar-leave-from {
    top: 0;
    height: 3vh;
    z-index: 0;
  }
  .toolbar-leave-to {
    top: -3vh;
    height: 0; 
    z-index: -1;
  }
</style>