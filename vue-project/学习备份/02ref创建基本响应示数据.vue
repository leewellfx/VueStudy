<!--
 * @Author: Leewellwaste zzzz_justice@qq.com
 * @Date: 2024-05-24 16:19:13
 * @LastEditors: Leewellwaste zzzz_justice@qq.com
 * @LastEditTime: 2024-05-25 14:57:47
 * @FilePath: \VueStudy\vue-project\src\components\Person.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<!-- html -->
<template>
    <div class="person">
      <h2>姓名: {{ username}}</h2> <br>
      <h2>年龄: {{ age }}</h2>
      <h2>地址:{{ address }}</h2>
      <button @click="lookEmail">查看邮箱</button>
      <button @click="changName">修改名字</button>
    </div>
  </template>
   
  <!-- // js  -->
   <script lang="ts">
   
  export default {
    name: 'PersonIN'
  }
  </script>


  <script lang="ts" setup>
  import { ref } from 'vue';

let age = 20
let username = ref('leewell')
let address = 'BeiJing'
console.log(username)

function lookEmail(){
  alert('leewellfx@gmail.com')
}

function changName(){
  username.value = 'jack'
}
</script>









  
  // css
  <style>
  .person {
    border: 2px solid pink;
    font-size: 10px;
    
  }
  </style>
  