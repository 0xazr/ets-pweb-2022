<template>
  <div class="text-center p-4 bg-blue-400 m-10 rounded-xl text-neutral-50 p-7 border-blue-700 border-2">
    <h2 class="text-2xl">{{App.counter}} item</h2>
    <button @click="App.addItem()" class="bg-blue-700 px-3 text-slate-50 rounded-md">+</button>
    <div v-for="data in App.datas">
      <div class="flex justify-center">
        <h1 class="bg-blue-500 mt-3 rounded-xl mr-3 w-96">{{data.id}}</h1>
        <button class="bg-yellow-300 mt-3 rounded-xl mr-3 w-9">{{data.count}}</button>
        <button class="bg-green-500 mt-3 rounded-xl mr-3 w-7" @click="App.addCounter(data.id)">+</button>
        <button class="bg-neutral-300 mt-3 rounded-xl mr-3 w-7" @click="App.substractCounter(data.id)">-</button>
        <button class="bg-red-700 mt-3 rounded-xl mr-3 w-20" @click="App.deleteItem(data.id)">delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import {useApp} from '../stores/index';
export default {
  data() {

  },
  setup() {
    const App = useApp();
    return {
      App,
    }
  },
  created() {
    this.App.getAllData();
    console.log("counter = " + this.App.counter);
    this.App.getCounter();
  }
}
</script>
