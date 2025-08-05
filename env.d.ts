/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_URL: string
  VITE_APP_TITLE: string
  VITE_PORT: number
  // 其他环境变量声明...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
