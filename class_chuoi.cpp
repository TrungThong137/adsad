#include<bits/stdc++.h>
using namespace std;
class chuoi{
	private:
		string s;
		int n;
	public:
		chuoi();
		chuoi(string a);
		void nhap();
		void xuat();
		string pt(int i);
		chuoi noi(chuoi t);
};
chuoi::chuoi(){}
chuoi::chuoi(string a){
	s=a;
}
void chuoi::nhap(){
	cout<<"nhap chuoi: ";
	fflush(stdin);
	getline(cin,s);
	n=s.length();
}
void chuoi::xuat(){
	cout<<s<<endl;
}

string chuoi::pt(int i){
	string a;
	a=s[i];
	return a;
}
chuoi chuoi::noi(chuoi t){
	chuoi c;
	c.s=s+t.s;
	c.n=n+t.n;
	return c;
}
int main(){
	chuoi s, t, c;
	s.nhap();
	t.nhap();
	c=s.noi(t);
	cout<<"s = "; s.xuat();
	cout<<"t = "; t.xuat();
	cout<<"c = "; c.xuat();
	cout<<"phan tu thu 7 cua chuoi la: "<<c.pt(6);
}
