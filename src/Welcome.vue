<template>
  <div>
    <h1>Welcome {{username}}</h1>
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link :to="'/welcome/'+username">Welcome</router-link>
      <br />
      <router-link :to="{name:'counter'}">go to todoList</router-link>
      <br />
      <router-link :to="{name:'counter'}">go to active</router-link>
      <br />
      <router-link to="/todo">go to completed</router-link>
      <router-view></router-view>
    </p>
  </div>
</template>

<script>
export default {
  name: "welcome",
  props: ["username"]
};
</script>