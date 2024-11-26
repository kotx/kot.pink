import {
  defineConfig,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from "unocss";

export default defineConfig<object>({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        sans: "Satoshi",
      },
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives()],
});
