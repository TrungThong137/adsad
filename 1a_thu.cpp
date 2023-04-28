#include<bits/stdc++.h>
using namespace std;
struct node{
	int data;
	node *next;
};
node *taonode(int x){
	node *p=new node;
	p->data=x;
	p->next=NULL;
	return p;
}
void inds(node *head){
	for(node *p=head; p!=NULL; p=p->next){
		cout<<p->data<<" ";
	}
	cout<<endl;
}
node *taods(node *head, int x){
	node *p=taonode(x);
	if(head==NULL){
		head=p;
	}else{
		p->next=head;
		head=p;
	}
	return head;
}
void chenSau(node *head){
	int x, y;
	cout<<"nhap phan tu can chen: ";
	cin>>x;
	node *p=taonode(x);
	cout<<"chen sau phan tu: ";
	cin>>y;
	node *q, *a;
	for(q=head; q!=NULL; q=q->next){
		if(q->data==y){
			break;
		}
	}
	p->next=q->next;
	q->next=p;
	cout<<"danh sach sau chen sau "<<y<<": ";
	inds(head);
}
void ChenTruoc(node *head){
	int x, y;
	cout<<"nhap phan tu can chen: "; cin>>x;
	node *p=taonode(x);
	cout<<"Chen Truoc phan tu: "; cin>>y;
	node *q=head, *a;
	while(q!=NULL){
		if(q->data!=y){
			a=q;
			q=q->next;
		}else break;
	}
	if(q==head){
		p->next=head;
		head=p;
	}else{
		p->next=q;
		a->next=p;
	}
	cout<<"danh sach sau chen truoc "<<y<<": ";
	inds(head);
}
void noi2DS(node *head, node *first){
	if(head==NULL){
		head=first;
	}else if(first!=NULL){
		node *p;
		for(p=head; p->next!=NULL; p=p->next);
		p->next=first;
	}
	cout<<"danh sach sau noi: ";
	inds(head);
}
void NoiSauKDs1(node *head, node *first){
	int k;
	cout<<"noi sau phan tu: "; cin>>k;
	node *p, *a;
	for(p=head; p->data!=k; p=p->next);
	for(a=first; a->next!=NULL; a=a->next);
	a->next=p->next;
	p->next=first;
	cout<<"danh sach sau chen: ";
	inds(head);
}
int main(){
	node *head=NULL, p, *first=NULL;
	int n, x, y;
	cout<<"nhap so phan tu: ";
	cin>>n;
	for(int i=1; i<=n; i++){
		cout<<"data["<<i<<"]: ";
		cin>>x;
		head=taods(head,x);
	}
	cout<<"danh sach sau nhap: ";
	inds(head);
	int m;
	cout<<"nhap so phan tu danh sach 2: "; cin>>m;
	for(int i=1; i<=m; i++){
		cout<<"data["<<i<<"]: ";
		cin>>y;
		first=taods(first,y);
	}
	cout<<"danh sach sau nhap: ";
	inds(first);
	NoiSauKDs1(head,first);
}
