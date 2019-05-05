<template>
    <f7-page>
    <f7-navbar title="Test draw" back-link="Back"></f7-navbar>
    <f7-block-title>Drawing</f7-block-title>
    <f7-block strong>
      <p>You can go <f7-link back>back</f7-link>...</p>
      <blackboard/>
    </f7-block>
  </f7-page>
</template>

<script>
import blackboard from "../components/blackboard"
export default {

  data() {
    return {
    }
  },
  components:{
    blackboard
  }
}
</script>

<style>

</style>
