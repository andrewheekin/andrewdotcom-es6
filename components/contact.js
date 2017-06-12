function contact() {
  
  let html = `
    <div class="contact">
      <ul>
        <li><h4><a href="mailto:andrewheekin@gmail.com">andrewheekin@gmail.com</a></h4></li>
        <li><h4><a href="https://github.com/andrewheekin">Github</a></h4></li>
        <li><h4><a href="https://www.linkedin.com/pub/andrew-heekin/48/24a/465">Linkedin</a></h4></li>
        <li><h4><a href="https://twitter.com/andrewheekin">Twitter</a></h4></li>          
      </ul>
    </div>
  `;
  
  document.getElementById('view').innerHTML = html;
}

export { contact };
