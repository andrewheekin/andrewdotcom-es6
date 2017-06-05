// getElementById wrapper
export function $id(id) {
  return document.getElementById(id);
}

// asyncrhonously fetch the html template partial from the file directory,
// then set its contents to the html of the parent element
// (note, better than the HTML5 object tag: $id(id).innerHTML = `<embed name="foo" type="text/html" data="${url}"></embed>`;)
export function loadHTML(url, id, cb = null) {
  let req = new XMLHttpRequest();
  req.open('GET', url);
  req.send();
  req.onload = () => {
    $id(id).innerHTML = req.responseText;
    if (typeof cb == 'function') cb(); // run callback function if exists to load javascript;
  }
}