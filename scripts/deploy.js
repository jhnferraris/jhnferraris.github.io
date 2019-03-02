var ghpages = require('gh-pages');

ghpages.publish('build', {
  repo: 'git@github.com:jhnferraris/blog.git',
  silent: true
});
