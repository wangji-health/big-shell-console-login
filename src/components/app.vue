<template>
    <div class="app">
        <div class="app-container">
            <h1 class="app-name">小贝壳医生版</h1>
            <form class="login-form">
                <div class="list-group">
                    <div class="list-group-item">
                        <input placeholder="用户名" class="form-control" v-model="username">
                    </div>
                    <div class="list-group-item">
                        <input placeholder="密码" class="form-control" v-model="password" type="password"/>
                    </div>
                </div>
                <button class="btn btn-primary btn-block" @click.prevent="login" :disabled="!username || !password">登录</button>
            </form>
            <div>
                <p class="copyright">杭州望吉健康科技&copy;2016-2017</p>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
//        axios.get('')
      }
    }
  }
</script>

<style scoped>

    .app-container {
        width: 360px;
        padding-top: 60px;
        margin: 0 auto;
    }

    .app-name {
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        margin-top: 15px;
        padding: 0 20px;
        line-height: 50px;
    }

    .login-form {
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .list-group {
        border-radius: 2px;
        padding-left: 0;
        margin-bottom: 20px;
    }

    .list-group-item {
        position: relative;
        display: block;
        margin-bottom: -1px;
        padding: 6px 10px;
        background-color: #fff;
        border: 1px solid #ddd;

    }

    .list-group-item:first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    .list-group-item:last-child {
        margin-bottom: 0;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    .copyright {
        text-align: center;
        font-size: 12px;
        color: gray;
    }

</style>
