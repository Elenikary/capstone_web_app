#include <WiFiNINA.h>

//FIGURE OUT HOW TO OUTPUT ALL THE RIGHT PINS
#define sensorPin 12

char ssid[] = "lehigh";
char pass[] = "Pitsi-potso18";

int status = WL_IDLE_STATUS;

char server[] = "https://capstone-web-app258.herokuapp.com/home_page.html";

String postData;
String postVariable = "color=";

WiFiClient client;

void setup() {

  Serial.begin(9600);

  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to Network named: ");
    Serial.println(ssid);
    status = WiFi.begin(ssid, pass);
    delay(10000);
  }

  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());
  IPAddress ip = WiFi.localIP();
  IPAddress gateway = WiFi.gatewayIP();
  Serial.print("IP Address: ");
  Serial.println(ip);
}

void loop() {
  int reading = analogRead(sensorPin);
  String color_data = " empty string ";
  //voltage /= 1024.0;
  //float temperatureC = (voltage - 0.5) * 100 ;
  //float temperatureF = (temperatureC * 9.0 / 5.0) + 32.0;

  postData = color_data;

  if (client.connect(server, 80)) {
    client.println("POST /test/post.php HTTP/1.1");
    client.println("Host: https://capstone-web-app258.herokuapp.com/home_page.html");
    client.println("Content-Type: application/x-www-form-urlencoded");
    client.print("Content-Length: ");
    //client.println(postData.length());
    client.println();
    client.print(postData);
  }

  if (client.connected()) {
    client.stop();
  }
  Serial.println(postData);

  delay(3000);
}
