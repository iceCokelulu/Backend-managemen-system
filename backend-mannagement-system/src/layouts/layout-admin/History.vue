<template>
  <div
    class="hidden md:block p-3 border-t border-b bg-gray-50 shadow-sm"
    v-show="menuService.historyMenu.value.length">
    <div class="grid grid-flow-col gap-3 justify-start">
      <a
        v-for="n of menuService.historyMenu.value"
        class="border hover:bg-violet-600 hover:text-white duration-300 bg-white rounded-sm shadow-sm py-2 px-3 text-sm  flex justify-between items-center cursor-pointer"
        :class="{ 'bg-violet-600 text-white': $route.name == n.route }">
        <router-link :to="{ name: n.route }"> {{ n.title }} </router-link>
        <i class="fas fa-xmark ml-2 hover:text-red-400 cursor-pointer"></i>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu } from '@/composables/menu';
const menuService = new Menu();
</script>

<style scoped></style>
