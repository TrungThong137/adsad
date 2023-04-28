#include<bits/stdc++.h>
using namespace std;
class dm{
	private:
		string nd;
		string tgia;
	protected:
		int sltk;
	public:
		void nhap();
		void xuat();
		int get_sltk();
		string get_tgia();
		virtual int kt(){
			return 0;
		}
};
void dm::nhap(){
	cout<<"nhap nhan de: ";
	fflush(stdin);
	getline(cin,nd);
	cout<<"nhap tac gia: ";
	fflush(stdin);
	getline(cin,tgia);
	cout<<"nhap so lan tham khao: ";
	cin>>sltk;
}
void dm::xuat(){
	cout<<"nhan de: "<<nd<<"   "<<"tac gia: "<<tgia<<"   "<<"so lan tham khao: "<<sltk;
}
int dm::get_sltk(){
	return sltk;
}
string dm::get_tgia(){
	return tgia;
}
class bao: public dm{
	private:
		string ttc;
		int stc;
	public:
		void nhap_bao();
		int kt();
};
void bao::nhap_bao(){
	nhap();
	cout<<"nhap ten tap chi dang bai bao: ";
	fflush(stdin);
	getline(cin,ttc);
	cout<<"nhap so tap chi: ";
	cin>>stc;
}
int bao::kt(){
	return sltk>10;
}
class sach: public dm{
	private:
		string nxb;
		int sli;
	public:
		void nhap_sach();
		int kt();	
};
void sach::nhap_sach(){
	nhap();
	cout<<"nhap ten nha xuat ban: ";
	fflush(stdin);
	getline(cin,nxb);
	cout<<"nhap so lan in: ";
	cin>>sli;
}
int sach::kt(){
	return sltk>20;
}
int main(){
	dm *d[100];
	int  n;
	cout<<"nhap so sach va bao: ";
	cin>>n;
	for(int i=0; i<n; i++){
		int t;
		cout<<"1. sach"<<endl;
		cout<<"2. bao"<<endl;
		cout<<"nhap danh muc: ";
		cin>>t;
		if(t==1){
			sach *p=new sach;
			p->nhap_sach();
			d[i]=p;
		}else{
			bao *p= new bao;
			p->nhap_bao();
			d[i]=p;
		}
	}
	int max=d[0]->get_sltk();
	for(int i=0; i<n; i++){
		if(max<d[i]->get_sltk()){
			max=d[i]->get_sltk();
		}
	}
	cout<<"so sach hoac tap chi co so lan tham khao cao nhat la: "<<endl;
	for(int i=0; i<n; i++){
		if(d[i]->get_sltk()==max){
			d[i]->xuat();
		}
	}
	cout<<"tac gia sach hoac bao duoc khen thuong la: "<<endl;
	for(int i=0; i<n; i++){
		if(d[i]->kt()==1){
			cout<<d[i]->get_tgia()<<endl;
		}
	}
}
