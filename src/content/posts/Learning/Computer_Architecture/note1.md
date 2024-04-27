---
title: Introduction of Computer Architecture
published: 2024-04-26
description: Learning Note of Computer Architecture
tags: [Learning, UCSD]
category: Computer Architecture
draft: true
---


<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #FFFFFF; background-color: #E7625F; border-color: #C85250;">
    <a href="https://hao-ai-lab.github.io/dsc204a-w24/" style="text-decoration: none; color: #FFFFFF;">
        💡 The outline of this note references Professor Zhang's DSC 204A course at UCSD in Winter 2024. More information about the course on this website.
    </a>
</div>


**What is a computer?**
* A programmable electronic device that can store, retrieve, and process digital data [^1].

## Basics of Computer Organization
### Hardware
<p align="center" width="100%">
    <img width="60%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Computer_architecture_block_diagram.png/962px-Computer_architecture_block_diagram.png">
</p>

* **Processor** - To process data
  * Example: CPU, GPU, etc.
    * **CPU (Central Processing Unit)** - Acts as the "brain" of the computer. It performs most of the processing inside a computer by carrying out the instructions of a computer program. It executes basic arithmetical, logical, control, and input/output (I/O) operations specified by the instructions.
    * **GPU (Graphics Processing Unit)** - Specialized processor primarily designed to accelerate graphics rendering. GPUs can process many pieces of data simultaneously, making them useful not only in video rendering but also in scientific and machine learning applications.
  * Hardware to orchestrate and execute instructions to manipulate data as specified by a program.
* **Main Memory (RAM - Random Access Memory)**
  * Hardware to store data and programs that allows very fast
location/retrieval; byte-level addressing scheme.
  * Volatile memory used to store data and machine code currently being used. RAM is much faster to read from and write to than other kinds of storage, including SSDs, HDDs, and optical disks. However, data in RAM is lost when the machine is turned off (volatile).
* **Disk (aka secondary/persistent storage)**
  * Similar to memory but persistent, slower, and higher capacity / cost ratio; various addressing schemes.
  * Includes both Hard Disk Drives (HDDs) and Solid State Drives (SSDs). HDDs store data on a spinning disk read by a mechanical arm, while SSDs store data on instantly accessible memory chips.
* **Network interface controller (NIC)**
  * An internal hardware component (either integrated onto the motherboard or installed in an expansion slot) that allows a computer to connect to a network using a network cable or wirelessly.
  * Functions: Manages the data exchange between a computer and the network, converting digital data into electronic signals and vice versa. It can support Ethernet, Wi-Fi, and Bluetooth standards.
* **Motherboard**
  * The main circuit board that connects all the components of a computer, including the CPU, memory, disk drives, and expansion cards. It provides the bus systems and connectivity that allow the various components to communicate with each other.
* **Power Supply Unit (PSU)**
  * Converts the AC power from the outlet into the DC power used by the computer's internal components. It also regulates the voltage to prevent damage to the computer's parts from voltage fluctuations.
* **Sound Card**
  * An expansion card or integrated circuit that provides the computer with the ability to produce sound that can be heard by the user via speakers or headphones. It's also used for recording audio with microphones.
* **Peripheral Devices**
  * These include input devices like keyboards, mice, and webcams; output devices like monitors and printers; and storage devices like external hard drives and USB flash drives.
* **Cooling Systems**
  * These include fans, heat sinks, and liquid cooling systems. They are necessary to dissipate the heat produced by the CPU, GPU, and other components to prevent overheating, which can lead to reduced performance or failure.


### Software


[^1]: By Peter Naur.


