/*
 * @Author: your name
 * @Date: 2021-04-09 08:09:53
 * @LastEditTime: 2021-04-09 08:23:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/编译原理/struct.c
 */
#include <stdio.h>
#include <string.h>
struct{
    char name[20];
    int count;
} learder[3] = { "l1" ,20,"cjz",30,"kk",40};

main(){
    char name[20];
    int i,j,n;
    printf("input n");
    scanf("%d",&n);
    for(i = 0; i < n;i++){
        scanf("%s",name);
        if(strcmp(name.leader[j].name)==0){
        learder[j].count = learder[j].count + 1;
    }
    }
    for(i = 0;i < 3;i++){
    printf("%5s:%d\n",learder[i].name,learder[i].count);
}
}
