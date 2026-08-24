import { defineConfig } from "oxlint"

export default defineConfig({
  categories: {
    correctness: "error",
    pedantic: "off",
    restriction: "warn",
    style: "warn",
    suspicious: "warn",
  },
  env: {
    builtin: true,
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
  plugins: ["eslint", "jsx-a11y", "import", "typescript", "unicorn", "oxc"],
})
