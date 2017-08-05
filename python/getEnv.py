#!/usr/bin/python
from subprocess import PIPE, Popen
from envirophat import light, weather, leds

import time
import datetime
import socket

# returns pi temp sensor output
def get_cpu_temperature():
  process = Popen(['vcgencmd','measure_temp'], stdout=PIPE)
  output, _error = process.communicate()
  return float(output[output.index('=') + 1:output.rindex("'")])

def main():
  leds.on()

  cputemp = get_cpu_temperature()
  envtemp = weather.temperature()
  caltemp = envtemp - ((cputemp - envtemp)/1.3)

  envdate = datetime.datetime.utcnow().strftime('%c')

  json = {
    "hostname": socket.gethostname(),
    "envdate": envdate,
    "light": light.light(),
    "temp": round((caltemp * 1.8 + 32),2),
    "pressure": round(weather.pressure(),2)}

  leds.off()
  print(json)

if __name__ == '__main__':
  main()

