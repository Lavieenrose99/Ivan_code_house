/*
 * @Author: your name
 * @Date: 2021-03-26 08:28:20
 * @LastEditTime: 2021-03-26 08:41:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/编译原理/guess.c
 */
#include <stdio.h>

int main(){
    int value = 0;
    int guessO = 0;
    printf("请预置商品价格");
    scanf("%d",&value);
    for(int i = 0; i < 6;i++){
        printf("请输入猜测价格");
        scanf("%d",&guessO);
        if(guessO == value && i % 2 == 0){
            printf("第一个学生获得商品");
            break;
        }else if(guessO == value && i % 2 != 0){
            printf("第二个学生获得商品");
             break;
        }else if(guessO < value){
            printf("猜错了,低了\n");
        }else
        {
             printf("猜错了,高了\n");
        }
        
    }
    return 0;
}