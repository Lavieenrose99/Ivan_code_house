'''
Author: your name
Date: 2021-04-10 23:55:54
LastEditTime: 2021-04-10 23:56:56
LastEditors: Please set LastEditors
Description: In User Settings Edit
FilePath: /ivan个人练习代码/python/liner.py
'''


import numpy as np

x = np.array([56, 72, 69, 88, 102, 86, 76, 79, 94, 74])
y = np.array([92, 102, 86, 110, 130, 99, 96, 102, 105, 92])

from matplotlib import pyplot as plt
matplotlib inline

plt.scatter(x, y)
plt.xlabel("Area")
plt.ylabel("Price")
