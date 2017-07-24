import { highlight } from '../../js/scripts';

export function projectPage(page) {

  let html = '';

  switch (page) {

    case 'bust-a-cache':
      html = `
        <div class="project-page">
          <h1>Bust a cache</h1>
          <p>To make broswing more efficient and quicker, most browsers will cache familiar
          resources like images, css, etc. But when a 3rd party script changes to 
          deliver new functionality or content to a website, there's a risk the script has been 
          cached and the browser will default to the old version. To prevent caching, add your query string of choice (the current 
          UTC timestamp works fine) to the end of the file name to trick the browser's caching mechanism 
          into thinking a new resource is present.
          </p>
          <br>
          <p>Example:</p>
          <pre class="language-html"><code class="code">
  <script>
    ( function (m, o, c, h, i) {
        h = m.createElement(o);
        i = m.getElementsByTagName(o)[0];
        h.src = c + '?v=' + (new Date().getTime());
        i.parentNode.insertBefore(h, i);
      } ) ( document, 'script', 'https://cdn.com/path/script.js');
   </script>
          </code></pre>
        </div>
      `;
      break;

    case 'this-website':
      html = `
        <div class="project-page">
          <h1>This website</h1>
          <p>The site is hosted with AWS S3 static hosting. The view is generated with react.js and
          webpack bundles all javascript. React-router provides simple
          routing functionality for the site. With the bundled javascript from webpack, updating the 
          site is as simple as uploading the new index.html, style, bundle.js, and img folder to the
          bucket.</p>
          <br />
          <p>
            <a href="https://github.com/andrewheekin/andrewdotcom">
            https://github.com/andrewheekin/andrewdotcom</a>
          </p>
        </div>
      `;
      break;

    case 'pay-the-rent':
      html = `
        <div class="project-page">
          <h1>Pay the rent</h1>
          <p>The pay-the-rent application collects monthly rent through venmo's api.
          The AP Scheduler package runs the payment cron jobs, the python requests package posts
          charges. BeautifulSoup parses the headers of the Venmo login page.
          The config.json file sets the charge amount, venmo usernames to charge, frequency, and time
          window.</p>
          <br />
          <p><a href="https://github.com/andrewheekin/pay-the-rent">
          https://github.com/andrewheekin/pay-the-rent</a></p>
        </div>
      `;
      break;

    case 'mochibox':
      html = `
        <div class="project-page">
          <h1>Mochibox</h1>
          <p>Over half of restaurant patrons will visit the restaurant's website before visiting, according
          to the National Restuarant Association. Mochibox was created to draw web visitors into the restaurant
          by capturing emails and social engagement in exchange for specials.</p>
          <br />
          <p>Homepage: <a href="https://mochibox.io">https://mochibox.io</a></p>
          <p>Email: <a href="mailto:andrew@mochibox.io">andrew@mochibox.io</a></p>
        </div>
      `;
      break;

    case 'flask-metatag':
      html = `
        <div class="project-page">
          <h1>Flask metatag</h1>
          <p>Python flask api that uses the python newspaper package to output
          the open graph information (title, description, images) of a website.</p>
          <br />
          <p>Github repo: <a href="https://github.com/andrewheekin/flask-metatag">
          https://github.com/andrewheekin/flask-metatag</a></p>
        </div>      
      `;
      break;

    case 'dadjokebot':
      html = `
        <div class="project-page">
          <h1>Dadjokebot</h1>
          <p>This project is a python flask application using the twilio package.
          I added a landing page as a link in the response
          sms to collect analytics data. The landing page is a static site that makes cross-origin calls to an external
          resource. The client is statically hosted on S3 by cloudfront.
          The server is hosted on DigitalOcean. Docker-compose rebuilds the 
          flask app container. Dockerized postgres and a
          separate postgres data container persist data on who texts the app. Redis keeps track of jokes told to 
          avoid telling the same joke twice. SSL certs are set up on both the
          server ip and the S3 domain. Nginx acts as a reverse proxy.</p>
          <br />
          <p><a href="https://dadjokebot.com">https://dadjokebot.com</a></p>
          <p><a href="https://github.com/andrewheekin/dadjoke-frontend">https://github.com/andrewheekin/dadjoke-frontend</a></p>
          <p><a href="https://github.com/andrewheekin/dadjoke">https://github.com/andrewheekin/dadjoke</a></p>
        </div>      
      `;
      break;    
  }

  document.getElementById('view').innerHTML = html;

  highlight();
}
