# PisiLako

## GitHub Pages

The workflow in `.github/workflows/pages.yml` builds and publishes the app on
pushes to `main` or `master`. It uses the Pages base path so images, audio, and
application bundles work under the repository URL.

To enable the first deployment:

1. Push this project to a GitHub repository.
2. Open the repository's **Settings > Pages** and select **GitHub Actions** as
   the source.
3. Open **Actions > Deploy to GitHub Pages > Run workflow** (or push a commit).

For a repository named `PisiLako` owned by `promicac`, the default address is
`https://promicac.github.io/PisiLako/`.

To check the production build locally with that path:

```bash
npm run build -- --base-href /PisiLako/
```

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.42.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
