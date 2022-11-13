<template>
    <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
    <list/>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import list from '../components/list.vue'

const num = ref(1)
const handleChange = (value: number) => {
    console.log(value)
}
</script>
  