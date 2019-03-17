<template>    
  <f7-page>
      <canvas id="sketchpad" :style="`width:${documentWidth} !important;height:${documentHeight} !important;`">

      </canvas>
       <!-- FAB Right Bottom (Orange) -->
  <f7-fab position="right-bottom" slot="fixed" :color="fabColor" >
    <f7-icon ios="f7:add" md="material:add" ></f7-icon>
    <f7-icon ios="f7:close" md="material:close"></f7-icon>
    <f7-fab-buttons position="top" >
      <f7-fab-button :fab-close="true" label="Volver" @click="$f7.views.main.router.back()"><f7-icon icon="icon-back"></f7-icon></f7-fab-button>
      <f7-fab-button :fab-close="true" label="Cambiar color" @click="changeFabColor"><f7-icon md="material:color_lens"></f7-icon></f7-fab-button>
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
            fabColor: null
        }
    },
    beforeMount(){
        this.changeFabColor();
    },
    mounted(){
        
        this.documentHeight = document.body.offsetHeight;
        this.documentWidth = document.body.offsetWidth;
        this.sketchpad = new Sketchpad.Sketchpad({
            element: '#sketchpad',
            width: document.querySelector("#sketchpad").offsetWidth,
            height: document.querySelector("#sketchpad").offsetHeight,
        });
        this.sketchpad.color = this.fabColor;
    },
    methods:{
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
            if(this.sketchpad) this.sketchpad.clear()
        },
        saveImage(){

            var image =  document.querySelector("#sketchpad").toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.


            window.location.href=image; // it will save locally
        }
    }
}
</script>

