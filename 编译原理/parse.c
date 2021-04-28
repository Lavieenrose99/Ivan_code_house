/*
 * @Author: your name
 * @Date: 2021-04-28 08:27:50
 * @LastEditTime: 2021-04-28 09:00:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/编译原理/parse.c
 */
#include <stdio.h>
#include <string.h>

char prog[80], token[6];
char ch;
int syn, p, m, n, sum;
char *rwtab[6] = {"begin", "if", "then", "while", "do", "end"};

/*词法扫描程序：*/
void scaner()
{
    for (n = 0; n < 8; n++)
        token[n] = NULL;
    m = 0;
    ch = prog[p++];
    while (ch == ' ')
        ch = prog[p++];
    if ((ch <= 'z' && ch >= 'a') || (ch <= 'Z' && ch >= 'A'))
    {
        while ((ch <= 'z' && ch >= 'a') || (ch <= 'Z' && ch >= 'A') || (ch <= '9' && ch >= '0'))
        {
            token[m++] = ch;
            ch = prog[p++];
        }
        token[m++] = '\0';
        ch = prog[--p];
        syn = 10;
        for (n = 0; n < 6; n++)
            if (strcmp(token, rwtab[n]) == 0)
            {
                syn = n + 1;
                break;
            }
    }
    else if ((ch <= '9' && ch >= '0'))
    {
        sum = 0;
        while ((ch <= '9' && ch >= '0'))
        {
            sum = sum * 10 + ch - '0';
            ch = prog[p++];
        }
        ch = prog[--p];
        syn = 11;
    }
    else
        switch (ch)
        {
        case '<':
            m = 0;
            token[m++] = ch;
            ch = prog[p++];
            if (ch == '>')
            {
                syn = 21;
                token[m++] = ch;
            }
            else if (ch == '=')
            {
                syn = 22;
                token[m++] = ch;
            }
            else
            {
                syn = 20;
                ch = prog[--p];
            }
            break;
        case '>':
            token[m++] = ch;
            ch = prog[p++];
            if (ch == '=')
            {
                syn = 24;
                token[m++] = ch;
            }
            else
            {
                syn = 23;
                ch = prog[--p];
            }
            break;
        case ':':
            token[m++] = ch;
            ch = prog[p++];
            if (ch == '=')
            {
                syn = 18;
                token[m++] = ch;
            }
            else
            {
                syn = 17;
                ch = prog[--p];
            }
            break;
        case '+':
            syn = 13;
            token[0] = ch;
            break;
        case '-':
            syn = 14;
            token[0] = ch;
            break;
        case '*':
            syn = 15;
            token[0] = ch;
            break;
        case '/':
            syn = 16;
            token[0] = ch;
            break;
        case ':=':
            syn = 18;
            token[0] = ch;
            break;
        case '<>':
            syn = 21;
            token[0] = ch;
            break;
        case '<=':
            syn = 22;
            token[0] = ch;
            break;
        case '>=':
            syn = 24;
            token[0] = ch;
            break;
        case '=':
            syn = 25;
            token[0] = ch;
            break;
        case ';':
            syn = 26;
            token[0] = ch;
            break;
        case '(':
            syn = 27;
            token[0] = ch;
            break;
        case ')':
            syn = 28;
            token[0] = ch;
            break;
        case '#':
            syn = 0;
            token[0] = ch;
            break;
        default:
            syn = -1;
        }
}

int main()                                                           
{
    p = 0;
    printf("\nplease intput string:");
    do
    {
        ch = getc(stdin);
        prog[p++] = ch;
    } while (ch != '#');
    p = 0;
    do
    {
        scaner();
        switch (syn)
        {
        case 11:
            printf("(%d,%d)", syn, sum);
            break;
        case -1:
            printf("input error\n");
            break;
        default:
            printf("(%d,%s)", syn, token);
        }
    } while (syn != 0);
    getc(stdin);
}
 