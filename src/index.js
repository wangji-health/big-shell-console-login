import Vue from 'vue'

import App from './components/app.vue'

Vue.component('global-component', {
  render() {
    return (
      <div>global</div>
    )
  }
})

new Vue({
  el: '#root',
  components: {
    'app': App
  }
})

