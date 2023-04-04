import { defineConfig } from "@vue/cli-service";
// eslint-disable-next-line no-undef
export default defineConfig({
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },
  transpileDependencies: ["quasar"],
});
