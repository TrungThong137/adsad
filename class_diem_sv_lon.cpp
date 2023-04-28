#include<bits/stdc++.h>
using namespace std;
class sinhvien{
	private:
		string hoten;
		string masv;
		float dtb;
		sinhvien *next;
	public:
		void nhapsv(sinhvien *&head, string ht, string ma, float d){
			sinhvien *p=new sinhvien, *a=head;
			p->hoten=ht;
			p->masv=ma;
			p->dtb=d;
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
		void show(sinhvien *&head){
			for(sinhvien *p=head; p!=NULL; p=p->next){
				cout<<p->hoten<<setw(4)<<p->masv<<setw(4)<<p->dtb<<endl;
			}
		}
		int kt(sinhvien *&head, string ma){
			for(sinhvien *p=head; p!=NULL; p=p->next){
				if(p->masv==ma){
					return 0;
				}
			}
			return 1;
		}
		int lon(sinhvien *&head){
			int max;
			for(sinhvien *p=head; p!=NULL; p=p->next){
				if(p->dtb>max){
					max=p->dtb;
				}
			}
			return max;
		}
		void tim(sinhvien *&head, int max){
			for(sinhvien *p=head; p!=NULL; p=p->next){
				if(p->dtb==max){
					cout<<p->hoten<<setw(4)<<p->masv<<setw(4)<<p->dtb<<endl;
				}
			}
		}
};
int main(){
	sinhvien *head=NULL;
	sinhvien my;
	int n;
	string ht, ma;
	float d;
	cout<<"nhap so sinh vien: ";
	cin>>n;
	while(n-->0){
		cout<<"nhap ho ten sinh vien: ";
		cin.ignore();
		getline(cin,ht);
		again:
		cout<<"nhap ma sinh vien: ";
		cin>>ma;
		if(my.kt(head,ma)==0){
			goto again;
		}
		cout<<"nhap diem: ";
		cin>>d;
		my.nhapsv(head,ht,ma,d);
	}
	my.show(head);
	my.tim(head,my.lon(head));
	delete head;
}
