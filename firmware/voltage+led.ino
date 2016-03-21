int channelOne      = D1;
int channelTwo      = D2;
int vPin            = A5;
double vPow         = 3.33;
double r1           = 82000;
double r2           = 10000;
double voltageValue = 0;
double maxInput     = 0;

void setup()
{
  pinMode(channelOne, OUTPUT);
  pinMode(channelTwo, OUTPUT);
  pinMode(vPin,INPUT);

  Particle.function("relay1", relay1Toggle);
  Particle.function("relay2", relay2Toggle);
  Particle.variable("voltage", voltageValue);
  Particle.variable("maxvoltage", maxInput);

  digitalWrite(channelOne, HIGH);
  digitalWrite(channelTwo, HIGH);

  maxInput = (vPow / (r2 / (r1 + r2)));
}

void loop() {
  // Particle.io ref voltage is 3.3V and A2D is 12bit
  double v = (analogRead(vPin) * vPow) / 4096.0;
  // Convert from voltage divider circuit
  double v2 = v / (r2 / (r1 + r2));

  // Round value to 3 decimal places
  voltageValue = ((int)(v2 * 10000)) / 10000;

  delay(5000);
}

int relay1Toggle(String command) {
  if (command=="on") {
    digitalWrite(channelOne, LOW);
    return 1;
  }
  else if (command=="off") {
    digitalWrite(channelOne, HIGH);
    return 0;
  }
  else {
    return -1;
  }
}

int relay2Toggle(String command) {
  if (command=="on") {
    digitalWrite(channelTwo, LOW);
    return 1;
  }
  else if (command=="off") {
    digitalWrite(channelTwo, HIGH);
    return 0;
  }
  else {
    return -1;
  }
}
