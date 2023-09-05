<template>
  <div
    class="h-screen w-screen bg-stone-300 flex flex-col justify-center items-center">
    <img
      src="../images//cat.jpg"
      alt="avatar"
      class="w-52 h-52 object-cover rounded-full border-8 border-white shadow-md" />
    <div class="mt-8">
      <router-link :to="{ name: 'HomePage' }" class="global-button"
        >后台管理</router-link
      >
      <router-link
        :to="{ name: 'Login' }"
        class="global-button ml-6 button-login"
        >用户登录</router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped></style>
