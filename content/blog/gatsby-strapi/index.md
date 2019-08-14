---
title: "Gatsby + Strapi"
date: "2019-08-10"
description: "gatsby and strapi experiment"
keywords: ""

---


**UPDATE**

I had to rollback to using the markdown files for now since Heroku + MongoDB sleeps and clears off the database from time to time.

-----

I managed to convert this blog site from using markdown templates and took advantage of the following stack:

* [GatsbyJS](https://www.gatsbyjs.org/)
* [Netlify](https://www.netlify.com/)
* [Strapi](https://strapi.io/)
* [Heroku](https://www.heroku.com/)

The above stack was based on Strapi's blog tutorial.

What I have achieved so far are:

* Static site rendering via [GatsbyJS](https://www.gatsbyjs.org/)
* Content management and API via [Strapi](https://strapi.io/) as a data source of [GatsbyJS](https://www.gatsbyjs.org/)
* Automated deployments using [Netlify](https://www.netlify.com/) and [Heroku](https://www.heroku.com/)

Caveats:

**CRITICAL** I also had to put a Heroku Scheduler to ping the CMS so it will be kept alive or else all the content will be erased.
**CRITICAL** Since I'm using a sandbox environment in Heroku, whenever I deploy changes in my Strapi codebase, all my articles inside the mongodb will be erased. It is best to migrate this to a better service soon.


Looking forward to put this to good use in my tech team.