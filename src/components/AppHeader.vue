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
  <header class="bg-gradient-to-b from-cyan-950 to-slate-900">
    <nav class="p-5 mx-5 flex flex-col md:flex-row justify-between align-middle gap-3">
      <h1 class="text-red-500 font-bold text-4xl">BOOLFLIX</h1>
      <div class="flex align-middle gap-3">
        <input class="p-2" type="text" v-model="query">
        <button @click="$emit('getData', this.query)" class="text-red-500 p-3 font-bold rounded border">Search</button>
      </div>
    </nav>
  </header>
</template>

