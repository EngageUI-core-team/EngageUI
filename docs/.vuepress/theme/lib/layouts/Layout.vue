<template>
  <div class="layout">
    <NavBar />
    <div class="main flex-row">
      <div class="sideBarBox"></div>
      <SideBar />
      <div class="contentBox">
        <Content />
      </div>
      <div class="iframeBox">
        <iframe class="iframeContent" src="https://www.baidu.com" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6" setup lang="ts">
import NavBar from '../components/NavBar/NavBar.vue';
import SideBar from '../components/SideBar/SideBar.vue';
</script>
<style lang="less" rel="stylesheet/css">
body {
  margin: 0;
}
</style>
<style lang="less" scoped>
@import '../styles/index.less';
@import './Layout.less';
</style>
<style lang="css">
@import url('../styles/notion-light-classic');
</style>
