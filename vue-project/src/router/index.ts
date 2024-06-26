/*
 * @Author: Leewellwaste zzzz_justice@qq.com
 * @Date: 2024-06-20 10:41:14
 * @LastEditors: Leewellwaste zzzz_justice@qq.com
 * @LastEditTime: 2024-06-21 15:22:41
 * @FilePath: \VueStudy\vue-project\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
 
// 创建一个路由器 并且暴露出去
// 1.引入模块
import { createRouter,createWebHistory } from "vue-router";
//1.1 引入一个一的组件
import  Home  from "@/pages/Home.vue";
import  News  from "@/pages/News.vue";
import  About  from "@/pages/About.vue";


//2.创建路由器 
const router = createRouter({
    history:createWebHistory(),//路由器的工作模式
    routes:[
        {
        path:'/home',
        component:Home
     },
     {
        path:'/news',
        component:News
     },
     {
        path:'/about',
        component:About
     },
    ] 
})

//3.暴露路由
export default router