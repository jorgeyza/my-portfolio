# Jorge Portfolio

```
pnpm dev
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

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

[prettier-plugin-astro](): Official Prettier plugin adding support for formatting .astro files

Add the following settings to your VS Code configuration so VS Code is aware that Prettier can be used for Astro files:

```json
{
  "prettier.documentSelectors": ["**/*.astro"]
}
```

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
