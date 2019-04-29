/**
  CONFIGURE JSON CALL
**/

// The API feed

const getStuff = "https://gist.githubusercontent.com/OrbitGirl21/17c9b8be12964bc418e7065a6cdd1422/raw/0aba498934a81d9e971f2b5dd23fe5af60cc8b0a/data.json";

let doStuff = function (data) {
  // How big is array?
  console.log(data.results);
  console.log(data.results.length);

  for (i = 0; i < data.results.length; i++) {
    const template = `
<center>
<div class=container>
<h1> ${data.results[i].name}</h1>
Description: ${data.results[i].desc}<br>
Range: ${data.results[i].range}<br>
</div>
`;
    $("#app").append(template);
  }
};
$.getJSON(getStuff, doStuff);
