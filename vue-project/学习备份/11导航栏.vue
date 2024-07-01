<!--
 * @Author: Leewellwaste zzzz_justice@qq.com
 * @Date: 2024-05-24 16:19:13
 * @LastEditors: Leewellwaste zzzz_justice@qq.com
 * @LastEditTime: 2024-06-21 14:47:33
 * @FilePath: \VueStudy\vue-project\src\components\Person.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts">
export default {
  name: 'routTest'
}

</script>


<template>
  <div class="resume">
    <!-- 1.index -->
<h1>Resume</h1>
<!-- 2.catalog -->
<div class="catalog">
<RouterLink to="/home">Home</RouterLink>
<RouterLink to="/about">Abouts</RouterLink>
<RouterLink to="/news">News</RouterLink>
</div>
<!-- 3.show -->
<div class="show">
  <RouterView></RouterView>

</div>

</div>
</template>


<script lang="ts" setup>
import {RouterLink, RouterView } from 'vue-router';
</script>


<style>
.resume {
  border: 1px solid #000;
  height: 300px;
  /* align-content:center; */
  text-align: center
}

.resume .catalog {
  
  display: flex;
  justify-content: space-between;
  padding: 30px;
  margin-top: -30px;
}

.resume .show{
  border: 1px solid red;
  width: 749px;
  height: 180px;

}

</style>

