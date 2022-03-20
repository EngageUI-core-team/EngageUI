<template>
  <div class="sideBarBox">
    <div
      v-for="(item,index) in menuData"
      :key="index"
    >
      <div class="title">{{item.title}}</div>
      <div
        v-for="(mItem,mIndex) in item.children"
        :key="index"
      >
        <router-link
          :to="`/${mItem.path}`"
          v-if="mItem.path"
        >{{ mItem.title }}</router-link>
        <!-- <div class="itemTitle">
          {{mItem.title}}
        </div> -->
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { menuData } from '../../../../../menu/menu'
export default {
  name: "Sidebar",
  data () {
    return {
      menuData: []
    }
  },
  created () {
    this.menuData = menuData
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import'./SideBar.less';
</style>