<template>
  <input type="text" v-model="title" @keydown.enter="addList" />
  <ul v-if="doList.length">
    <li v-for="(item, index) of doList" :key="item.title">
      <input v-model="item.done" type="checkbox" />
      <span :class="{ done: item.done }">{{ item.title }}</span>
      <Delete class="iconStyle" @click="deletList(index)">{{ item.title }}</Delete>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

let title = ref();
let doList = ref([{ title: "学习乒乓", done: false }]);

function deletList(index) {
  console.log(index);
  doList.value.splice(index, 1);
}

function addList() {
  if (!title.value) return;
  doList.value.push({
    title: title.value,
    done: false,
  });
  title.value = "";
}
</script>

<style>
ul {
  list-style: none;
}

li {
  display: flex;
}

.done {
  text-decoration: line-through;
}

.iconStyle {
  margin-left: 8px;
  width: 20px;
  height: 20px;
}
</style>
