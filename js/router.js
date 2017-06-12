'use strict';

import Navigo from 'navigo';
import { $id } from './util';

//components scripts
import { about } from '../components/about';
import { contact } from '../components/contact';
import { projects } from '../components/projects/projects';
import { projectPage } from '../components/projects/projectPage';
import { learnJS } from '../components/learnJS/learnJS';


// let router = new Navigo(null, true, '#!'); // using hash
let router = new Navigo(null, false); // using HTML5 History API
router.on({
  // main pages
  'about': () => { about() },
  'contact': () => { contact() },
  'projects/:page': (params) => { projectPage(params.page) }, 
  'projects': () => { projects() },
  'javascript': () => { learnJS() },
});

// default route
router.on(() => { projects() });

// 404 route
router.notFound((query) => { $id('view').innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>'; })

router.resolve();

export { router };