# Temp Gatsby Site

Temporary Frontend Gatsby Site set up for Audiopedia

## Git commands
- To add this online repo you can do: `git clone https://github.com/audiopedia-t4sg/pwa.git` which will make a new folder with all this code
- To pull changes from the master branch: `git pull origin master` (syntax git pull `the remote name, in this case origin` `the branch name, in this case master branch`)
- To make a new branch: `git checkout -b new-branch-name`
- To commit changes you've made: 1. `git add .` 2. `git commit -m "blah blah commit msg"`
- To push changes to that new branch: `git push origin new-branch-name`
- To go back to master branch `git checkout master`
- To go back to another existing branch `git checkout other-branch-name`

## Get started

- You will need the following installed:
  - nodejs
    - https://nodejs.org/en/download/
  - gatsby
    - `npm i -g gatsby-cli`

- To run development server locally:
  - `gatsby develop`
  - Development server runs at `http://localhost:8000` by default
  - GraphiQL at `http://localhost:8000/___graphql`

## 🧐 What's inside?

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

2.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

3.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

4.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

## 🎓 Learning Gatsby

Gatsby docs: https://www.gatsbyjs.com/docs/

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-default)

