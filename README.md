# Ennismore GitHub Challenge

This repository contains a boostrapped Next.js project that generally follows the structure we use in production applications.

## The task

Your task is to build an app which displays public GitHub repositories for a specified user. When visiting the index page (`/`), there should be a text field in which you can enter any GitHub username and a button to trigger the search.

A list of repositories should then be returned, displaying:

- The repo title
- Number of stars
- Number of forks
- Programming language used

Clicking on the repository should take you to a detail view containing a description of the repository and license information. Users should also be able to 'bookmark' repositories, displayed when visiting `/bookmarks`. These bookmarks should be stored locally in the browser, persisting across refreshes.

- [The API endpoint you'll need is here](https://developer.github.com/v3/repos/#list-repositories-for-a-user). An API key should not be required.

## Tips

- We use [Next.js](https://nextjs.org) to provide SSR, code-splitting, routing and many other features. An interactive tutorial for Next.js is available [here](https://nextjs.org/learn).
- For the sake of this exercise, please use whatever state management strategy you're most comfortable with.
- We tend to split up our application into domain modules. Don't worry too much about conforming to this, but it's worth noting that aliases are setup so `import {} from "@/movie"` will import a file located at `/src/modules/movie/index.ts`.
- We use Jest for testing, co-locating test files alongside our implementation files. For example, the test file for `/src/modules/hello/helpers/hello-world.ts` would live at `/src/modules/hello/helpers/hello-world.test.ts`.
- For styling, we currently use emotion, but are also evaluating other solutions (such as [vanilla-extract](https://vanilla-extract.style/) or [stitches](https://stitches.dev/)) to use elsewhere. Again, please use whichever solution you are most comfortable with.
- We're not expecting the UI to win any design awards, but please make sure it's clean and consistent 🙂

You should spend a maximum of 2 hours on this. Please provide the code as close as you can to how you would for a production app (e2e tests are unnecessary). Don't worry if you run out of time - please feel free to write comments explaining what you would have done with more time available.

## Getting Started

First, install dependancies:

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to get started.

You can start editing the page by modifying `pages/index.tsx`. Hot-module reloading/fast refresh should be supported out of the box.

## Testing

Run tests using the following:

```bash
npm run test
```
