#include<bits/stdc++.h>
using namespace std;
struct ngayghi{
	int d, m, y;
};
class khachhang{
	private:
		string maso;
		string hoten;
		ngayghi a;
		int chiso;
	public:
		void nhap();
		void xuat();
		friend void caonhat(int n, khachhang a[]);
		friend void sx(int n, khachhang a[]);
        int sotien();
};
void khachhang::nhap(){
	cout<<"nhap ma so: ";
	fflush(stdin);
	getline(cin,maso);
	cout<<"nhap ho ten: ";
	fflush(stdin);
	getline(cin,hoten);
	cout<<"nhap ngay ghi: ";
	cin>>a.d>>a.m>>a.y;
	cout<<"nhap chi so tieu thu: ";
	cin>>chiso;
}
void khachhang::xuat(){
	cout<<"ma so: "<<maso<<"    ";
	cout<<"hoten: "<<hoten<<"    ";
	cout<<"ngay ghi: "<<a.d<<"/"<<a.m<<"/"<<a.y<<"    ";
	cout<<"chi so tieu thu: "<<chiso<<endl;
}
int khachhang::sotien(){
	int tien;
	if(chiso<=10){
		tien= chiso*5973;
	}else if(chiso<=20){
		tien= chiso*7052;
	}else if(chiso<=30){
		tien= chiso*8669;
	}else{
		tien=chiso*15929;
	}
	return tien;
}
void sx(int n, khachhang a[]){
	for(int i=0; i<n; i++){
		for(int j=i+1; j<n; j++){
			if(a[i].a.y>a[j].a.y){
				khachhang t;
				t=a[i];
				a[i]=a[j];
				a[j]=t;
			}else if(a[i].a.y==a[j].a.y && a[i].a.m>a[j].a.m){
				khachhang t;
				t=a[i];
				a[i]=a[j];
				a[j]=t;
			}else if(a[i].a.y==a[j].a.y && a[i].a.m==a[j].a.m && a[i].a.d>a[j].a.d){
				khachhang t;
				t=a[i];
				a[i]=a[j];
				a[j]=t;
			}
		}
	}
	for(int i=0; i<n; i++){
		a[i].xuat();
	}
}
void caonhat(int n, khachhang a[]){
	int max=a[0].sotien();
	for(int i=1; i<n; i++){
		if(a[i].sotien()>max){
			max=a[i].sotien();
		}
	}
	for(int i=0; i<n; i++){
		if(a[i].sotien()==max){
			a[i].xuat();
		}
	}
}
int main(){
	khachhang a[n];
	int n;
	cout<<"nhap so khach hang: ";
	cin>>n;
	for(int i=0; i<n; i++){
		a[i].nhap();
	}
	for(int i=0; i<n; i++){
		a[i].xuat();
	}
	cout<<endl<<"sau khi sap xep la:"<<endl;
	sx(n,a);
	cout<<endl<<"khach hang tra so tien cao nhat la:"<<endl;
	caonhat(n,a);
}
