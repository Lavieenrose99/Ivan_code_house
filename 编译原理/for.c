/*
 * @Author: your name
 * @Date: 2021-03-12 10:30:14
 * @LastEditTime: 2021-03-12 11:16:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/编译原理/for.c
 */

#include <stdio.h>

int  main(){
    int arr[8];
    int save,max,index;
    for(int i = 0; i < 10000;i++){
         printf("第%d位村民请投票: ",i + 1);
         scanf("%d",&save);
         if(save == -1){
             break;
         }
         if(save > 8){
             printf("投错了请投(1-8)");
         }
         arr[--save]++;
    }
    for(int j = 0; j < 8; j++){
        if(max < arr[j]){
            max = arr[j];
            index = j;
        }
    }
    printf("当选者是第%d位候选人票数是%d",++index,max);
}