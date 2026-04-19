import serial # so python can communicate over usb serial ports
import serial.tools.list_ports #scans + lists all connected ports
from camera import capture_photo #imports the capture_photo func

def find_arduino_port():
    ports = serial.tools.list_ports.comports()

    for port in ports: # looks for the buzzwords in port description
        if 'Arduino' in port.description or 'CH340' in port.description or 'USB' in port.description:
            return port.device
        return None  # nothing is found

def listen():
    # first, find which port the arduinos plugged into
    port = find_arduino_port()
    print(f"Going to connect to the Arduino on {port}")

    # open a connection the arduino (9600 baud), it must match the arduino 
    ser = serial.Serial(port, 9600, timeout=1)

    print("Listening for motion: ")
    