#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#define Time_film 1    //时间片

int count = 0;    //统计进程完成个数
int N;//进程个数

void print(struct PCB *head);

struct PCB{
  int process_name;     //进程名
  int priority_number;  //优先数
  int arrive_time;      //到达时间,为进程的创建时间
  int need_time;        //需要运行的时间
  int used_time;        //已用CPU的时间,初始值为0
  int process_state;    //进程状态,1表示运行,0表示完成,-1表示就绪,初始值为-1
  struct PCB *cre;      //前驱指针域
  struct PCB *next;     //后驱指针域
};

int Process_scheduling(struct PCB *head,struct PCB *h){
    //****************************
  struct PCB *Move=head->next;
  struct PCB *Max_Pri=head->next;//最大值指针
  struct PCB *Tail;    //尾指针
  struct PCB *hT;
    
  //****************************//寻找最高优先级进程
  while(Move!=NULL){
      if(Max_Pri->priority_number < Move->priority_number){
          Max_Pri = Move;
      }
      Move = Move->next;
  }
  
  //****************************改变选中进程的属性
  Max_Pri->used_time += Time_film;  //已用时间+1
  Max_Pri->priority_number -= 12;   //优先级-12
  if(Max_Pri->used_time == Max_Pri->need_time){
      Max_Pri->process_state = 0;   //设置为完成状态
      count++;
  }
  else{
      Max_Pri->process_state = 1;   //设置为运行状态
  }
  printf("进程 %d 被调度: \n",Max_Pri->process_name);
    
  //*****************************输出此时的两个队列
  printf("就绪态队列：\n");
  print(head);    //输出就绪队列
  printf("完成态队列：\n");
  print(h);        //输出已完成队列
  printf("\n");
  
  //****************************//将最高优先级进程提出来
  Move = Max_Pri->cre;
  Move->next = Max_Pri->next;
  if(Move->next != NULL){//下一个不为空，让其也指向前一个
      Move = Max_Pri->next;
      Move->cre = Max_Pri->cre;
  }
    
  //*****************************把拿出来的相应的进程放入队列
  if(Max_Pri->process_state !=0){
      //printf("进程 %d 未完成，进入就绪队列 \n",Max_Pri->process_name);
      Move = head;
      while( Move->next!=NULL ){    //当被调出进程未完成时将其插入就绪队列尾部
          Move = Move->next;
      }
      Tail = Move;
      Max_Pri->cre = Tail;
      Max_Pri->next = NULL;
      Tail->next = Max_Pri;
  } else {
      //printf("进程 %d 已完成，进入已完成队列 \n\n",Max_Pri->process_name);
      Move =h;
      while(Move->next!=NULL){
          Move = Move->next;
      }
      hT = Move;
      Max_Pri->cre = hT;
      Max_Pri->next = NULL;
      hT->next = Max_Pri;
  }
    
 //********************************再把状态改回去
  if(Max_Pri->process_state !=0){
      Max_Pri->process_state = -1;
  }else{
      Max_Pri->process_state = 0;
  }
   
  if(count == N){    //所有进程执行完毕
      printf("就绪队列：\n");
      print(head);    //输出就绪队列
      printf("已完成队列：\n");
      print(h);    //输出已完成队列
      printf("\n");
      printf("所有进程执行完毕！");
      return 1;
  }
    return 0;
    
}

void print(struct PCB *head){    //输出队列函数
  if(head->next == NULL){
      printf("队列为空\n");
      return;
  }
  printf("进程号\t已占用cpu时间\t所需时间\t优先级\t状态\n");
  struct PCB *fry = head->next;
  while(fry != NULL){
      printf("%d     \t%d       \t%d     \t%d  \t",fry->process_name,fry->used_time,fry->need_time-fry->used_time,fry->priority_number);
      if(fry->process_state == -1){
          printf("%s","W");
      }else if(fry->process_state == 1){
          printf("%s","R");
      }else{
          printf("%s","F");
      }
      printf("\n");
      fry = fry->next;
  }
  printf("\n");
}

int main(){
  int flag=0;
  printf("---------优先级调度---------\n");
  printf("输入进程数：\n");
  scanf("%d",&N);

  struct PCB *head;    //头指针
  struct PCB Pro[N+1]; //创建 N+1 个进程，即就绪态队列
  struct PCB *h;
  struct PCB q[N+1];    //创建完成态队列
  h = &q[0];
  head = &Pro[0];
  printf("请输入%d个进程号以及运行时间：\n",N);
  for(int j=1;j<=N;j++){
      scanf("%d %d",&Pro[j].process_name,&Pro[j].need_time);
  }
    
  //****************************
  //设置进程参数
  Pro[0].process_name = 0;
  Pro[0].cre = NULL;
  Pro[0].next = &Pro[1];
  Pro[0].priority_number = 0;
  int i=0;
  for(i=1;i<=N;i++){
      Pro[i].priority_number = 100-Pro[i].need_time;
      Pro[i].arrive_time = 0;
      Pro[i].used_time = 0;
      Pro[i].process_state = -1;
  }
  for(i=1;i<=N;i++){    //形成双向队列
      if( i == N ){
          Pro[i].cre = &Pro[i-1];
          Pro[i].next = NULL;
          break;
      }
      Pro[i].cre = &Pro[i-1];
      Pro[i].next = &Pro[i+1];
  }
  //****************************
  
  printf("进程初始状态: \n");
  print(head);                   //输出初始队列状态
    
  while(getchar()!=EOF && flag==0){
    flag = Process_scheduling(head,h);    //调用进程调度函数(最高优先级)
  }
  return 0;
}
