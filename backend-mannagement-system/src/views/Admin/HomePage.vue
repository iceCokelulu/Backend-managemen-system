<template>
  <div class="mt-4 gap-3 grid md:grid-flow-col">
    <el-card
      shadow="hover"
      :body-style="{ padding: '20px' }"
      v-for="v of label">
      <template #header>
        <div class="flex justify-between">
          <span>{{ v.title }}</span>
          <el-tag type="danger" size="small" effect="dark">月</el-tag>
        </div>
      </template>
      <section class="flex justify-between">
        <span>$4300</span>
        <i class="fas fa-money-check-dollar text-2xl text-green-500"></i>
      </section>
      <section class="flex justify-between mt-2">
        <span>总人数</span>
        <span>200</span>
      </section>
    </el-card>
  </div>
  <div class="mt-2 p-3 grid md:grid-cols-2 gap-3">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <template #header>
        <div>
          <span>销售数据</span>
        </div>
      </template>
      <div id="ECharts1" class="h-72"></div>
    </el-card>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <template #header>
        <div>
          <span>用户数量</span>
        </div>
      </template>
      <div id="ECharts2" class="h-72"></div>
    </el-card>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
    <template #header>
    <div>
    <span>商品库存</span>
    </div>
    </template>
    <div id="ECharts3" class="h-[400px]"></div>
    </el-card>
    
    
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { eCharts1, eCharts2, eCharts3 } from './eCharts.ts';
const label = ref<{ title: string }[]>([
  { title: '个人中心' },
  { title: '订单数量' },
  { title: '页面布局' },
  { title: '数据分析' },
]);

nextTick(() => {
  echarts.init(document.getElementById('ECharts1')).setOption(eCharts1);
  echarts.init(document.getElementById('ECharts2')).setOption(eCharts2);
  echarts.init(document.getElementById('ECharts3')).setOption(eCharts3);
});
</script>

<style scoped></style>
