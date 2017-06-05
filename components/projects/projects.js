export function projects() {

  const projects = [
    {
      "title":"Mochibox",
      "url":"/#!/mochibox",
      "author":"Andrew Heekin",
      "date":"12 MAR 2017",
      "description":"Over half of restaurant patrons will visit the restaurant's website before visiting, according \
      to the National Restuarant Association. Mochibox was created to draw web visitors into"
    },{
      "title":"This website",
      "url":"/#!/this-website",
      "author":"Andrew Heekin",
      "date":"5 JUNE 2016",
      "description":"The site is hosted with AWS S3 static hosting. The view is generated with react.js and \
        webpack bundles all javascript. React-router provides simple routing functionality for"
    },{
      "title":"Dadjokebot",
      "url":"/#!/dadjokebot",
      "author":"Andrew Heekin",
      "date":"7 MAY 2016",    
      "description":"This project is a python flask application using the twilio package. I added a landing \
        page as a link in the response sms to collect analytics data. The landing page is a static site \
        that makes"
    },{
      "title":"Pay the rent",
      "url":"/#!/pay-the-rent",
      "author":"Andrew Heekin",
      "date":"25 JANUARY 2016",    
      "description":"The pay-the-rent application collects monthly rent through venmo's api.The AP Scheduler \
        package runs the payment cron jobs, the python requests package posts charges. BeautifulSoup parses"
    },{
      "title":"Flask metatag",
      "url":"/#!/flask-metatag",
      "author":"Andrew Heekin",
      "date":"30 DECEMBER 2015",    
      "description":"Python flask api that uses the python newspaper package to output the open graph \
        information (title, description,"
    }
  ];

  let html = '';

  projects.forEach(project => {
    html += `
      <a href=${project.url} data-navigo><h1>${project.title}</h1></a>
        <p>${project.description} <a href=${project.url}>>></a></p>
          <div class="author">
            <div class="author-name">${project.author}</div>
            <div class="vertical-rule"></div>
            <div class="date">${project.date}</div>
          </div>
          <hr />
      `;
  });
  
  document.getElementById('projects').innerHTML = html;

}
