---
title: Embedded System Learning Note (1)
published: 2024-04-26
description: Learning note of embedded system
tags: [Learning, UCSD, Embedded System]
category: Embedded System
draft: true
---

# What is Embedded Systems?
An embedded system is a specialized computing system that performs dedicated functions or a set of dedicated functions within a larger system. It is 'embedded' as part of a complete device often including hardware and mechanical parts. Unlike a general-purpose computer, such as a personal computer, an embedded system performs pre-defined tasks, usually with very specific requirements, and often includes real-time computing constraints.

> Embedded systems are computers with **constraints** with respect to intended applications and form factors, power, system resources and features, and assumptions about user behavior [^1].

**Samples of Embedded Applications:**
* **Digital signage:** public video displays, primarily for advertising or entertainment
* **Sensors:** Environmental and industrial process quality control sensors

# Embedded Platform Characteristics
>  Embedded systems are designed to perform a specific task or function.

> Embedded systems can range from a simple stand-alone device to a chassis of networked cards to a system composed of many separate networked embedded elements. 

* **Central Processing Unit (CPU):**
  * The common use of 8-bit and 16-bit CPUs in simple control applications, such as Atmel AVR and PIC microcontrollers, are energy-efficient and sometimes lack complex connectivity options. While these lower-bit systems remain relevant, there is a growing demand for 32-bit devices, with vendors and ARM licensees expanding their product lines to include more powerful microcontrollers.
  * The focus then shifts to higher-performance embedded microprocessors that typically use 32-bit architectures and support sophisticated connectivity and graphics. These systems generally run on a **real-time operating system (RTOS)** or a **full-featured OS** like Linux, which are essential for scaling software with increasing system demands.
  * Embedded microprocessors, distinct from microcontrollers, are used in various applications ranging from supervisory control to handling complete application workloads. Their performance is influenced by **clock speeds**, which vary from the low hundreds of MHz to over 1GHz, and by architectural features that enhance performance, such as caches, instruction-level parallelism, and multi-threading capabilities.
* **Integration Level**: the level of integration for each of the devices that makes up the embedded platform.
  * *System on Chip (SOC)* is often used to describe highly integrated processors. 
* Power Consumption
* Form Factor
* Expansion: software capabilities
* Application-Specific Hardware
* Reliability/Availability
* User Interfaces
* Connectivity
* Security

---
# Attributes of Embedded Systems [^2]
## Application Specific


## Digital Signal Processing in Embedded Systems

## Reactivity in Embedded Systems

##  Real-Time Applications of Embedded Systems


---
# Example of Microprocessors Program 
```c
#include <avr/io.h>

int main(void) {
    DDRB |= (1 << PB0); // Set pin PB0 as an output

    while (1) { // Infinite loop
        PORTB ^= (1 << PB0); // Toggle the state of PB0
        _delay_ms(500); // Wait for 500 milliseconds
    }
}
```
* In this example, an LED connected to pin PB0 of an AVR microcontroller is toggled on and off every 500 milliseconds, creating a blinking effect. The infinite `while (1)` loop ensures that this behavior continues indefinitely.

**Typical embedded computing:**
```c
repeat {
	read the sensors; 
	compute something; 
	apply computation output to actuators; 
} until forever;
```
---
## Real Example in Arduino
In the following code, we used the board `APDS-9960` to implement:
* When up gesture, then turn on the LED
* When down gesture, then turn off the LED
* When left or right gesture, then change the color in sequence (red -> green -> blue -> yellow)

```c++
#include <Arduino_APDS9960.h>

// Initilizations
const int redPin = 22;
const int greenPin = 24;
const int bluePin = 23;
bool brightness = true;
int led_index = 0;

// Color definitions
int colors[4][3] = {
  {255, 0, 0},    // Red
  {0, 255, 0},    // Green
  {0, 0, 255},    // Blue
  {255, 255, 0}   // Yellow
};

void setup() {
  Serial.begin(9600);
  while (!Serial);

  pinMode(redPin, OUTPUT); 
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);
  setColor(255,0,0); // default
  if (!APDS.begin()) {
    Serial.println("Error initializing APDS-9960 sensor!");
  }

  Serial.println("--------------------------------");
  Serial.println("       Detecting gestures       ");
  Serial.println("--------------------------------");
}

void loop() {
  if (APDS.gestureAvailable()) {
    // a gesture was detected, read and print to Serial Monitor
    int gesture = APDS.readGesture();

    switch (gesture) {
      case GESTURE_UP:
        Serial.println("Detected UP gesture");
        brightness = true;
        ledSwitcher(colors[led_index][0], colors[led_index][1], colors[led_index][2]);
        break;

      case GESTURE_DOWN:
        Serial.println("Detected DOWN gesture");
        brightness = false;
        ledSwitcher(colors[led_index][0], colors[led_index][1], colors[led_index][2]);
        break;

      case GESTURE_LEFT:
        Serial.println("Detected LEFT gesture");
        led_index = (led_index + 1) % 4;
        ledSwitcher(colors[led_index][0], colors[led_index][1], colors[led_index][2]);
        break;

      case GESTURE_RIGHT:
        Serial.println("Detected RIGHT gesture");
        if (led_index == 0) {
          led_index = 3;
        } else {
          led_index--; 
        }
        ledSwitcher(colors[led_index][0], colors[led_index][1], colors[led_index][2]);
        break;
      default:
        // ignore
        break;
    }
  }
}

void setColor(int red, int green, int blue){
  red = 255 - red;
  green = 255 - green;
  blue = 255 - blue;
  digitalWrite(redPin, red);
  digitalWrite(greenPin, green);
  analogWrite(bluePin, blue);
}

void ledSwitcher(int red, int green, int blue) {
  if (brightness) {
    setColor(red, green, blue);
  } else {
    digitalWrite(redPin, HIGH);
    digitalWrite(greenPin, HIGH);
    digitalWrite(bluePin, HIGH);
  }
}
```

Add .gif latter.


[^1]: Barry, Peter, and Patrick Crowley. *Modern Embedded Computing: Designing Connected, Pervasive, Media-Rich Systems*. Morgan Kaufmann, 2012.

[^2]: Gupta, Rajesh K. "Embedded Sensing & IOT Data Models and Methods." DSC Spring 2024, University of California, San Diego.
