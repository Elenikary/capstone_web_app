//Here is the Javascript file of my page:

//use the keys from the Grandeur account that will generate the keys for me
const apiKey = YourApiKey;
const accessKey = YourAccessKey;
const accessToken = YourAccessToken;

// This connects the webpage to the internet.
const project = grandeur.init(apiKey, accessKey, accessToken);
project.auth().login(YourUserEmail, YourUserPassword);

// This subscribes to the "millis" variable.
project.devices().device(YourDeviceId).data().on("millis", (path, value) => document.getElementById("data").innerHTML = value);