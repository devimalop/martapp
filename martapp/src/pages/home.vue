<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-title>Martin App</f7-nav-title>
    </f7-navbar>
    <div @click="navigateCat">
      <p><img :src="imageLink" style="width:70%"></p>
    </div>
  </f7-page>
</template>
<script>
export default {
  data(){
    return{
      imageLink: require('../assets/main.jpg')
    }
  },
  methods:{
    navigateCat(){
      this.$f7.views.main.router.navigate('/cat/');
    }
  }
}
</script>
