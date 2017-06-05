'use strict';

import Navigo from 'navigo';
import { loadHTML, $id } from './util';

//components scripts
import projects from '../components/projects/projects';


let router = new Navigo(null, true, '#!');
router.on({
  // main pages
  'about': () => { loadHTML('../components/about.html', 'view') },
  'contact': () => { loadHTML('../components/contact.html', 'view') },
  'projects': () => { loadHTML('../components/projects/projects.html', 'view', projects) },
  // project pages
  'mochibox': () => { loadHTML('../components/projects/mochibox/mochibox.html', 'view') },
  'this-website': () => { loadHTML('../components/projects/this-website/this-website.html', 'view') },
  'dadjokebot': () => { loadHTML('../components/projects/dadjokebot/dadjokebot.html', 'view') },
  'flask-metatag': () => { loadHTML('../components/projects/flask-metatag/flask-metatag.html', 'view') },
  'pay-the-rent': () => { loadHTML('../components/projects/pay-the-rent/pay-the-rent.html', 'view') },
});

// default route
router.on(() => { loadHTML('../components/projects/projects.html', 'view', projects) });

// 404 route
router.notFound((query) => { $id('view').innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>'; })

router.resolve();
