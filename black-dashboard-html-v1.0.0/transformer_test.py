import pandas as pd
data = pd.read_csv("transformer_dataset.csv")

#function to perform ratio test : I2 / I1 = N1 / N2
def ratio_test(I1, I2):
    req_ratio = 25
    curr_ratio = I2 / I1
    err = abs(req_ratio - curr_ratio) / req_ratio
    per_err = err * 100
    return per_err

# function to calculate the efficiency of the transformer
def efficiency(iteration):
    power = 1000 * 1000
    copper_loss = data["Total_copper_loss"][iteration]
    iron_loss = data["Total_iron_loss"][iteration]

    total_loss = copper_loss + iron_loss
    output_power = power * 0.8
    efficiency = output_power / (output_power + total_loss)
    return efficiency

def winding_resistance(iteration):
    high_voltage_winding_resistance = ( data["High_Voltage_Winding_1"][iteration] + data["High_Voltage_Winding_2"][iteration] + 
                                       data["High_Voltage_Winding_3"][iteration] ) / 3
    
    low_voltage_winding_resistance = ( data["Low_Voltage_Winding_1"][iteration] + data["Low_Voltage_Winding_2"][iteration] + 
                                      data["Low_Voltage_Winding_3"][iteration]) / 3
    
    winding_resistence_diff = abs(high_voltage_winding_resistance - low_voltage_winding_resistance)
    return winding_resistence_diff
