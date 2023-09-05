import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/api/echarts',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '获取成功',
        type: 'success',
        result: {
          title: {
            text: 'ECharts 入门示例',
          },
          tooltip: {},
          legend: {
            data: ['销量'],
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20],
            },
          ],
        },
      };
    },
  },
] as MockMethod[];
