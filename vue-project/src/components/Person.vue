<!--
 * @Author: Leewellwaste zzzz_justice@qq.com
 * @Date: 2024-05-24 16:19:13
 * @LastEditors: Leewellwaste zzzz_justice@qq.com
 * @LastEditTime: 2024-06-14 09:08:29
 * @FilePath: \VueStudy\vue-project\src\components\Person.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->



<!-- 配置数据 -->
<script lang="ts">
export default {
  name:'PersonIn'
}
</script>

<template>
    <div class="person">
      地点:{{address}}
      <br>
      车子型号:{{car.brand}}
      <br>
      车子价格:{{ car.price}}W
      <br>
      <button @click="changprice" > 修改价格</button>
      <button @click="changaddress"> 更换地点</button>
      <button @click="changband">修改品牌</button>
      <button @click="changcar"> 更换车子</button>
      <br>
      <br>
    </div>
  </template>
   


<script lang="ts" setup>
// 引入reactive 和ref
import {ref,reactive} from 'vue'

// 数据+reactive() 可以转化为响应示
let address =ref('北京')
let car = ref({
  brand:'Benz',
  price:100
})


// 方法
function changprice(){
  car.value.price += 10
}

function changaddress(){
  address.value = '上海'
} 

function changband(){
  car.value.brand = '奔驰'
}

function changcar(){
  Object.assign(car.value,{brand:'宝马',price:40});
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

  .personul{
    font-size: 20px; 
  }
  </style>
  
  