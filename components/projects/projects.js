import { router } from '../../js/scripts';

export class Projects {
  constructor() {
    this.projectList = [
      {
        title: 'Bust a cache',
        url: '/bust-a-cache',
        author: 'Andrew Heekin',
        date: '18 JULY 2017',
        description: `To make broswing more efficient and quicker, most browsers will cache familiar external
        resources like images, css, etc. But when an external script changes to`
      },{
        title: 'Mochibox',
        url: '/mochibox',
        author: 'Andrew Heekin',
        date: '12 MAR 2017',
        description: `Over half of restaurant patrons will visit the restaurant's website before visiting, according 
        to the National Restuarant Association. Mochibox was created to draw web visitors into`
      },{
        title: 'This website',
        url: '/this-website',
        author: 'Andrew Heekin',
        date: '5 JUNE 2016',
        description: `The site is hosted with AWS S3 static hosting. The view is generated with react.js and 
          webpack bundles all javascript. React-router provides simple routing functionality for`
      },{
        title: 'Dadjokebot',
        url: '/dadjokebot',
        author: 'Andrew Heekin',
        date: '7 MAY 2016',    
        description: `This project is a python flask application using the twilio package. I added a landing 
          page as a link in the response sms to collect analytics data. The landing page is a static site 
          that makes`
      },{
        title: 'Pay the rent',
        url: '/pay-the-rent',
        author: 'Andrew Heekin',
        date: '25 JANUARY 2016',    
        description: `The pay-the-rent application collects monthly rent through venmo's api.The AP Scheduler 
          package runs the payment cron jobs, the python requests package posts charges. BeautifulSoup parses`
      },{
        title: 'Flask metatag',
        url: '/flask-metatag',
        author: 'Andrew Heekin',
        date: '30 DECEMBER 2015',    
        description: `Python flask api that uses the python newspaper package to output the open graph 
          information (title, description,`
      }
    ];

    this.render();
  }

  render() {
    let html = '';

    this.projectList.forEach(project => {
      html += `
        <a href=${'/projects' + project.url} data-navigo><h1>${project.title}</h1></a>
          <p>${project.description} <a href=${'/projects' + project.url} data-navigo>>></a></p>
            <div class="author">
              <div class="author-name">${project.author}</div>
              <div class="vertical-rule"></div>
              <div class="date">${project.date}</div>
            </div>
            <hr />
        `;
    });

    html = `<div id="projects" class="projects">${html}</div>`;
    
    document.getElementById('view').innerHTML = html;
    router.updatePageLinks();  // call binds new <a href>'s to Navigo    
  }
}
