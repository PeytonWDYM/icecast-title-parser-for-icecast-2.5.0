// parse icecast metadata
function parseMetadata() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // change mountpoint variable to match your mountpoint in icecast
        mountpoint = "/yourmountpoint";
        displaytitle = "display-title";
        var response = JSON.parse(this.responseText);
        var metadata = response[1].source[mountpoint][displaytitle];
        document.getElementById("metadata").innerHTML = "Currently Playing " + metadata;
      }
    };
    // PUT YOUR ICECAST JSON URL HERE
    // ONLY WORKS FOR ICECAST 2.5.0+
    // icecast 2.5.0 and above: https://yourdomain:port/admin/publicstats.json
    xhttp.open("GET", "https://example.com:8443/admin/publicstats.json", true);
    xhttp.send();
  }

// parse icecast metadata every 1 second
setInterval(parseMetadata, 10000);
