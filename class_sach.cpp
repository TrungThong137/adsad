#include<bits/stdc++.h>
using namespace std;
class sach{
	private:
		int mas;
		string tens;
		string tgia;
		int d;
		int m;
		int y;
		int sl;
		int n;
	public:
		void nhap();
		void xuat();
		void sx();
		void slon();
		void x2020();
};
sach a[100];
void sach::nhap(){
	cout<<"nhap so sach: ";
	cin>>n;
	if(n<100){
		for(int i=0; i<n; i++){
			cout<<"nhap ten sach: ";
			fflush(stdin);
			getline(cin,a[i].tens);
			cout<<"nhap ho ten tac gia: ";
			fflush(stdin);
			getline(cin,a[i].tgia);
			cout<<"nhap ma sach: ";
			cin>>a[i].mas;
			cout<<"nhap ngay: ";
			cin>>a[i].d;
			cout<<"nhap thang: ";
			cin>>a[i].m;
			cout<<"nhap nam: ";
			cin>>a[i].y;
			cout<<"nhap so luong: ";
			cin>>a[i].sl;
		}
	}
}
void sach::xuat(){
	for(int i=0; i<n; i++){
	cout<<"ten sach: "<<a[i].tens<<endl;
	cout<<"ten tac gia: "<<a[i].tgia<<endl;
	cout<<"ma sach: "<<a[i].mas<<endl;
	cout<<"ngay cap giay phep xuat ban: "<<a[i].d<<"/"<<a[i].m<<"/"<<a[i].y<<endl;
	cout<<"so sach: "<<a[i].sl<<endl;
	cout<<endl;
	}
}
void sach::sx(){
	for(int i=0; i<n; i++){
		for(int j=i+1; j<n; j++){
			if(a[i].y>a[j].y){
				sach t;
				t=a[i];
				a[i]=a[j];
				a[j]=t;
			}
			else if(a[i].y==a[j].y && a[i].m>a[j].m){
				sach t;
				t=a[i];
				a[i]=a[j];
				a[j]=t;
			}
			else if(a[i].y==a[j].y && a[i].m==a[j].m && a[i].d>a[j].d){
				sach t;
				t=a[i];
				a[i]=a[j];
				a[j]=t;
			}
		}
	}
	xuat();
}
void sach::slon(){
	int max=a[0].sl;
	for(int i=1; i<n; i++){
		if(a[i].sl>max){
			max=a[i].sl;
		}
	}
	for(int i=0; i<n; i++){
		if(a[i].sl==max){
			cout<<"ten sach: "<<a[i].tens<<endl;
			cout<<"ten tac gia: "<<a[i].tgia<<endl;
			cout<<"ma sach: "<<a[i].mas<<endl;
			cout<<"ngay cap giay phep xuat ban: "<<a[i].d<<"/"<<a[i].m<<"/"<<a[i].y<<endl;
			cout<<"so sach: "<<a[i].sl<<endl;
			cout<<endl;
		}
	}
}
void sach::x2020(){
	int nam=2020;
	for(int i=0; i<n; i++){
		if(a[i].y==nam){
			cout<<"ten sach: "<<a[i].tens<<endl;
			cout<<"ten tac gia: "<<a[i].tgia<<endl;
			cout<<"ma sach: "<<a[i].mas<<endl;
			cout<<"ngay cap giay phep xuat ban: "<<a[i].d<<"/"<<a[i].m<<"/"<<a[i].y<<endl;
			cout<<"so sach: "<<a[i].sl<<endl;
			cout<<endl;
		}
	}
}
int main(){
	sach a;
	a.nhap();
	cout<<endl<<"sach da nhap la"<<endl<<endl;
	a.xuat();
	cout<<endl<<"thu tu sau sap xep"<<endl<<endl;
	a.sx();
	cout<<endl<<"sach co so luong lon nhat"<<endl<<endl;
	a.slon();
	cout<<endl<<"sach xuat ban nam 2020"<<endl<<endl;
	a.x2020();
}
