<template>    
  <f7-page>
        <span :class="[classSpan]">{{word}}</span>
      <canvas id="sketchpad" :style="`width:${documentWidth} !important;height:${documentHeight} !important;`">
      </canvas>
       <!-- FAB Right Bottom (Orange) -->
  <f7-fab position="right-bottom" slot="fixed" :color="fabColor" >
    <f7-icon ios="f7:add" md="material:menu" ></f7-icon>
    <f7-icon ios="f7:close" md="material:close"></f7-icon>
    <f7-fab-buttons position="top" >
      <f7-fab-button :fab-close="true" label="Volver" @click="$f7.views.main.router.back()"><f7-icon icon="icon-back"></f7-icon></f7-fab-button>
      <f7-fab-button :fab-close="true" label="Cambiar color" @click="changeFabColor"><f7-icon md="material:color_lens"></f7-icon></f7-fab-button>
      <f7-fab-button :fab-close="true" :label="modeSwitch[mode].label" @click="changeMode">{{modeSwitch[mode].icon}}</f7-fab-button>
      <f7-fab-button :fab-close="true" label="Borrar" @click="clearSketch"><f7-icon md="material:delete"></f7-icon></f7-fab-button>
      <f7-fab-button :fab-close="true" label="Guardar" @click="saveImage"><f7-icon md="material:save"></f7-icon></f7-fab-button>
    </f7-fab-buttons>
  </f7-fab>
  </f7-page>
</template>
<script>
import Sketchpad from '../resources/sketchpad.js';
export default {
    data(){
        return{
            mode:"upperCase",
            modeSwitch:{
                upperCase:{
                    label: "Cambiar a minúsculas",
                    icon: "a"
                },
                lowerCase:{
                    label: "Cambiar a MAYÚSCULAS",
                    icon: "A"
                }
            },
            sketchpad: null,
            documentWidth: 300,
            documentHeight:600,
            fabColors: [
                "orange",
                "blue",
                "red",
                "brown",
                "green",
                "yellow",
                "pink",
            ],
            fabColor: null,
            classSpan: ""
        }
    },
    beforeMount(){
        this.changeFabColor();
    },
    mounted(){        
        this.documentHeight = document.body.offsetHeight + 264;
        this.documentWidth = document.body.offsetWidth;
        this.sketchpad = new Sketchpad.Sketchpad({
            element: '#sketchpad',
            width: document.querySelector("#sketchpad").offsetWidth,
            height: document.querySelector("#sketchpad").offsetHeight,
        });
        this.sketchpad.color = this.fabColor;
        this.classSpan = "background-text";
    },
    computed:{
        word(){
            return this.mode == "upperCase" ? this.$f7route.params.word.toUpperCase() : this.$f7route.params.word.toLowerCase();
        }
    },
    methods:{
        changeMode(){
            if(this.sketchpad) this.sketchpad.clear();
            if(this.mode == "upperCase"){
                this.mode = "lowerCase";
            }else{
                this.mode = "upperCase";
            }
        },
        changeColor(){
            return this.fabColors[Math.floor(Math.random() * this.fabColors.length - 1) + 0];
        },
        changeFabColor(){
            let newColor = null;
            do
            {
                newColor = this.changeColor();
            }while (this.fabColor == newColor);

            this.fabColor = newColor;  
            if(this.sketchpad) this.sketchpad.color = newColor;
        },
        clearSketch(){
            if(this.sketchpad) this.sketchpad.clear();
        },
        saveImage(){
            // No fuciona en apk
            /* var image =  document.querySelector("#sketchpad").toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.


            window.location.href=image; // it will save locally */

            //cordova:
            try{
                window.canvas2ImagePlugin.saveImageDataToLibrary(
                    function(msg){
                        alert("ok")
                        alert(msg)
                        console.log(msg);
                    },
                    function(err){                        
                        alert("ko")
                        alert(err)
                        console.log(err);
                    },
                    document.getElementById('sketchpad')
                );
            }catch(err){
                alert("no existe cordova canvas2ImagePlugin");
                console.log(err)
            }        
        }
    }
}
</script>
<style>
@font-face {
    font-family: "dots";
    src: url("../fonts/RalewayDots-Regular.woff") format('woff');
}
#sketchpad{
    background: transparent;
}
.background-text{
    color: grey;
    z-index: -1;
    position: absolute;
    font-size: 25vw;
    /* top: 100px;
    left: 400px; */
    font-family: dots
}
</style>
