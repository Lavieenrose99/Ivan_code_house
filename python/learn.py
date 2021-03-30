'''
Author: your name
Date: 2021-03-06 21:54:23
LastEditTime: 2021-03-23 17:12:13
LastEditors: Please set LastEditors
Description: In User Settings Edit
FilePath: /ivan个人练习代码/python/learn.py
'''


# weight,height =eval(input())
# bmi = weight/pow(height,2)
# if bmi<18:
#     globe= '超轻'
# elif bmi<25:
#     globe= '标准'
# elif bmi<27:
#     globe= '超重'
# elif bmi>27:
#     globe = '肥胖'
# print('{}'.format(globe))

# num = input()
# numA = int(num)
# sumAmount = 0
# if numA < 100000 :
#   sumAmount = numA * 0.1
#   print("%.2f" %sumAmount)
# if 100000 < numA <= 200000 :
#   sumAmount = 10000 + (numA - 100000) * 0.075 
#   print("%.2f" %sumAmount)
# if 200000 < numA <= 400000 :
#   sumAmount = 17500 + (numA - 200000) * 0.05 
#   print("%.2f" %sumAmount)
# if 400000 < numA <= 600000 :
#   sumAmount = 27500 + (numA - 400000) * 0.03 
#   print("%.2f" %sumAmount)
# if 600000 < numA <= 1000000 :
#   sumAmount = 33500 + (numA - 600000) * 0.015 
#   print("%.2f" %sumAmount)
# if numA > 1000000 :
#   sumAmount = 93500 + (numA - 1000000) * 0.01 
#   print("%.2f" %sumAmount)



# def fib_loop(n):
#     a,b=0,1
#     for i in range(n+1):
#         a,b=b,a+b
#     return a

# print(0,end=',')
# for i in range(16):
#     print(fib_loop(i),end=',')

# aa = [1,2,3,4,5,6]
# a = aa.index(max(aa))
# print(a)

x=input()
xlist=x.split(",")
xlist = [int(xlist[i]) for i in range(len(xlist))]
max = 0
mark = []
for i in range(len(xlist)):
   if max < xlist[i] :
      mark.clear()
      mark.append(i)
      max = xlist[i] 
   if max == xlist[i] :
      mark.append(i)
      max = xlist[i]
lst2 = list(set(mark))
for i in lst2 :
 print(i)
