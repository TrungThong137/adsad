#include<bits/stdc++.h>
using namespace std;
class boi{
	private:
		string hoten;
		int maso;
		int gio;
		int phut;
		int giay;
		int h;
		int m;
		int s;
		int r;
		boi *data;
		boi *next;
	public:
		void nhap(boi *&head, string hoten, int maso, int gio, int phut, int giay, int h, int m, int s){
			boi *p=new boi, *a=head;
			p->hoten=hoten;
			p->maso=maso;
			p->gio=gio;
			p->phut=phut;
			p->giay=giay;
			p->h=h;
			p->m=m;
			p->s=s;
			p->data=p;
			p->next=NULL;
			if(a==NULL){
				head=p;
			}
			else{
				while(a->next!=NULL){
					a=a->next;
				}
				a->next=p;
			}
		}
		void xuat(boi *&head){
			for(boi *p=head; p!=NULL; p=p->next){
				cout<<p->data->hoten<<" "<<p->data->maso<<" "<<endl;
				cout<<p->data->gio<<" "<<p->data->phut<<" "<<p->data->giay<<endl;
				cout<<p->data->h<<" "<<p->data->m<<" "<<p->data->s<<endl;
				cout<<endl;
			}
		}
		void sx(boi *&head){
			for(boi *p=head; p!=NULL; p=p->next){
				for(boi *a=p->next; a!=NULL; a=a->next){
					if(p->maso>a->maso){
						boi *t=p->data;
						p->data=a->data;
						a->data=t;
					}
				}
			}
			xuat(head);
		}
		int tt(boi *p){
			int t;
    		t=(p->h-p->gio)*3600+(p->m-p->phut)*60+(p->s-p->giay);
			return t;
		}
		void show(boi *p){
			cout<<p->data->hoten<<" "<<p->data->maso<<" "<<endl;
			cout<<p->data->gio<<" "<<p->data->phut<<" "<<p->data->giay<<endl;
			cout<<p->data->h<<" "<<p->data->m<<" "<<p->data->s<<endl;
			cout<<endl;
		}
		void ttcao(boi *&head){
			boi *a=head;
			int max=tt(a);
			for(boi *p=a->next; p!=NULL; p=p->next){
				if(tt(p)<max){
					max=tt(p);
				}
			}
			for(boi *p=head; p!=NULL; p=p->next){
				if(tt(p)==max){
					show(p);
				}
			}
		}
		void hang(boi *&head){
			r=1;
			for(boi *p=head; p!=NULL; p=p->next){
				p->r=r;
				r++;
			}
			for(boi *p=head; p!=NULL; p=p->next){
				for(boi *a=p->next; a!=NULL; a=a->next){
					if(tt(p)>tt(a)){
						boi *t=p->data;
						p->data=a->data;
						a->data=t;
					}
				}
			}
			for(boi *p=head; p!=NULL; p=p->next){
				for(boi *a=p->next; a!=NULL; a=a->next){
					if(tt(p)==tt(a)){
						a->r=p->r;
					}
				}
			}
			for(boi *p=head; p!=NULL; p=p->next){
				show(p);
				cout<<p->r;
			}
		}
};
int main(){
	boi *head=NULL;
	boi my;
	int n;
	cin>>n;
	string ten;
	int ma , gio, phut, giay, h, m, s;
	while(n-->0){
		fflush(stdin);
		getline(cin,ten);
		cin>>ma;
		cin>>gio>>phut>>giay;
		cin>>h>>m>>s;
		my.nhap(head,ten,ma,gio,phut,giay,h,m,s);
	}
	cout<<"thi sinh da nhap la"<<endl;
	my.xuat(head);
	cout<<"xap xep"<<endl;
	my.sx(head);
	cout<<"thanh tich cao nhat"<<endl;
	my.ttcao(head);
	my.hang(head);
}
