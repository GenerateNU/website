type ImportMetaEnv = {
  readonly VITE_API_URI: string;
  readonly VITE_SANITY_PROJECT_ID: string;
  readonly VITE_SANITY_DATASET: string;
};

type ImportMeta = { readonly env: ImportMetaEnv };
