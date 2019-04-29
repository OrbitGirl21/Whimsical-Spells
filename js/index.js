/**
  CONFIGURE JSON CALL
**/

// The API feed

const getStuff = "https://api-beta.open5e.com/spells/?format=json";

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