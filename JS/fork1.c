    #include <stdio.h>    
    #include <stdlib.h>    
    #include <string.h>    
    typedef struct node    
    {    
      char name[20];    /*进程的名字*/    
      int prio;     /*进程的优先级*/    
      int round;     /*分配CPU的时间片*/    
      int cputime;    /*CPU执行时间*/    
      int needtime;    /*进程执行所需要的时间*/    
      char state;     /*进程的状态，W--就绪态，R--执行态，F--完成态*/    
      int count;     /*记录执行的次数*/    
      struct node *next;   /*链表指针*/    
    }PCB;    
    PCB *ready=NULL,*run=NULL,*finish=NULL; /*定义三个队列，就绪队列，执行队列和完成队列*/    
    int num;    
    void GetFirst();    /*从就绪队列取得第一个节点*/    
    void Output();     /*输出队列信息*/    
    void InsertPrio(PCB *in);  /*创建优先级队列，规定优先数越小，优先级越高*/    
    void InsertTime(PCB *in);  /*时间片队列*/    
    void InsertFinish(PCB *in);  /*时间片队列*/    
    void PrioCreate();    /*优先级输入函数*/    
    void TimeCreate();    /*时间片输入函数*/    
    void Priority();    /*按照优先级调度*/    
    void RoundRun();    /*时间片轮转调度*/    
    int main(void)    
    {    
      char chose;    
      printf("请输入要创建的进程数目:\n");    
      scanf("%d",&num);    
      getchar();    
      printf("输入进程的调度方法：(P/R)\n");    
      scanf("%c",&chose);    
      switch(chose)    
      {    
      case 'P':    
      case 'p':    
        PrioCreate();    
        Priority();        
        break;    
      case 'R':    
      case 'r':    
        TimeCreate();    
        RoundRun();    
        break;    
      default:break;    
      }    
      Output();    
      return 0;    
    }    
    void GetFirst()  /*取得第一个就绪队列节点*/    
    {    
      run = ready;    

      if(ready!=NULL)    
      {    
        run ->state = 'R';    
        ready = ready ->next;    
        run ->next = NULL;    
      }    
    }    
    void Output()    /*输出队列信息*/    
    {    
      PCB *p;    
      /*p = ready;*/    
      printf("进程名\t优先级\t时间片\tcpu时间\t需要时间\t进程状态\t计数器\n");    
       p = ready; 
      while(p!=NULL)    
      {    
        printf("%s\t%d\t%d\t%d\t%d\t\t%c\t\t%d\n",p->name,p->prio,p->round,p->cputime,p->needtime,p->state,p->count);    
        p = p->next;    
      }    
      p = finish;    
      while(p!=NULL)    
      {    
        printf("%s\t%d\t%d\t%d\t%d\t\t%c\t\t%d\n",p->name,p->prio,p->round,p->cputime,p->needtime,p->state,p->count);    
        p = p->next;    
      }    
      p = run;    
      while(p!=NULL)    
      {    
        printf("%s\t%d\t%d\t%d\t%d\t\t%c\t\t%d\n",p->name,p->prio,p->round,p->cputime,p->needtime,p->state,p->count);    
        p = p->next;    
      }    
    }    
    void InsertPrio(PCB *in) /*创建优先级队列，规定优先数越小，优先级越低*/    
    {    
      PCB *fst,*nxt;    
      fst = nxt = ready;    

      if(ready == NULL)  /*如果队列为空，则为第一个元素*/    
      {    
        in->next = ready;    
        ready = in;    
      }    
      else     /*查到合适的位置进行插入*/    
      {    
        if(in ->prio > fst ->prio)  /*比第一个还要大(大于等于)，则插入到队头*/    
        {    
          in->next = ready;    
          ready = in;    
        }    
        else    
        {    
          while(fst->next != NULL)  /*移动指针查找第一个别它小的元素的位置进行插入*/    
          {    
            nxt = fst;    
            fst = fst->next;    
          }    

          if(fst ->next == NULL) /*已经搜索到队尾，则其优先级数最小，将其插入到队尾即可*/    
          {    
            in ->next = fst ->next;    
            fst ->next = in;    
          }    
          else     /*插入到队列中*/    
          {    
            nxt = in;    
            in ->next = fst;    
          }    
        }    
      }    
    }    
    void InsertTime(PCB *in)  /*将进程插入到就绪队列尾部*/    
    {    
      PCB *fst;    
      fst = ready;    

      if(ready == NULL)    
      {    
        in->next = ready;    
        ready = in;    
      }    
      else    
      {    
        while(fst->next != NULL)    
        {    
          fst = fst->next;    
        }    
        in ->next = fst ->next;    
        fst ->next = in;    
      }    
    }    
    void InsertFinish(PCB *in)  /*将进程插入到完成队列尾部*/    
    {    
      PCB *fst;    
      fst = finish;    

      if(finish == NULL)    
      {    
        in->next = finish;    
        finish = in;    
      }    
      else    
      {    
        while(fst->next != NULL)    
        {    
          fst = fst->next;    
        }    
        in ->next = fst ->next;    
        fst ->next = in;    
      }    
    }    
    void PrioCreate() /*优先级调度输入函数*/    
    {    
      PCB *tmp;    
      int i;    

      printf("输入进程名字和进程所需时间：\n");    
      for(i = 0;i < num; i++)    
      {    
        if((tmp = (PCB *)malloc(sizeof(PCB)))==NULL)    
        {    
          perror("malloc");    
          exit(1);    
        }    
        scanf("%s",tmp->name);    
        getchar();    /*吸收回车符号*/    
        scanf("%d",&(tmp->needtime));    
        tmp ->cputime = 0;    
        tmp ->state ='W';    
        tmp ->prio = 50 - tmp->needtime;  /*设置其优先级，需要的时间越多，优先级越低*/    
        tmp ->round = 0;    
        tmp ->count = 0;    
        InsertPrio(tmp);      /*按照优先级从高到低，插入到就绪队列*/    
      }    
    }    
    void TimeCreate() /*时间片输入函数*/    
    {    
      PCB *tmp;    
      int i;    

      printf("输入进程名字和进程时间片所需时间：\n");    
      for(i = 0;i < num; i++)    
      {    
        if((tmp = (PCB *)malloc(sizeof(PCB)))==NULL)    
        {    
          perror("malloc");    
          exit(1);    
        }    
        scanf("%s",tmp->name);    
        getchar();    
        scanf("%d",&(tmp->needtime));    
        tmp ->cputime = 0;    
        tmp ->state ='W';    
        tmp ->prio = 0;    
        tmp ->round = 2;  /*假设每个进程所分配的时间片是2*/    
        tmp ->count = 0;    
        InsertTime(tmp);    
      }    
    }    
    void Priority()   /*按照优先级调度，每次执行一个时间片*/    
    {    
      int flag = 1;    

      GetFirst();    
      while(run != NULL)  /*当就绪队列不为空时，则调度进程如执行队列执行*/    
      {    
        Output();  /*输出每次调度过程中各个节点的状态*/    
        while(flag)    
        {    
          run->prio -= 0; /*优先级减去三,若设为0则优先级不变*/    
          run->cputime++; /*CPU时间片加一*/    
          run->needtime--;/*进程执行完成的剩余时间减一*/    
          if(run->needtime == 0)/*如果进程执行完毕，将进程状态置为F，将其插入到完成队列*/    
          {    
            run ->state = 'F';    
            run->count++; /*进程执行的次数加一*/    
            InsertFinish(run);    
            flag = 0;    
          }    
          else   /*将进程状态置为W，入就绪队列*/    
          {    
            run->state = 'W';    
            run->count++; /*进程执行的次数加一*/    
            InsertTime(run);    
            flag = 0;    
          }    
        }    
        flag = 1;    
        GetFirst();    /*继续取就绪队列队头进程进入执行队列*/    
      }    
    }    
    void RoundRun()    /*时间片轮转调度算法*/    
    {    

      int flag = 1;    

      GetFirst();    
      while(run != NULL)    
      {    
        Output();    
        while(flag)    
        {    
          run->count++;    
          run->cputime++;    
          run->needtime--;    
          if(run->needtime == 0) /*进程执行完毕*/    
          {    
            run ->state = 'F';    
            InsertFinish(run);    
            flag = 0;    
          }    
          else if(run->count == run->round)/*时间片用完*/    
          {    
            run->state = 'W';    
            run->count = 0;   /*计数器清零，为下次做准备*/    
            InsertTime(run);    
            flag = 0;    
          }    
        }    
        flag = 1;    
        GetFirst();    
      }    
    }   
