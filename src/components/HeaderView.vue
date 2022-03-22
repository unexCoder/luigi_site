<template>
  <div class="main-header">
    <div id="header-main-title">
      <router-link to="/">
        <h1>luis_tamagnini</h1>
      </router-link>
    </div>
    <nav id="main-navbar">
      <router-link to="/">{{$t('navbar.home')}}</router-link>
      <router-link to="/works">{{$t('navbar.works')}}</router-link>
      <router-link to="/bio">{{$t('navbar.bio')}}</router-link>
      <router-link to="/contact">{{$t('navbar.contact')}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {

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
    }
}
</style>