import numpy as np
import random

from ml_model import get_columns_dropped

def count_mag_plane(W):
  value = 0
  for i in range(len(W)):
    value += np.square(W[i])
  value = np.sqrt(value)
  return value

def margin(W):
  mag = count_mag_plane(W)
  return 1/mag

def count_dist(W, x):
  yp = np.dot(x, W)
  sign = np.sign(yp)
  dist = abs( ( abs(yp) / count_mag_plane(W) ) - random.uniform(0, 0.12) )
  if(sign < 0):
    dist -= random.uniform(0, 0.25)
  
  #print(sign, dist)
  return sign, dist


def pre_process(data):

  data['Fault'] = data['Fault'].apply(lambda x: 1.0 if x > 0 else -1.0)

  data_copy = data.copy()
  columns_dropped = get_columns_dropped()

  # drop unnecessary first column TimeStamp
  data_copy.drop(data.columns[0], axis=1, inplace=True)
  data_copy.drop(columns_dropped[0], axis=1, inplace=True)
  data_copy.drop(columns_dropped[1], axis=1, inplace=True)

  data = data_copy
  return data



def pred(row, W):

  row = pre_process(row)
  tot_margin = margin(W)

  sign, dist = count_dist(W, row)

  per = 0
  if sign < 0:
    if dist > tot_margin:
      per = 0
    else:
      dist = tot_margin - dist
      per = round(( dist / (tot_margin*2) ) * 100)

    if sign > 0:
      if dist > tot_margin:
        per = 100
      else:
        dist = tot_margin + dist
        per = round(( dist / (tot_margin*2) ) * 100)

  return per

    
    

