<script lang="ts">
export default {
  name:'PersonIn'
}
</script>

<template>
  <div class="person"> 
    <h2>{{ age }}</h2>
    <button @click="addAge"> 增加一岁</button>
    <br><br>

    <p>名字:{{ person.userName }}</p>
    <p>住址:{{ person.address }}</p>
    <button @click="changUsername">改名字</button>
    <button @click="changAddress">改住址</button>
    <button @click="changPerson">一键修改</button>

  </div>
</template>



<script lang="ts" setup>
import { ref,reactive,watch } from "vue";
//1.数据age
let age = ref(24)

let person = ref({
  userName:'leewell',
  address:'BeiJing'

})




//2.方法
function addAge(){
  age.value += 1
}

function changUsername(){
  person.value.userName = 'jackson'
}

function changAddress(){
  person.value.address = 'USA'
}

function changPerson(){
  person.value = {userName:'jackson',address:'USA'}
}


//3.监视
watch(age,function(newValue,oldValue){
  console.log('Have Changed',newValue,oldValue)
})

watch(person,function(newValue,oldValue){
  console.log('Have Changeds',newValue,oldValue)
})


</script>





<style>
div .person{
  height: 200px;
  width: 500px;
  background-color: pink;
  border-style:dashed ;  
}
</style>