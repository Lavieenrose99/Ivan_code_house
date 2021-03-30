/*
 * @Author: your name
 * @Date: 2021-03-26 08:14:32
 * @LastEditTime: 2021-03-26 08:35:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/编译原理/bank.c
 */
#include <stdio.h>

int main(){
    int code = 123456;
    int inputCode = 0;
    int times = 0;
    printf("请修改账户密码");
    scanf("%d",&code);
    printf("请输入密码");
    for(int i = 0;i <= 3;i++){
    scanf("%d",&inputCode);
    if(code == inputCode){
        printf("密码正确");
        times++;
        return 0;
    }else if(code != inputCode && times <= 3){
        printf("请重新输入密码");
    }else if(code != inputCode && times > 3){
        printf("锁了");
    }
    }
    return 0;
}