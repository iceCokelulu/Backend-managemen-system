<template>
  <Form @submit="onsubmit" :validation-schema="schema">
    <div class="login-bg">
      <div class="login-container">
        <div class="login-container-left">
          <h2>用 户 登 录</h2>
          <div class="mt-14 text-black">
            <Field
              name="account"
              class="login-input"
              placeholder="请输入账号"
              label="账号"
              :validate-on-input="true"
              value="iceo@163.com"></Field>
            <ErrorMessage name="account" class="block" />
            <Field
              name="passWord"
              class="login-input mt-8"
              placeholder="请输入密码"
              label="密码"
              :validate-on-input="true"
              type="password"
              value="12345678"></Field>
            <ErrorMessage name="passWord" class="block" />
          </div>
          <button class="login-button">登 录</button>
          <div class="mt-6 flex justify-center gap-4 text-lg">
            <i class="fab fa-weixin cursor-pointer"></i>
            <i class="fab fa-qq cursor-pointer"></i>
            <i class="fas fa-envelope cursor-pointer"></i>
          </div>
          <div class="mt-6 flex justify-center gap-4 text-sm translate-y-8">
            <a href="">网站首页</a>
            <a href="">找回密码</a>
            <a href="">用户注册</a>
          </div>
        </div>
        <div class="hidden md:block">
          <img
            src="../../images/login.jpg"
            alt="loginImage"
            class="h-[480px] w-full object-cover" />
        </div>
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
import v from '@/plugins/vee-validate';
import { userLogin } from '@/tools/index';
const { Form, Field, ErrorMessage } = v;

const schema = {
  account: { required: true, email: true },
  passWord: { required: true, min: 8, max: 16 },
};

const onsubmit = async (values: any) => {
  userLogin(values)
};
</script>

<style scoped lang="scss">
.login-container {
  @apply bg-[#aaa69d] w-[720px] h-[440px] md:h-auto  md:grid grid-cols-2 rounded-md shadow-md overflow-hidden;
}
.login-container-left {
  @apply flex-col justify-center  items-center text-white md:text-white text-center mt-8;
}
.login-bg {
  @apply bg-[#f5f6fa] h-screen p-2 flex justify-center items-start translate-y-32
  md:translate-y-0 md:items-center;
}
.login-input {
  @apply outline-none px-2 w-[280px] border-2 border-black rounded-md placeholder:text-sm focus:bg-[#84817a];
}
.login-button {
  @apply mt-6 bg-[#d1ccc0] h-[30px] w-[120px] rounded-md hover:bg-[#84817a];
}
</style>

<script lang="ts">
export default {
  route: { meta: { guest: true } },
};
</script>
