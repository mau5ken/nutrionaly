---
path: awesome-images
date: 2020-06-06T01:22:55.506Z
title: Awesome Images
description: Fix for gatsby-plugin-mdx and gatsby-remark-images
---
![Great Gatsby](/../assets/great2.jpg "Great Gatsby")

## Netlify CMS Media Configuration

First, in your `static/admin/config.yml`, make sure you have the following

Docs: https://www.netlifycms.org/docs/configuration-options/#media-and-public-folders.

## Gatsby Plugins

From [@cwgw](https://github.com/cwgw):

So digging a little deeper, it looks like Gatsby only looks for "subplugins" at one specific path, `options.plugins`.

`gatsby-plugin-mdx` uses `options.gatsbyRemarkPlugins`. This is fine for transforming markdown as the plugin handles that itself, but Gatsby-specific api files like `gatsby-browser.js` don't get loaded because Gatsby doesn't know they exist.



…everything works as it should.