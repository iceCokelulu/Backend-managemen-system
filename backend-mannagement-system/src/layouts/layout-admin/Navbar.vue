<template>
  <div class="py-4 flex justify-between items-center">
    <div class="flex items-center">
      <div class="cursor-pointer" @click="menuService.toggleState()">
        <i class="fas fa-bars-staggered ml-4"
          v-if="menuService.close.value"></i>
        <i class="fas fa-bars ml-4" v-else></i>
      </div>
      <el-breadcrumb separator="/" class="ml-4">
        <el-breadcrumb-item :to="{ path: '/' }">数据分析</el-breadcrumb-item>
        <el-breadcrumb-item>市场行情</el-breadcrumb-item>
        <el-breadcrumb-item>人员流动</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="flex items-center relative group cursor-pointer">
      <img
        src="../../images/cat.jpg"
        alt="cat"
        class="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover mr-4" />
      <span class="mr-6 text-sm md:text-base">{{ userStore.info?.name }}</span>
      <section
        class="absolute group-hover:block translate-y-[65%] bg-white p-5 -translate-x-4 rounded-md whitespace-nowrap shadow-md hidden">
        <div
          class="flex items-center cursor-pointer border-b-2 mb-3 border-gray-300">
          <a href="" class="fas fa-house-user mr-1"></a>
          <span class="text-sm">网站首页</span>
        </div>
        <div
          class="flex items-center cursor-pointer border-b-2 mb-3 border-gray-300">
          <a href="" class="fas fa-user mr-1"></a>
          <span class="text-sm">个人用户</span>
        </div>
        <div class="flex items-center cursor-pointer" @click="logout()">
          <a href="" class="fas fa-share-from-square mr-1"></a>
          <span class="text-sm">退出登录</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { logout } from '@/tools';
import user from '@/store/userStore';
import { Menu } from '@/composables/menu';
//获取pinia用户信息
const menuService = new Menu();
const userStore = user();
</script>

<style scoped></style>
