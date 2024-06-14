<!-- 配置数据 -->
<script lang="ts">
    export default {
    name: 'PersonIN'
  }
  </script>


<template>
  <div class="person">
    <h1>TEST</h1> 
    <button @click="countAdd">TAP{{ countadd }}</button>

    
  <h1>person-file</h1>
  <h3>姓名:{{ person.username }}</h3>
  <h3>年龄:{{  person.age }}</h3>
  <button @click="changeusername">修改名字</button>
  <button @click="changeage">修改年龄</button>
  </div>

</template>


<script setup lang="ts">
import{ref, reactive, toRefs,toRef} from 'vue';

// 1.响应式状态
let countadd = ref(0)

let person = reactive({
  username: 'leewell',
  age: 24
})


let {username,age} = toRefs(person)
let people = toRef(person,'age')
console.log(people.value)


// 2.方法
function countAdd(){
  countadd.value += 1
}

function changeusername(){
  person.username = 'jackson'
}

function changeage(){
  person.age = 30
} 
</script>


<style>
.person{
  width: 800px;
  height: 200px;
  background-color: pink;
}
</style>