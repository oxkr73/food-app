function getAjax(url, callback) {
  var xhttp = new XMLHttpRequest();
  var dataToSend = dataToSend || '';
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //console.log(this.getAllResponseHeaders());
      //console.log(this.responseText);
      let response = this.responseText;
      callback(response);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function postResponse (xhttp) {
  var statusMessage = document.getElementById('form-messages');
  console.log(xhttp);
  return statusMessage.innerHTML = xhttp;
}

export {getAjax, postResponse};
