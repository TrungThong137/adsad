#include <bits/stdc++.h>
using namespace std;
typedef struct node{
	int data;
	node *next;
}List;

List *taods(List *head, int n){
	node *q, *a;
	int x;
	for(int i=1; i<=n; i++){
		cin>>x;
		a=new node;
		a->data=x;
		a->next=NULL;
		if(head==NULL) head=a;
		else{
			q=head;
			while(q->next!=NULL){
				q=q->next;
			}
			q->next=a;
		}
	}
	return head;
}
void inds(node *head){
	node *a=head;
	while(a!=NULL){
		cout<<a->data<<" ";
		a=a->next;
	}
	cout<<endl;
}
List *chen(List *head, int x){
	node *q=head, *p=new node;
	p->data=x;
	p->next=NULL;
	if(q!=NULL){
		while(q->next!=NULL){
			q=q->next;
		}
		q->next=p;	
	}

	return head;
}
void sum(List *head){
	long long t=0;
	while(head!=NULL){
		t+=head->data;
		head=head->next;
	}
	cout<<t<<endl;
}
List *xoa(List *& head, int m){
	node *p=head , *q;
	int dem = 1;
	while (p != NULL && dem < m) {
		q = p;
		p =  p->next;
		dem++;
	}
	if(p==head){
		head=head->next;
		delete p;
	}else if(p!=NULL){
		q->next =p->next;
		delete p;
	}	
	return head;
}
int main(){
	List *head;
	head=NULL;
	int n, x;
	cin>>n;
	head=taods(head,n);
	string s;
	while(1){
		fflush(stdin);
		cin>>s;
		if(s=="i"){
			cin>>x;
			chen(head,x);
		}
		if(s=="s") sum(head);
		if(s=="d"){
			cin>>x;
			xoa(head,x);
		};
		if(s=="p") inds(head);
		if(s=="0") break;
	}
}
