# NextJS-Typescript Starter

## Tech Stack

1. [NextJS](https://nextjs.org/) v^10.1.3
2. [ReactJs](https://reactjs.org/) v16.8.6
3. [Typescript](https://www.typescriptlang.org/) v3.8.2
4. [StyledComponents](https://styled-components.com/) v5.0.1
5. [Yarn Package Manager](https://yarnpkg.com/)
6. Node version 12.x,
   [(Use NVM to manage node versions)](https://github.com/nvm-sh/nvm/blob/master/README.md)

## Install

```bash
git clone git@github.com:bighuman/nextjs-typescript.git name-of-folder
cd name-of-folder
yarn install
```

## Development

```bash
yarn dev
```

## Pre-push Rules

On every push to github, yarn will automatically run the below pre-push hooks. If these checks pass,
your code should be good to be raised as a PR.

```bash
 yarn lint && yarn tsc
```

## Production

```bash
yarn start
```

## Staging Environment

Run `now` in the project directory to link project to Zeit.
[Learn More](https://zeit.co/docs/now-cli#commands/now/project-linking)

1. ONLY do this the first time the project is being setup with `now`.
2. Run `yarn global add now` or `npm i -g now` to install `now` globally.
3. Run `now` in your project root.
4. Follow the command line prompts.
5. Now will use your project's directory name to search the Big Human Organization on Zeit.
   1. If it exists, `now` will automatically link your project's local directory to the project in
      Zeit.
   2. If it doesn't exist, the `now` cli will prompt you to create and link the project.
6. At the end, you will notice a `.now` directory locally. This new directory will automatically be
   added to your `.gitignore`.
