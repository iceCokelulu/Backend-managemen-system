<template>
  <div class="min-h-screen w-screen flex">
    <MenuComponent class="hidden md:block"/>
    <div class="content flex-1 bg-gray-200">
      <NavbarComponent class="h-[60px] border-b-2 border-gray-300 shadow-md" />
      <HistoryComponent class="hidden md:block" />
      <div class="mt-4 ml-2">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuComponent from './layout-admin/Menu.vue';
import NavbarComponent from './layout-admin/Navbar.vue';
import HistoryComponent from './layout-admin/History.vue';
import { menuStore } from '@/store/menuStore';
import { useRoute } from 'vue-router';
import { onBeforeRouteUpdate } from 'vue-router';
const route = useRoute();
const menu = menuStore();
menu.init()
//调用menu
onBeforeRouteUpdate(() => {
  menu.addHistoryMenu(route);
});
</script>

<style scoped lang="scss"></style>

<script lang="ts">
export default {
  route: { meta: { auth: true } },
};
</script>
