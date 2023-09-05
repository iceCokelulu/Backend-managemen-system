import { viteMockServe } from 'vite-plugin-mock';
export default function setUpMockJs(isBuild: boolean) {
  return viteMockServe({
    mockPath: 'mock',
    localEnabled: !isBuild,
  });
}
