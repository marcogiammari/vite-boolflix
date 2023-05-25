<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      query: ""
    }
  }
}
</script>

<template>
  <header class="bg-slate-900">
    <nav class="p-5 mx-5 flex align-middle gap-10">
      <h1 class="text-red-600 font-bold text-4xl">BOOLFLIX</h1>
      <div class="flex align-middle gap-3">
        <input class="p-2" type="text" v-model="query">
        <button @click="$emit('getData', this.query)" class="text-red-600 p-3 font-bold rounded border">Search</button>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
