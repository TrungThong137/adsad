#include<bits/stdc++.h>
using namespace std;
struct node{
	int data;
	node *next;
};
node *taoNode(int x){
	node *p=new node;
	p->data=x;
	p->next=NULL;
	return p;
}
void inds(node *head){
	for(node *p=head; p!=NULL; p=p->next){
		cout<<p->data<<"\t";
	}
	cout<<endl;
}
void sx(node *head){
	for(node *p=head; p->next!=NULL; p=p->next){
		for(node *q=p->next; q!=NULL; q=q->next){
			if(p->data>q->data){
				int t=p->data;
				p->data=q->data;
				q->data=t;
			}
		}
	}
}
void tim(node *head){
	int x;
	cout<<"nhap phan tu can tim: "<<endl;
	cin>>x;
	cout<<"danh sach phan tu tim la: "<<endl;
	for(node *p=head; p!=NULL; p=p->next){
		if(p->data==x){
			cout<<p->data<<"\t";
		}
	}
}
node *chen(node *head){
	int x;
	cout<<"nhap phan tu can chen: ";
	cin>>x;
	node *a=taoNode(x);
	node *p=head, *q;
	while(p!=NULL){
		if(p->data<x){
			q=p;
			p=p->next;
		}else break;
	}
	if(p==head){
		a->next=p;
		head=a;
	}else{
		a->next=p;
		q->next=a;
	}
	return head;
}
void xoa(node *head){
	int x;
	cout<<"nhap phan tu can xoa: ";
	cin>>x;
	node *a=taoNode(x), *q;
	node *p;
	bool f=false;
	for(p=head; p!=NULL; p=p->next){
		if(p->data!=x){
			q=p;
		}else{
			f=true;
			break;
		}
	}
	if(f==false){
		cout<<"khong tim thay!!!!";
	}
	else{
		int t, b=1;
		comeback:
		cout<<"nhan 1 de xoa phan tu "<<x<<endl;
		cout<<"nhan 2 de xoa tat ca phan tu "<<x<<endl;
		cin>>t;
		if(t==1){
			if(p==head){
				head=head->next;
			}else{
				q->next=p->next;
			}
			cout<<"danh sach sau xoa: ";
			inds(head);
		}else if(t==2){
			again:
			bool w=false;
			node *m;
			for(p=head; p!=NULL; p=p->next){
				if(p->data!=x){
					m=p;
				}else{
					w=true;
					break;
				}
			}
			if(p==head){
				a->next=p->next;
				head=a->next;
			}else{
				m->next=p->next;
			}
			cout<<"danh sach sau xoa Lan "<<b<<": ";
			inds(head);
			if(w==true){
				b++;
				goto again;
			}
		}else{
			goto comeback;
		}
		
	}

}
int main(){
	node *head=NULL, *a;
	int n;
	cout<<"Nhap so phan tu: ";
	cin>>n;
	int x;
	for(int i=1; i<=n; i++){
		cout<<"Data["<<i<<"]: ";
		cin>>x;
		a=taoNode(x);
		if(head==NULL){
			head=a;
		}
		else{
			node *p;
			for(p=head; p->next!=NULL; p=p->next);
			p->next=a;
		}
	}
	cout<<"danh sach sau nhap: ";
	inds(head);
	sx(head);
	cout<<"danh sach sau khi xep: ";
	inds(head);
	head=chen(head);
	cout<<"danh sach sau chen: ";
	inds(head);
	xoa(head);
	tim(head);
}
