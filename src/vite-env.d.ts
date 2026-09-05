type ImportMetaEnv = {
  readonly VITE_APP_API_URI: string;
  readonly VITE_SANITY_PROJECT_ID: string;
  readonly VITE_SANITY_DATASET: string;
  readonly VITE_SANITY_API_TOKEN?: string;
};
type ImportMeta = { readonly env: ImportMetaEnv };
