'use strict';

import 'prismjs';
import Navigo from 'navigo';
import { $id, $cl } from './util';

//components scripts
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/projects/Projects';
import { ProjectPage } from './components/projects/ProjectPage';
import { CS } from './components/CS/CS';


// let router = new Navigo(null, true, '#!'); // using hash
let router = new Navigo(null, false); // using HTML5 History API
router.on({
  // main pages
  'about': () => { new About() },
  'contact': () => { new Contact() },
  'projects/:page': (params) => { new ProjectPage(params.page) }, 
  'projects': () => { new Projects() },
  'cs': () => { new CS() },
});

// default route
router.on(() => { new Projects() });

// highlight code after every route change
router.hooks({
  after: (params) => { Prism.highlightAll() }
});

// 404 route
router.notFound((query) => { $id('view').innerHTML = '<h4>Couldn\'t find the page you\'re looking for...</h4>' })

router.resolve();

export { router };