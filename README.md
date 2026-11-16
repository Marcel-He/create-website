# RYZE Digital Project Starter Kit

![Run linter(s) workflow status](https://github.com/ryze-digital/create-website/actions/workflows/run-lint.yml/badge.svg)

## Requirements

- [Node.js](https://nodejs.org/) and npm in the versions defined under `engines` in the `package.json` of the chosen
  boilerplate
- [Dart Sass](https://sass-lang.com/dart-sass/) installed globally, so that the `sass` command is available. It is
  intentionally not installed as a project dependency.

## Usage

Open the folder in which you want to set up a new project. In Ecoma projects (for example) this is
`/public/project/frontend`. **The folder needs to be empty.** Run the following script and replace
`@namespace/project-name` with the name of your project.

```sh
npm init @ryze-digital/website@latest @namespace/project-name
```

The installer will then ask you for the project name, the boilerplate and the output directory.

## Options

### Change output directory

By default, the output directory is `build`. You can change it when the installer asks for it, or preset it by adding a
third parameter to the call from above:

```sh
npm init @ryze-digital/website@latest @namespace/project-name ../../public/dist
```

_The path has to be relative to the folder in which you run the command and may only contain letters, numbers, `.`, `_`,
`-` and `/`._

#### Troubleshooting

If you use a path outside the folder in which you run the command, it can happen that the `pre-production` script throws
the following error:

`Warning: Cannot delete files outside the current working directory. Use --force to continue.`

To fix this, you can set `deleteOriginals` to `false` for the `cacheBust` task inside `Gruntfile.cjs`. Please note that
in this case the unhashed build files will remain in the output directory.

### Loglevel

Loglevel can be changed to see more detail output during installation. By default, loglevel is `silent`. Allowed values
are `error`, `warn`, `info`, `verbose` and `silly`.

```sh
npm init @ryze-digital/website@latest @namespace/project-name --loglevel error
```
