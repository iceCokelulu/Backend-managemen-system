interface ViteEnv {
  VITE_SOME_KEY: number;
  VITE_USER_KEY: boolean;
  VITE_ROUTER_KEY:boolean;
}

interface ImportMetaEnv extends ViteEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
