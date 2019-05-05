<template>
  <f7-page :style="'background:' + colorLetterTransform">
    <f7-navbar title="MARTIN" back-link="Back"></f7-navbar>
    <f7-block>
      <f7-row no-gap>
        <f7-col>
          <h1 class="img-description">{{textSelected}}</h1>
        </f7-col>
      </f7-row>
      <f7-row no-gap>
        <f7-col>
          <f7-list form>
            <f7-list-item>
              <f7-input 
                label="COLOR"
                type="text"
                :value="colorLetter"
                @input="colorLetter = $event.target.value"
                placeholder="COLOR"
                clear-button
                :color="colorLetterTransform"
                :style="'color:' + colorLetterTransform"
              ></f7-input>
            </f7-list-item>
          </f7-list>
        </f7-col>
      </f7-row>
      <f7-row no-gap>
        <f7-col>
          <img :src="imageSelected" @click="$refs.animalpics.open()" class="img-container">
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-block strong>
      <f7-photo-browser
        :photos="imagesAvailables"
        @photobrowser:swipetoclose="selectImg"
        ref="animalpics"
      ></f7-photo-browser>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {      
      colorLetter:"",
      currentIndex:0,
      images: [
        {
          text: "PERRO",
          src: require('../assets/dog.jpg')
        },
        {
          text: "GATO",
          src: require('../assets/cat.png')
        },
        {
          text: "HORMIGA",
          src: require('../assets/ant.png')
        }
      ]
    }
  },
  mounted(){
  },
  computed:{
    imagesAvailables(){
      return this.images.map( im => im.src)
    },
    imageSelected(){
      return this.images[this.currentIndex].src;
    },
    textSelected(){
      return this.images[this.currentIndex].text;
    },
    colorLetterTransform(){
      const lett = this.colorLetter || "";
      let newColor = lett.toLowerCase()
      switch(lett.toLowerCase()){
        case"amarillo":
          newColor = "yellow";
          break;
        case"rosa":
          newColor = "pink";
          break;
        case"negro":
          newColor = "black";
          break;
        case"blanco":
          newColor = "white";
          break;
        case"naranja":
          newColor = "orange";
          break;
        case"verde":
          newColor = "green";
          break;
        case"rojo":
          newColor = "red";
          break;
        case"morado":
          newColor = "purple";
          break;
        case"azul":
          newColor = "blue";
          break;
      }
      return newColor;
    }
  },
  methods:{
    selectImg(event){
      let imgIndex = parseInt(document.querySelector(".photo-browser-current").innerText);
      if(!isNaN(imgIndex) && imgIndex > 0){
        this.currentIndex = --imgIndex;
      }
    }
  }
}
</script>
<style>
.img-container{
  width:100%;
}
.img-description{
  text-align: center;
}
</style>
