'use strict';

import Navigo from 'navigo';
import { loadHTML, $id } from './util';


let router = new Navigo(null, true, '#!');
router.on({
  'about': () => { loadHTML('../components/about.html', 'view') },
  'contact': () => { loadHTML('./components/contact.html', 'view') },
  'projects': () => { loadHTML('./components/projects/projects.html', 'view') } 
});

// default route
router.on(() => { $id('view').innerHTML = '<h2>Here by default</h2>'; });

// 404 route
router.notFound((query) => { $id('view').innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>'; })

router.resolve();