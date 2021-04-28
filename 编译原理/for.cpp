/*
 * @Author: your name
 * @Date: 2021-03-12 10:30:14
 * @LastEditTime: 2021-04-18 16:18:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/编译原理/for.cpp
 */
#include <stdio.h>
#include <string>
#include <stdlib.h>
#include <iostream>
#include <stack>
using namespace std;
 
int opration(int a, char op, int b);
int compare(char str[]);
 
int main()
{
	char str[100];
	while (1)
	{
		gets(str);
		printf("%d\n", compare(str));
	}
		
	return 0;
}
 
int opration(int a, char op, int b)
{
	switch (op)
	{
	case '+':return a + b; break;
	case '-':return a - b; break;
	case '*':return a*b; break;
	case '/':return a / b; break;
	}
}
int compare(char str[])
{
	stack<int> s;//暂存操作数
	char op;//暂存操作符
	int a, b;
	for (int i = 0; i < strlen(str); i++)
	{
		if (str[i] >= '0'&&str[i] <= '9')
			s.push(str[i] - '0');
		else
		{
			op = str[i];
			b = s.top();
			s.pop();
			a = s.top();
			s.pop();
			s.push(opration(a,op,b));//将当前计算结果入栈
		}
	}
	return s.top();
}