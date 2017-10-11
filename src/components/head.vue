<template>

    <div v-on:click="callParent">
        head
        <global-component></global-component>
    </div>

</template>


<script>
  export default {
    updated() {
      console.log('head updated...')
    },
    methods: {
      callParent() {
        this.$parent.call()
      }
    }
  }

</script>

<style>

</style>
