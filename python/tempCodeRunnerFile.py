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