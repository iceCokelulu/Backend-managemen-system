import path from 'path';
import { AliasOptions } from 'vite';
const alias: AliasOptions = {
  '@': path.resolve(__dirname, '../src'),
  '#': path.resolve(__dirname, '../types'),
};

export default alias;

