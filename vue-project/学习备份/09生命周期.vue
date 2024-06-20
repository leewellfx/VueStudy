<script lang="ts">
export default {
  name: "lifeCycle"
}
</script>


<template>
  <div class="container">
<h1>sum:{{ sum }}</h1>
<button @click="addSum">TAP</button>

  </div>
</template>

<script lang="ts" setup>
// 1.引用库
import { ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted } from "vue";
// 2. 声明数据
let sum = ref(0)


//3.写方法
function addSum() {
  sum.value += 1000
}

//4.生命周期
// 4.1 创建
console.log('1create')

// 4.2 挂载前
onBeforeMount(()=>{
  console.log('2onBeforeMount:',onBeforeMount)
})
// 4.3 挂载完毕
onMounted(()=>{
  console.log('3 mounted',onMounted)
})
// 4.4 更新前
onBeforeUpdate(()=>{
  console.log('04onBeforeUpdate',onBeforeUpdate)
})
// 4.4 更新
onUpdated(()=>{
  console.log('05Onupdated',onUpdated)

})
//4.5卸载前
onBeforeUnmount(()=>{
  console.log('06onBeforeUnmount',onBeforeUnmount)

})
//4.6卸载
onUnmounted(()=>{
  console.log('07.onUnmounted',onUnmounted)
})


</script>






<style>
.container{
  width: 600px;
  height: 300px;
  background-color: pink;

  text-align: center;
  border: 1px solid #000;
  

}
</style>