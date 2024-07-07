#define WORK_OK 8
#define WORK_WARNING 9
#define WORK_ERROR 10
#define PUMP_ONE 12
#define PUMP_TWO 11

#define GUARD_SENSOR A0
#define INDICATE_GUARD_SENSOR 3

#define INDICATE_SENSOR_LEVEL1 4

#define SENSOR_LEVEL2 A1
#define INDICATE_SENSOR_LEVEL2 5

#define SENSOR_LEVEL3 A2
#define INDICATE_SENSOR_LEVEL3 6

#define SENSOR_LEVEL4 A3
#define INDICATE_SENSOR_LEVEL4 7

#define interval 1000
unsigned long timer;

boolean gSensor[] = {false, false, false};
unsigned long lastActivation = 0;

boolean sensorLevel2[] = {false, false, false};
unsigned long lastActivationLevel2 = 0;

boolean sensorLevel3[] = {false, false, false};
unsigned long lastActivationLevel3 = 0;

boolean sensorLevel4[] = {false, false, false};
unsigned long lastActivationLevel4 = 0;

int state = 1;
int nState = 0;

void setup() {
  pinMode(GUARD_SENSOR, INPUT_PULLUP);
  pinMode(SENSOR_LEVEL2, INPUT_PULLUP);
  pinMode(SENSOR_LEVEL3, INPUT_PULLUP);
  pinMode(SENSOR_LEVEL4, INPUT_PULLUP);
  pinMode(WORK_OK, OUTPUT);
  pinMode(WORK_WARNING, OUTPUT);
  pinMode(WORK_ERROR, OUTPUT);
  pinMode(PUMP_ONE, OUTPUT);
  pinMode(PUMP_TWO, OUTPUT);
  pinMode(INDICATE_GUARD_SENSOR, OUTPUT);
  pinMode(INDICATE_SENSOR_LEVEL1, OUTPUT); 
  pinMode(INDICATE_SENSOR_LEVEL2, OUTPUT);
  pinMode(INDICATE_SENSOR_LEVEL3, OUTPUT);
  pinMode(INDICATE_SENSOR_LEVEL4, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  if (millis() - timer > interval) {
    timer = millis();
      guardSensor(gSensor[0], gSensor[1], gSensor[2], GUARD_SENSOR, INDICATE_GUARD_SENSOR, lastActivation);
      guardSensor(sensorLevel2[0], sensorLevel2[1], sensorLevel2[2], SENSOR_LEVEL2, INDICATE_SENSOR_LEVEL2, lastActivationLevel2);
      guardSensor(sensorLevel3[0], sensorLevel3[1], sensorLevel3[2], SENSOR_LEVEL3, INDICATE_SENSOR_LEVEL3, lastActivationLevel3);
      guardSensor(sensorLevel4[0], sensorLevel4[1], sensorLevel4[2], SENSOR_LEVEL4, INDICATE_SENSOR_LEVEL4, lastActivationLevel4);
      calculate (gSensor[2], sensorLevel2[2], sensorLevel3[2], sensorLevel4[2]);    
  };
}

void guardSensor(boolean &flag, boolean &flagNow, boolean &flagIndicate, int sensorPin, int indicatePin, unsigned long &delay) {
  flagNow = !digitalRead(sensorPin);

  if (flagNow == 1 && flag == 0 && millis() - delay > 100) {
    flag = 1;
    flagIndicate = !flagIndicate;
    digitalWrite(indicatePin, flagIndicate);
    delay = millis();
  } 
  if (flagNow == 0 && flag == 1) {
    flag = 0;
  }
}

void calculate (boolean error, boolean l2, boolean l3, boolean l4) {
    if (Serial.available() > 0) {
    nState = Serial.parseInt();
    while (Serial.available() > 0) {
        Serial.read();
    }
  }
  if (error || nState == 5) {
    state = 5;
  } else if ((!error && l2 && !l3 && !l4) || nState == 2) {
    state = 2;
  } else if ((!error && l2 && l3 && !l4) || nState == 3) {
    state = 3;
  } else if ((!error && l2 && l3 && l4) || nState == 4) {
    state = 4;
  } else state = 1;
  work (state);
}

void work(int state) {
  if (state != nState) Serial.print(state); 
  nState = state;
  switch (state) {
    case 1:
      digitalWrite(INDICATE_SENSOR_LEVEL1, HIGH);
      digitalWrite(PUMP_ONE, LOW);
      digitalWrite(PUMP_TWO, LOW);
      digitalWrite(WORK_OK, HIGH);
      digitalWrite(WORK_WARNING, LOW);
      digitalWrite(WORK_ERROR, LOW);      
      break;
    case 2:
      digitalWrite(INDICATE_SENSOR_LEVEL1, HIGH);
      digitalWrite(PUMP_ONE, HIGH);
      digitalWrite(PUMP_TWO, LOW);
      digitalWrite(WORK_OK, HIGH);
      digitalWrite(WORK_WARNING, LOW);
      digitalWrite(WORK_ERROR, LOW);
      break;
    case 3:
      digitalWrite(INDICATE_SENSOR_LEVEL1, HIGH);
      digitalWrite(PUMP_ONE, HIGH);
      digitalWrite(PUMP_TWO, HIGH);
      digitalWrite(WORK_OK, LOW);
      digitalWrite(WORK_WARNING, HIGH);
      digitalWrite(WORK_ERROR, LOW);
      break;
    case 4:
      digitalWrite(INDICATE_SENSOR_LEVEL1, HIGH);
      digitalWrite(PUMP_ONE, HIGH);
      digitalWrite(PUMP_TWO, HIGH);
      digitalWrite(WORK_OK, LOW);
      digitalWrite(WORK_WARNING, LOW);
      digitalWrite(WORK_ERROR, HIGH);
      break;
    case 5:
      digitalWrite(PUMP_ONE, LOW);
      digitalWrite(PUMP_TWO, LOW);
      digitalWrite(WORK_OK, LOW);
      digitalWrite(WORK_WARNING, LOW);
      digitalWrite(WORK_ERROR, HIGH);
      break;  
  }
}




