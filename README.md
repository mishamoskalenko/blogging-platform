# Demo and Reports

- **Demo (Netlify, in development):** https://mishablogging-platform.netlify.app/<br>
  *Note: Data on this demo cannot be modified or persisted. (run locally to edit and persist data)*
- **Unit & Screenshot Test Reports (GitHub Pages):** https://mishamoskalenko.github.io/blogging-platform/  

----


## Launching the project

```
npm install - install dependencies
npm run start:dev or npm run start:dev:vite - start the server + frontend of the project in dev mode
```

----

## Scripts

- `npm run start` - Start the frontend project on the webpack dev server
- `npm run start:vite` - Start the frontend project on vite
- `npm run start:dev` - Start the frontend project on the webpack dev server + backend
- `npm run start:dev:vite` - Start the frontend project on vite + backend
- `npm run start:dev:server` - Start the backend server
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (not minimised)
- `npm run lint:ts` - Check ts files with linter
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Check scss style files with linter
- `npm run lint:scss:fix` - Fix scss style files with linter
- `npm run test:unit` - Run unit tests with jest
- `npm run test:ui` - Run screenshot tests with loki
- `npm run test:ui:ok` - Confirm new screenshots
- `npm run test:ui:ci` - Run screenshot tests in CI
- `npm run test:ui:report` - Generate a full report for screenshot tests
- `npm run test:ui:json` - Generate a JSON report for screenshot tests
- `npm run test:ui:html` - Generate an HTML report for screenshot tests
- `npm run storybook` - Run Storybook
- `npm run storybook:build` - Build the Storybook build
- `npm run generate:slice` - Script for generating FSD slices

----

## Project architecture

The project was written in accordance with the Feature sliced design methodology.

Link to documentation - [feature sliced design](https://feature-sliced.github.io/documentation/docs)

----

## Working with translations

The project uses the i18next library to work with translations.
Translation files are stored in public/locales.

For ease of use, we recommend installing the plugin for webstorm/vscode.

i18next documentation - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

The project uses four types of tests:
1) Regular unit tests on Jest - `npm run test:unit`
2) Component tests with React Testing Library - `npm run test:unit`
3) Screenshot testing with Loki `npm run test:ui`
4) E2E testing with Cypress `npm run test:e2e` for localhost:3000 and localhosh:8000(server)

----

## Linting

The project uses eslint to check typescript code and stylelint to check style files.

In addition, to strictly control the main architectural principles, we use our own eslint plugin *eslint-plugin-eslint-path-plugin*,
which contains three rules
1) path-checker - prohibits the use of absolute imports within a single module.
2) layer-imports - checks the correctness of layer usage from an FSD perspective
   (for example, widgets cannot be used in features and entities).
3) public-api-imports - allows imports from other modules only from the public API. Has auto fix.

##### Running linters
- `npm run lint:ts` - Checks ts files with a linter
- `npm run lint:ts:fix` - Fixes ts files with a linter
- `npm run lint:scss` - Checks scss style files with a linter
- `npm run lint:scss:fix` - Fixes scss style files with a linter

----
## Storybook

The project describes story cases for each component.
Requests to the server are mocked using storybook-addon-mock.

The file with story cases is created next to the component with the extension .stories.tsx

You can run the storybook with the command:
- `npm run storybook`

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```


----

## Project configuration

The project contains two configurations for development:
1. Webpack - ./config/build
2. Vite - vite.config.ts

Both builders are adapted to the main features of the application.

All configuration is stored in /config
- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

The `scripts` folder contains various scripts for refactoring, simplifying code writing, generating reports, etc.

----

## CI pipeline and pre-commit hooks

The GitHub Actions configuration is located in /.github/workflows.
All types of tests, project and storybook builds, and linting are run in CI.

In pre-commit hooks, we check the project with linters, config in /.husky

----

### Working with data

Data interaction is carried out using the redux toolkit.
Where possible, reusable entities should be normalised using EntityAdapter

Requests to the server are sent using [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous connection of reducers (so as not to pull them into the general bundle),
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) is used.

----


## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
