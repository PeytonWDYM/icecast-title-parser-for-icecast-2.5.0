let interval = 10000
let mountpoint = "/yourmountpoint";
let icecastLink = "https://yourdomain:port/admin/publicstats.json";


function parseMetadata() {
    fetch('https://example.com:8443/admin/publicstats.json')
    .then((response) => response.json())
    .then((data) => {
        var metadata = data.source[mountpoint]["display-title"];
        document.getElementById("metadata").innerHTML = "Currently Playing " + metadata;
    })
    .catch((error) => {
        console.error(error);
    });
}


setInterval(parseMetadata, interval);
