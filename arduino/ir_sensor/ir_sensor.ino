const int sensorPin = 2;
int lastState = 1;

void setup() {
  pinMode(sensorPin, INPUT);
  Serial.begin(9600);
}

void loop() {
  int state = digitalRead(sensorPin);

  if (state == 0 && lastState == 1) {
    Serial.println("INTRUDER"); 
  }

  lastState = state;
  delay(50);
}