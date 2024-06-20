<!--
 * @Author: Leewellwaste zzzz_justice@qq.com
 * @Date: 2024-05-24 16:19:13
 * @LastEditors: Leewellwaste zzzz_justice@qq.com
 * @LastEditTime: 2024-06-19 09:07:54
 * @FilePath: \VueStudy\vue-project\src\components\Person.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts">
export default {
  name: "PersonSeven"
}
</script>

<!-- html -->
<template >    
  <div class="person">
    <h1>age:{{ person.age }}</h1>
    <h1>name:{{ person.name }}</h1>
    <ul>
      <li>{{ personList[0].age }}</li>
    </ul>


  </div>

</template>

<!-- js -->
<script lang="ts" setup>
import {type PersonInter } from "@/type";

let person:PersonInter = {id:2,name:'leewell',age:24}

let personList:Array<PersonInter> = [
  {id:2,name:'leewell',age:241},
  {id:2,name:'leewell',age:24},
  {id:2,name:'leewell',age:24}
]
</script>


<!-- css -->
<style>
.person {
  width: 400px;
  height: 600px;
  background-color: palegoldenrod;

}

</style>