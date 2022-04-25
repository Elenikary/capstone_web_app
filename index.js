//Here is the Javascript file of my page:

//use the keys from the Grandeur account that will generate the keys for me
const apiKey = grandeurl27v9kog0mqm0pxf7p0mgvdh;
const accessKey = accessl2ezq7kc1iy00pxf1mae32yr;
const accessToken = eyJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNkltRmpZMlZ6YzJ3eVpYcHhOMnRqTVdsNU1EQndlR1l4YldGbE16SjVjaUlzSW5SNWNHVWlPaUpoWTJObGMzTWlMQ0pwWVhRaU9qRTJOVEE1TURjMU5EWjkuRUd1MmRHMXQ2c1lnUVZwSklQVHlYUS14WkpmRFF5NXFLSHhhRXBhODBrdyJ9;

// This connects the webpage to the internet.
const project = grandeur.init(apiKey, accessKey, accessToken);
project.auth().login(elenikaryofylli@gmail.com, !@E2672000k);

// This subscribes to the "millis" variable.
project.devices().device(devicel2f0nie81j260pxf5x657adq).data().on("millis", (path, value) => document.getElementById("data").innerHTML = value);