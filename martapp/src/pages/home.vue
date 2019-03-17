<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-title>Martin App</f7-nav-title>
    </f7-navbar>
    
    <f7-list>
      <f7-list-item link="/sketchpad/" title="MARTIN"></f7-list-item>
      <f7-list-item link="/about/" title="About"></f7-list-item>
    </f7-list>
    <div @click="navigateCat">
      <p><img :src="imageLink" style="width:70%"></p>
    </div>
    <div @click="navigateBlackBoard">
      <p><img :src="imageBlackBoard" style="width:70%"></p>
    </div>
  </f7-page>
</template>
<script>
export default {
  data(){
    return{
      imageLink: require('../assets/main.jpg'),
      imageBlackBoard: require('../assets/main_blackboard.png'),
    }
  },
  methods:{
    navigateCat(){
      this.$f7.views.main.router.navigate('/cat/');
    },
    navigateBlackBoard(){
      this.$f7.views.main.router.navigate('/draw/');
    }
  }
}
</script>
