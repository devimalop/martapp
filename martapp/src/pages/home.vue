<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-title>Martin App</f7-nav-title>
    </f7-navbar>
    <div @click="showTextToDraw" class="image-select">
      <img :src="imageBlackBoard" class="image-content">
    </div>
    
  <!--   <f7-block-title>Volume</f7-block-title>
    <f7-list simple-list>
      <f7-list-item>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon ios="f7:volume_mute_fill" md="material:volume_mute"></f7-icon>
        </f7-list-item-cell>
        <f7-list-item-cell class="flex-shrink-3">
          <f7-range
            :min="0"
            :max="100"
            :step="1"
            :value="10"
          ></f7-range>
        </f7-list-item-cell>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon ios="f7:volume_fill" md="material:volume_up"></f7-icon>
        </f7-list-item-cell>
      </f7-list-item>
    </f7-list> -->
    <!-- <f7-list>
      <f7-list-item link="/sketchpad/" title="MARTIN"></f7-list-item>
      <f7-list-item link="/about/" title="About"></f7-list-item>
    </f7-list>
    <div @click="navigateCat">
      <p><img :src="imageLink" style="width:70%"></p>
    </div>
    <div @click="navigateBlackBoard">
      <p><img :src="imageBlackBoard" style="width:70%"></p>
    </div> -->
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
    showTextToDraw(){
      this.$f7.dialog.prompt(
        "Palabra para repasar", 
        word => {
          this.$f7.views.main.router.navigate('/sketchpad/' + word);
        }, 
        () => {}, 
        "MARTÍN"
      )
    },
    navigateCat(){
      this.$f7.views.main.router.navigate('/cat/');
    },
    navigateBlackBoard(){
      this.$f7.views.main.router.navigate('/draw/');
    }
  }
}
</script>
<style>
.image-select{
  height:50%;
  margin-top:100px;
  /* cursor:pointer; */
}
.image-content{  
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
</style>
