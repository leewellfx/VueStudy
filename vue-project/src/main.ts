/*
 * @Author: Leewellwaste zzzz_justice@qq.com
 * @Date: 2024-05-19 10:53:22
 * @LastEditors: Leewellwaste zzzz_justice@qq.com
 * @LastEditTime: 2024-06-20 15:29:33
 * @FilePath: \VueStudy\vue-project\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './assets/main.css'

// 1.引入createApp用于创建应用
import { createApp } from 'vue'
// 2.引入App根组件
import App from './App.vue'
// 3.引入路由
import router from './router'
// 4.创建一个应用
const app = createApp(App)
// 5.使用路由
app.use(router)

//挂载应用到app中
app.mount('#app')