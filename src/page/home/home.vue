<template>
  <head-top signin-up='home'>
    <span slot='logo' class="head_logo" @click="reload">ele.me</span>
  </head-top>
</template>
<script>
import headTop from '@/components/header/header'

export default {
  components: {
    headTop
  },
  methods: {
    reload () {
      window.location.reload()
    }
  }
}
</script>
<style lang='scss' scoped>
@import '../../assets/style/mixin.scss';
.head_logo{
  left: 0.4rem;
  font-weight: 400;
  @include sc(0.7rem, #fff);
  @include wh(2.3rem, 0.7rem);
  @include ct;
}
</style>
