import serial # so python can communicate over usb serial ports
import serial.tools.list_ports #scans + lists all connected ports
from camera import capture_photo #imports the capture_photo func

def find_arduino_port():
    