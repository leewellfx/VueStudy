<!--
 * @Author: Leewellwaste zzzz_justice@qq.com
 * @Date: 2024-05-19 10:53:22
 * @LastEditors: Leewellwaste zzzz_justice@qq.com
 * @LastEditTime: 2024-05-25 10:41:37
 * @FilePath: \VueStudy\vue-project\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
<div class="app">

    <PersonIN/>
</div>
</template>


// js
<script lang="ts">
import PersonIN from './components/Person.vue'

export default{
    name:'App', //组件名称
    components:{
        PersonIN //注册组件
    } 
};
</script>
