/*
 * @Author: your name
 * @Date: 2020-12-25 01:14:20
 * @LastEditTime: 2020-12-27 17:16:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/algorithms/fifo.cpp
 */
#include <iostream>
using namespace std;
#define AP 3
int total_instruction = 0;
int diseffect = 0;
int page[AP];
int pagecontrol[100];

void init(){
    for(int i = 0; i < AP; i++){
        page[i] = -1;
    }
    cout <<"输入要访问页面顺序: "<<endl;
    while (cin.peek()!='\n')
    {
        cin >>pagecontrol[total_instruction];
        total_instruction += 1;
    }
     
}
void show_page(int t){
    cout << t << ": ";
    for(int i = 0; i < AP; i++){
        cout <<page[i] << " ";

    }
    cout << endl;
}
void FIFO(){
    for(int i = 0; i < total_instruction; i++){
        int flag = 0;
        for(int j = 0; j < AP; j++){
            if(page[j] == pagecontrol[i]){
                show_page(i);
                flag = 1;
                break;
            }
        }
        if (flag == 0){
            diseffect++;
            for(int k = 0; k < AP - 1;k++){
                page[k] = page[k + 1];
            }
            page[AP - 1] = pagecontrol[i];
            show_page(i);
        }
    }
}

int main(){
    init();
    FIFO();
    cout << "总缺页次数: "<< diseffect << endl;
    cout << "缺页率: "<< diseffect*1.0 / total_instruction * 100 <<"%"<<endl;
    
}

