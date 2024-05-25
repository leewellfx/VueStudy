<!--
 * @Author: Leewellwaste zzzz_justice@qq.com
 * @Date: 2024-05-24 16:19:13
 * @LastEditors: Leewellwaste zzzz_justice@qq.com
 * @LastEditTime: 2024-05-25 18:05:20
 * @FilePath: \VueStudy\vue-project\src\components\Person.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->



<!-- 配置数据 -->
<script lang="ts">
    export default {
    name: 'PersonIN'
  }
  </script>

  
<!-- html -->
<template>
    <div class="person">
      地点:{{address}}
      <br>
      车子型号:{{car.brand}}
      <br>
      车子价格:{{ car.prie}}W
      <br>
      <button @click="changprice" > 修改价格</button>
      <button @click="changaddress"> 更换地点</button>
      <br>
      <br>
      游戏信息
    </div>
  </template>
   


  <!-- // js  -->
<script lang="ts" setup>
import { reactive } from 'vue';
import {ref} from 'vue'

// 数据+reactive() 可以转化为响应示
let address =ref('北京')
let car = reactive({brand:'Benz',prie:100})



// 方法
function changprice(){
  car.prie += 10
}

function changaddress(){
  address.value = '上海'
}

</script>









  
  // css
  <style>
  .person {
    border: 2px solid pink;
    font-size: 16px; 
    padding: 20px; 
    padding-left: 20px; 
    margin-bottom: 10px; 
    flex:auto
  }
  </style>
  
  