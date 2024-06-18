/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_HAPPY: number
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}