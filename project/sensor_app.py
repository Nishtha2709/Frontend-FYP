from flask import Flask, render_template, request
from flask_socketio import SocketIO
from random import random
from threading import Lock
#from datetime import datetime

import pandas as pd

from transformer_test import efficiency, ratio_test, winding_resistance



"""
Background Thread
"""
thread = None
thread_lock = Lock()

app = Flask(__name__)
app.config['SECRET_KEY'] = 'donsky!'
socketio = SocketIO(app, cors_allowed_origins='*')

iteration = 0
data = pd.read_csv("transformer_dataset.csv")


"""
Serve root index file
"""
@app.route('/')
def index():
    return render_template('dashboard.html')

@app.route('/tests')
def tests():
    return render_template('tests.html')



#------------------------------------Socket Connection------------------------------------#

"""
Generate random sequence of dummy sensor values and send it to our clients
"""
def background_thread():
    print("Generating random sensor values")

    global iteration
    while True:
        
        primary_vl_value = ( float(data["Primary_VL1"][iteration]) + float(data["Primary_VL2"][iteration]) + float(data["Primary_VL3"][iteration]) ) /3
        secondary_vl_value = ( float(data["Secondary_VL1"][iteration]) + float(data["Secondary_VL2"][iteration]) + float(data["Secondary_VL3"][iteration]) ) /3
        
        primary_curr_value = ( float(data["Primary_IL1"][iteration]) + float(data["Primary_IL2"][iteration]) + float(data["Primary_IL3"][iteration]) ) /3
        secondary_curr_value = ( float(data["Secondary_IL1"][iteration]) + float(data["Secondary_IL2"][iteration]) + float(data["Secondary_IL3"][iteration]) ) /3

        # socket data emission for dynamic graphs
        socketio.emit('updateSensorData', {'primary_vl_value':primary_vl_value, 
                                           'secondary_vl_value':secondary_vl_value,
                                           'primary_curr_value':primary_curr_value,
                                           'secondary_curr_value':secondary_curr_value,
                                           'date':data["DeviceTimeStamp"][iteration]})
        
        ratio_test_value = ratio_test(primary_curr_value, secondary_curr_value)
        efficiency_value = efficiency(iteration)
        winding_resistance_diff = winding_resistance(iteration)
        oil_temperature = data["Oil_Temperature"][iteration]

        # socket data emission for transformer tests
        socketio.emit('transformerTestData', {'ratio_test':ratio_test_value,
                                              'efficiency':efficiency_value,
                                              'winding_resistance_diff':winding_resistance_diff,
                                              'oil_temperature':oil_temperature})
        
        iteration+=1
        socketio.sleep(1)

"""
Decorator for connect
"""
@socketio.on('connect')
def connect():
    global thread
    print('Client connected')

    global thread
    with thread_lock:
        if thread is None:
            thread = socketio.start_background_task(background_thread)

"""
Decorator for disconnect
"""
@socketio.on('disconnect')
def disconnect():
    print('Client disconnected',  request.sid)

#------------------------------------Socket Close------------------------------------#



if __name__ == '__main__':
    socketio.run(app, debug=True)