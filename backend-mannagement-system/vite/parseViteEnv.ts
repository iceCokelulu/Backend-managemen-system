import _ from 'lodash';
function parseEnv(env: Record<string, any>):ViteEnv {
  const envs:any = _.cloneDeep(env);
  Object.entries(env).forEach(([key, value]) => {    
    if (value == 'true' || value == 'false') {
      envs[key] = value == 'true'?true:false
    } else if (/^\d+$/.test(value)) {
      envs[key] = Number(value);
    }
  });
  return envs;
}

export { parseEnv };
