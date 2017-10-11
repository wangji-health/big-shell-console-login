<template>
    <div>
        <transition name="fade" mode="out-in">
            <div class="app" v-on:click="btnClick">
                <global-component></global-component>
                <span v-if="x == 1">v-if</span>
                <span class="a">{{x}}</span>
                <p>{{appId}}</p>
                <app-head></app-head>
            </div>
        </transition>
    </div>
</template>

<script>
  import AppHead from './head.vue'

  export default {
    props: ['appId'],
    data: () => {
      return {
        x: 1
      }
    },
    components: {
      'app-head': AppHead
    },
    methods: {
      btnClick() {
        this.x = 2
      },
      call() {
        console.log('---call---')
      }
    },
    beforeMount() {
      console.log('beforeMount')
    },
    mounted() {
      console.log('mounted')
    },
    beforeUpdate() {
      console.log('beforeUpdate')
    },
    updated() {
      console.log('updated')
    }
  }
</script>

<style scoped>
    .app {
        padding: 10px;
        border: 1px solid #aaa;
    }

    .a {
        color: blue;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 3s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
</style>
