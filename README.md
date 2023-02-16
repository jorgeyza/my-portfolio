# Jorge Portfolio

```
pnpm dev
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `pnpm install`      | Installs dependencies                            |
| `pnpm dev`          | Starts local dev server at `localhost:3000`      |
| `pnpm build`        | Build your production site to `./dist/`          |
| `pnpm preview`      | Preview your build locally, before deploying     |
| `pnpm astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro --help` | Get help using the Astro CLI                     |

## 🗄️Dependencies

[Astro]('https://docs.astro.build/en/concepts/why-astro/'): Astro is an all-in-one web framework for building fast, content-focused websites.

[@astrojs/image](https://docs.astro.build/en/guides/integrations-guide/image/): For image optimization, with the use of `<Image />` and `<Picture>` components as well as a basic image transformer.

For the best development experience, add the integrations type definitions to your project’s env.d.ts file.

```
// Replace `astro/client` with `@astrojs/image/client`
/// <reference types="@astrojs/image/client" />
```

[sharp](https://sharp.pixelplumbing.com/): High speed Node.js module used as a better image transformer for `@astrojs/image`.

[prettier-plugin-astro](): Official Prettier plugin adding support for formatting .astro files.

Add the following settings to your VS Code configuration so VS Code is aware that Prettier can be used for Astro files:

```json
{
  "prettier.documentSelectors": ["**/*.astro"]
}
```

[@radix-ui/react-dialog](https://www.radix-ui.com/docs/primitives/components/dialog): Radix Primitives is a low-level UI component library. I used their dialog component.

[prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss): A Prettier plugin for Tailwind CSS v3.0+ that automatically sorts classes based on their recommended class order. `prettier-plugin-tailwindcss` _must_ be loaded last, meaning Prettier auto-loading needs to be disabled. You can do this by setting the `pluginSearchDirs` option to `false` and then listing each of your Prettier plugins in the `plugins` array:

```cjs
// .prettierrc.cjs
module.exports = {
  // ..
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss", // MUST come last
  ],
  pluginSearchDirs: false,
};
```

[eslint-plugin-astro](https://ota-meshi.github.io/eslint-plugin-astro/user-guide/): If you write TypeScript in Astro components, you also need to install the `@typescript-eslint/parser`, if you want to use the rules for checking accessibility (A11Y), you also need to install `eslint-plugin-jsx-a11y`

[@astrojs/partytown](https://docs.astro.build/en/guides/integrations-guide/partytown/): To send the loading of Google Analytics script to a web worker so it does not impact the page loading time.

[astro-seo](https://github.com/jonasmerlin/astro-seo): This Astro component makes it easy to add tags that are relevant for search engine optimization (SEO).
