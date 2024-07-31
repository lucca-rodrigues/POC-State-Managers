// /// <reference types="vite/client" />

// declare module "virtual:generated-pages" {
//   const routes: import("react-router-dom").RouteObject[];
//   export default routes;
// }

/// <reference types="vite/client" />

declare module "virtual:generated-pages" {
  const routes: import("react-router-dom").RouteObject[];
  export default routes;
}

interface ImportMetaEnv {
  readonly VITE_MOVIES_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
