<!--
 * @Author: Leewellwaste zzzz_justice@qq.com
 * @Date: 2024-05-24 16:19:13
 * @LastEditors: leewell zzzz_justice@qq.com
 * @LastEditTime: 2024-06-04 21:07:08
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
      姓<input type="text" name="" id="" value="">
      名<input type="text" name="" id="">

    </div>
  </template>
   


  <!-- // js  -->
<script lang="ts" setup>
import { ref } from "vue";

let xing = ref('lee')
let ming = ref('ming')

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
  
  