import { axios } from '@/plugins/axios';

interface IEcharts {
  title: {
    text: string;
  };
  tooltip: {};
  legend: {
    data: string[];
  };
  xAxis: {
    data: string[];
  };
  yAxis: {};
  series: [
    {
      name: string;
      type: string;
      data: number[];
    }
  ];
}

function getEcharts() {
    return axios.request<IEcharts>({
      url: `echarts`,
    });
  }

  export {getEcharts}
