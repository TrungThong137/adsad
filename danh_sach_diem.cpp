#include <bits/stdc++.h>
using namespace std;
struct node{
	int x;
	int y;
	node *next;
};

void add(node *&head, int x, int y){
	node *a=head, *p=new node;
	p->x = x;
	p->y = y;
	p->next = NULL;
	if(a == NULL){
		head = p;
	}
	else{
		while(a->next != NULL){
			a = a->next;
		}
		a->next = p;
	}
}

void lt(node *head){
	node *a=head; int dem=0;
	while(a!=NULL){
		if(a->y==a->x+1){
			cout<<"("<<a->x<<","<<a->y<<")"<<endl;
			dem++;
		}
     	a=a->next;
    }
	if(dem==0) cout<<"None"<<endl;
}
int main(){
	node *head=NULL;
	int n, x, y;
	cin>>n;
	while(n--){
		cin>>x>>y;
		add(head,x,y);
	}
	lt(head);
}
