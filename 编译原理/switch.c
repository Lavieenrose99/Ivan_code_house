/*
 * @Author: your name
 * @Date: 2021-03-12 11:02:06
 * @LastEditTime: 2021-03-12 11:14:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/编译原理/switch.c
 */

#include <stdio.h>

int main(){
    int arr[8];
    int which,save,max,index;
    while(1){
         printf("请输入你要选择的候选人编号");
         scanf("%d",&which);
         if(which==-1)
         {
             break;
         }
        switch (which + 1)
        {
        case 1:
            arr[which]++;
            save++;
            break;
        case 2:
            arr[which]++;
            save++;
            break;
        case 3:
            arr[which]++;
            save++;
            break;
        case 4:
            arr[which]++;
            save++;
            break;
        case 5:
            arr[which]++;
            save++;
            break;
        case 6:
            arr[which]++;
            save++;
            break;
        case 7:
            arr[which]++;
            save++;
            break;
        case 8:
            arr[which]++;
            save++;
            break;
        default:
            break;
        }
    }
       for(int j = 0; j < save + 1; j++){
        if(max < arr[j]){
            max = arr[j];
            index = j;
        }
    }
    printf("当选者是第%d位候选人票数是%d",index,max);
}