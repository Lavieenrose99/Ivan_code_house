/*
 * @Author: your name
 * @Date: 2021-04-09 09:21:39
 * @LastEditTime: 2021-04-09 09:23:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/编译原理/point.c
 */

#include<stdio.h>
int main()
{int *p,i,a[10];
 p=a;
 for(i=0;i<10;i++)
 scanf("%d",p++);
 printf("/n");
 p=a;
 for(i=0;i<10;i++,p++)
 printf("%d",*p);
 printf("/n");
 int q;
 scanf("%d",&q);
}