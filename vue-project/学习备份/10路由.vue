<script lang="ts">
export default {
  name: 'randomPhoto'
}
</script>

<!-- 1.html -->
<template>
  <div class="container">
    <h1>Photo Show</h1>
    <hr>
    <img v-for="(photo, index) in photoList" :key="index" :src="photo" alt="Photo">

    <button @click="changePhoto">Tap Toggle Photos</button>
  </div>
</template>

<!-- 2.js -->
<script lang="ts" setup>
import { reactive } from "vue";
import axios from "axios";

let photoList = reactive([
  'http://127.0.0.1:5000/random-photo'
]);

function changePhoto(){
  axios.get('http://127.0.0.1:5000/random-photo')
    .then(response => {
      // 修改: 将图片 URL 的属性名从 response.data.photo 修改为 response.data
      photoList[0] = response.data;
    })
    .catch(error => {
      console.error('获取图片错误:', error);
    });
}
</script>

<!-- 3.style -->
<style>
.container {
  width: 400px;
  height: 600px;
  background-color: pink;
}

.container img {
  width: 400px;
  height: 300px;
}
</style>
