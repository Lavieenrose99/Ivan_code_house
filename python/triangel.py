'''
Author: your name
Date: 2021-03-31 18:42:36
LastEditTime: 2021-03-31 19:15:43
LastEditors: Please set LastEditors
Description: In User Settings Edit
FilePath: /ivan个人练习代码/python/triangel.py
'''









# # 三边a b c三个参数
# def test(a, b, c):
#     if a+b > c and a+c > b and b+c > a: 
#         s = (a + b + c) / 2      
#         areaa = (s * (s - a) * (s - b) * (s - c)) ** 0.5                             
#         
#     else:
#         print("三边不能构成三角形！！")
# while True:
#     if __name__ == '__main__':
#        a = float(input('输入三角形第一边长: '))
#        b = float(input('输入三角形第二边长: '))
#        c = float(input('输入三角形第三边长: '))
#         print(test(x, y, z))



#自定义函数求三角形面积
#已知三边，求三角形面积，运用海伦公式
import math
from math import  pow


def Area(a):
     sum = 0
     while a > 0:
       sum = int(a % 10) + sum 
       a = a / 10
     return sum

side1=input()
side1=int(side1)
sum = Area(side1)
print(sum)

