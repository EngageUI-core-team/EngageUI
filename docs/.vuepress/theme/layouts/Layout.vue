<template>
  <div class="layoutBox">
    <Header />
    <div class="contentBox flex-row">
      <div class="layout-sideBar">
        <SideBar />
      </div>
      <div class="layout-content">
        <Content />
      </div>
      <div class="layout-iframeBox">
        <IframeBox />
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Header from '../components/header/Header.vue'
import SideBar from '../components/sideBar/SideBar.vue'
import IframeBox from '../components/iframeBox/IframeBox.vue'
export default {
  name: "Layout",
  components: {
    Header,
    SideBar,
    IframeBox
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
@import '../styles/common';
@import './Layout';
</style>
