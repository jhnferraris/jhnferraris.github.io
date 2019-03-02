var ghpages = require('gh-pages');

ghpages.publish('public', {
  repo: 'git@github.com:jhnferraris/blog.git',
  silent: true
});
