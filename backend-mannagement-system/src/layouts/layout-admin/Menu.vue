<script setup lang="ts">
import { Menu } from '@/composables/menu';
import { watch } from 'vue';
import { useRoute } from 'vue-router';
const menuService = new Menu();
const route = useRoute();
//检测页面初始路由改变
watch(
  route,
  () => {
    menuService.setCurrentMenu(route);
  },
  { immediate: true }
);
</script>

<template>
  <div class="menu w-[200px] bg-[#1F2937] text-gray-300 p-4" :class="{close:menuService.close.value}">
    <div class="logo text-2xl">
      <i class="fas fa-compass mr-2"></i>
      <span
        class="text-base hover:text-blue-300 cursor-pointer"
        @click="$router.push('/Admin')"
        >网站首页</span
      >
    </div>
    <div class="left-container">
      <dl v-for="(Menu, index) of menuService.menus.value" :key="index">
        <dt @click="Menu.isClick = true">
          <section>
            <i :class="Menu.icon" class="mr-2"></i>
            <span>{{ Menu.title }}</span>
          </section>
          <section>
            <i
              class="fas fa-angle-down duration-300"
              :class="{ 'rotate-180': Menu.isClick }"></i>
          </section>
        </dt>
        <div>
          <dd
            v-show="Menu.isClick"
            :class="{ active: cMenu.isClick }"
            v-for="(cMenu, index) of Menu?.children"
            @click="$router.push({ name: cMenu.route })"
            :key="index">
            {{ cMenu.title }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
<style scoped lang="scss">
.menu {
  .left-container {
    @apply mt-8;
    dl {
      @apply mt-2;
      dt {
        @apply flex justify-between items-center cursor-pointer;
      }
      div {
        @apply flex flex-col gap-2 ml-6 p-1;
        dd {
          @apply cursor-pointer text-sm;
        }
      }
    }
  }
  &.close {
    .logo {
      span {
        @apply hidden;
      }
    }
  }
}

.active {
  @apply text-blue-500;
}
</style>
