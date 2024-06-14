<!--
 * @Author: Leewellwaste zzzz_justice@qq.com
 * @Date: 2024-05-24 16:19:13
 * @LastEditors: Leewellwaste zzzz_justice@qq.com
 * @LastEditTime: 2024-06-14 17:21:49
 * @FilePath: \VueStudy\vue-project\src\components\Person.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts">
export default {
  name:"personIN2"
}
</script>


<template>
  <div class = 'div1'>
   <h1>Resume</h1>
   <ul>
  <li>name:{{  person.name }}</li>
  <li>age:{{ person.age }}</li>
  <li>adress:{{ person.address }}</li>
  <li>gender:{{ person.gender }}</li>
</ul>
<button @click="changName"> changName</button>
  <br>
  <button @click="onKey">onKey</button>


<div class="div2">
  <h2 class="li-car">Property - Car</h2>

  <h4 class="li -car">barden: {{ person.car.barden}} </h4>
  <h4 class="li -car">price: {{ person.car.price}}w</h4>
  <button @click="changPrice">changPrice</button>
</div>
   
  </div>
</template>



<script lang="ts" setup>
import { ref,reactive, warn, watch } from "vue";


// 1.数据
let person = ref({
  name:'leewell',
  age:24,
  address:'BeiJing',
  gender:'男',
  car:{ 
    barden: 'B-M-W i3',
    price: 22
    
  }
})

//2.方法
function changName(){
  person.value.name = 'jackson'
}

function onKey(){
  person.value.name = '1'
  person.value.age = 1
  person.value.gender = '1'
  person.value.address = '1'
}

function changPrice(){
  person.value.car.price = 30
  
}

//3.监视了
watch(person.value.car,(oldValue,newValue) => {
  console.log('person变化了',oldValue,newValue)
})




</script>





<style>
.div1 {
height: 500px;
width: 600px;
background-color: palegoldenrod;
}

.div1 button{
  margin-left: 40px;

}

.div2{
margin-left: 300px;
margin-top: -178px;
}




h1 {
  display: flex;
  justify-content: center;
  margin-right: 20px;
}

ul{


}

li{
  font-size: 20px;
}

li-car{
  margin-left: auto;
  margin-top: -160px;


}


</style>