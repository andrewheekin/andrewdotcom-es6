function about() {
  
  let html = `
    <div class="about">
      <div class="about-section">
        <h4>About</h4>
        <p>I'm a software engineer in the Washington, DC area</p>
      </div>
      <div class="about-section">
        <h4>Currently</h4>
        <p>I'm a software engineer at <a href="https://mochibox.io">Mochibox</a></p>
      </div>        
      <div class="about-section">
        <h4>Past</h4>
        <p>Software engineer at <a href="http://streetshares.com">StreetShares</a>, building loan underwriting software</p>
        <p>Software engineer at Booz Allen, developing and maintaining <a href="https://www.disasterassistance.gov/">DisasterAssistance.gov</a></p>
      </div>
      <div class="about-section">
        <h4>Technologies</h4>
        <p>Javascript, HTML, CSS, Python, Linux, databases</p>          
      </div>      
      <div class="about-section">
        <h4>School</h4>
        <p>BS, Systems Engineering, University of Virginia '14</p>
      </div>
    </div>
  `;
  
  document.getElementById('view').innerHTML = html;
}

export { about };
