<template>
  <input type="text" v-model="title" @keydown.enter="addList" class="input" />
  <span>{{ all }}/{{ active }}</span>
  <div>
    <button v-if="doList.length" @click="handleClear">清理</button>
  </div>
  <div>
    <input type="checkbox" v-model="alldone" />
    <span>全选</span>
  </div>
  <ul v-if="doList.length">
    <li v-for="(item, index) of doList" :key="item.title">
      <input v-model="item.done" type="checkbox" />
      <span :class="{ done: item.done }">{{ item.title }}</span>
      <Delete class="iconStyle" @click="deletList(index)" v-show="item.done">{{
        item.title
      }}</Delete>
    </li>
  </ul>
  <div v-else>暂无数据</div>
</template>

<script setup>
import { ref, computed } from "vue";
let {
  title,
  doList,
  all,
  active,
  alldone,
  deletList,
  addList,
  handleClear,
  selectAll,
} = useTos();
</script>

<script>
function useTos() {
  let title = ref();
  let doList = ref([{ title: "学习乒乓", done: false }]);
  let all = computed(() => doList.value.length);
  let active = computed(() => doList.value.filter((item) => item.done).length);
  let alldone = computed({
    get() {
      return doList.value.length && doList.value.every((item) => item.done);
    },
    set(value) {
      return doList.value.forEach((item) => {
        item.done = value;
      });
    },
  });

  function deletList(index) {
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

  function handleClear() {
    doList.value = doList.value.filter((item) => !item.done);
  }

  function selectAll() {
    doList.value.forEach((item) => (item.done = true));
  }

  return {
    title,
    doList,
    all,
    active,
    alldone,
    deletList,
    addList,
    handleClear,
    selectAll,
  };
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

.input {
  margin: 20px 20px 20px;
}
</style>
