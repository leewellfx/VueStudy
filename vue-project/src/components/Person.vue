<!--
 * @Author: Leewellwaste zzzz_justice@qq.com
 * @Date: 2024-05-24 16:19:13
 * @LastEditors: Leewellwaste zzzz_justice@qq.com
 * @LastEditTime: 2024-05-24 16:41:42
 * @FilePath: \VueStudy\vue-project\src\components\Person.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="person">
      <h2>姓名: {{ name }}</h2>
      <h2>年龄: {{ age }}</h2>
      <button @click="showEmail">查看邮箱</button>
    </div>
  </template>
  
  // js
  <script lang="ts">
  export default {
    name: 'PersonIN',
    data() {
      return {
        name: 'leewell',
        age: 24,
        email: 'leewellfx@gmail.com' // 修正了电子邮件地址
      };
    },
    methods: {
      showEmail() { // 更改方法名称以匹配按钮点击事件
        alert(this.email); // 更正为显示电子邮件而非电话
      }
    }
  };
  </script>
  
  // css
  <style>
  .person {
    background: pink;
  }
  </style>
  