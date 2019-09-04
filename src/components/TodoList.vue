<template>
  <div>
    <h2>
      Vue To Do List
      Simple Todo List with adding and filter by diff status.
    </h2>
    <div class="input-form">
      <input type="input" v-model="inputtingItem" />
      <button @click="handleCreateTodo">Add</button>
    </div>

    <ul class="items">
      <template v-for="(item,index) in filteredTodoList">
        <li :key="index" :class="item.status">
          <input
            name="status-toggle"
            :checked="item.status === 'completed'"
            type="checkbox"
            @change="handleToggleActive(index)"
          />
          <a href class="content">{{item.content}}</a>
        </li>
      </template>
    </ul>
    <div class="filter">
      <a @click.prevent="handleFilter('all')" :class="{active:currentFilter=='all'}">ALL</a>
      <a @click.prevent="handleFilter('active')" :class="{active:currentFilter=='active'}">Active</a>
      <a
        @click.prevent="handleFilter('completed')"
        :class="{active:currentFilter=='completed'}"
      >Complete</a>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";

export default {
  name: "todo-list",
  computed: {
    filteredTodoList: function() {
      return this.$store.getters.filteredTodoList;
    },
    currentFilter: function() {
      return this.$store.state.currentFilter;
    }
  },
  data: function() {
    return {
      inputtingItem: ""
    };
  },
  methods: {
    handleToggleActive: function(index) {
      this.$store.commit("handleToggleActive", index);
    },
    handleFilter: function(currentFilter) {
      this.$store.commit("handleFilter", currentFilter);
    },
    handleCreateTodo: function() {
      this.$store.dispatch("addTodo", this.inputtingItem);
    }
  }
};
</script>

<style scoped>
</style>
