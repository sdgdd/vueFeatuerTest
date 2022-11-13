<template>
    <div>
        <button @click="add">add</button>
        <h1>{{ count }}</h1>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let count = ref(0)

function add() {
    count.value++
}
</script>