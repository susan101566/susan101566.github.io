This is my personal website built using React and Typescript.

How I got started.
```shell
npm init gatsby
cd my-gatsby-site/
npm run develop
```

This shows the website at localhost:8000. Stuff in `src/pages/index.js` are all separate pages.
My website repo is on Github, so I had to install some additional stuff.

```shell
npm install gh-pages --save-dev
npm install gatsby-plugin-cname
```

Update gatsby-config.js to be the following
```shell
module.exports = {
    siteMetadata: {
      siteUrl: 'http://www.handsomesail.com'
    },
    plugins: [
      'gatsby-plugin-cname'
    ],
  }
```

Then added the following to package.json, such that on `npm run deploy` from this branch, master will be updated and my website will update in a few minutes too.
```shell
    "deploy": "gatsby build && gh-pages -b master -d public"
```

I got here from searching for "Create React App" on Google.
