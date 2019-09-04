import Router from 'vue-router'
import Vue from 'vue';
import Welcome from '../Welcome.vue'
import todoList from '../components/TodoList'
import Start from '../components/Start.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/welcome/:username",
            component: Welcome,
            props: true,
            children:[
                {
                    // 当 /user/:id/profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: 'counter',
                    name: 'counter',
                    component: todoList
                },
            ]
        },
        // {
        //     path: "/counter",
        //     component: MultiCounter
        // },
        {
            path: '/todo', redirect: '/'
        },
        {
            path: '/',
            component:Start
        }
    ]
})