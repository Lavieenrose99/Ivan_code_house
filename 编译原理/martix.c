/*
 * @Author: your name
 * @Date: 2021-03-26 09:25:52
 * @LastEditTime: 2021-03-26 10:26:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/编译原理/martix.c
 */
#include <stdio.h>

int main(){
    int arr1[][];
    int arr2[][];
    int col,row;
    printf("请输入数组几列几行");
    scanf("%d %d",&col,&row);
    for(int i = 0; i < col; i++){
        for(int j = 0; j < row; j++){
           scanf("%d",arr1[i][j]);
        }
    }
    for(int i = 0; i < col; i++){
        for(int j = 0; j < row; j++){
            int temp = arr1[i][j];
            arr2[j][i] = temp;
        }
    }
     for(int i = 0; i < col; i++){
        for(int j = 0; j < row; j++){
           printf("%d",arr1[i][j])
        }
    }
    for(int i = 0; i < col; i++){
        for(int j = 0; j < row; j++){
           printf("%d",arr2[i][j])
        }
    }
    
}