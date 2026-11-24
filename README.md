# RYZE Digital Project Starter Kit

![Run linter(s) workflow status](https://github.com/ryze-digital/create-website/actions/workflows/run-lint.yml/badge.svg)

## Requirements

- [Node.js](https://nodejs.org/) and npm in the versions defined under `engines` in the `package.json` of the chosen
  boilerplate
- [Dart Sass](https://sass-lang.com/dart-sass/) installed globally, so that the `sass` command is available. It is
  intentionally not installed as a project dependency.

## Usage

Open the folder in which you want to set up a new project. In Ecoma projects (for example) this is
`/public/project/frontend`. **The folder needs to be empty.** Run the following script:

```sh
npm init @ryze-digital/website@latest
```

## Options

### Project name

Used as `name` in the `package.json`, e.g. `@namespace/project-name`.

### Boilerplate

Currently, `legacy` is the only boilerplate available. A new one is currently under development.

### Output directory

The output path has to be relative to the folder in which you run the command.

> [!NOTE]
> With a path outside of this folder, the `pre-production` script may fail with
> `Warning: Cannot delete files outside the current working directory. Use --force to continue.`
> In this case, set `deleteOriginals` to `false` for the `cacheBust` task in `Gruntfile.cjs`. The unhashed build files
> will then remain in the output directory.

### Lazysizes

By default, the boilerplate ships with [lazysizes](https://github.com/aFarkas/lazysizes) for lazy loading and responsive images. If you answer the
question `Do you want to use lazysizes?` with no, the `lazysizes` package will not be installed,
`src/scripts/lazysizes.js` does not get created and the lazysizes specific entry and chunk configuration is removed
from `webpack.config.js`.

### CKEditor styles

By default, the boilerplate ships with `src/styles/ckeditor.scss`, a separate Sass entry which compiles to its own
stylesheet for the [CKEditor](https://ckeditor.com/ckeditor-4/). If you answer the question
`Do you need a separate Sass entry for CKEditor?` with no, the entry does not get created.

### Loglevel

The loglevel of the npm commands run during installation. By default, it is `silent`. Choose a more verbose level to see
more details.
