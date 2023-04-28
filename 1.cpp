#include<bits/stdc++.h>
#include<math.h>
#include<iomanip>
using namespace std;
class printer{
	private:
		string ma;
		string ten;
		int sl;
		int d, m, y;
	public:
		void nhap();
		void xuat();
		bool operator >(printer a){
			if(y>a.y){
				return 1;
			}else if(y==a.y && m>a.m){
				return 1;
			}else if(y==a.y && m==a.m && d>a.d){
				return 1;
			}else return 0;
		}
		int get_sl(){
			return sl;
		}
};
void printer::nhap(){
	cout<<"nhap ma: ";
	cin>>ma;
	cout<<"nhap ten: ";
	cin>>ten;
	cout<<"nhap sl: ";
	cin>>sl;
	cout<<"nhap ngay nhap: ";
	cin>>d>>m>>y;
}
void printer::xuat(){
	cout<<setw(10)<<ma<<setw(10)<<ten<<setw(15)<<sl<<setw(8)<<d<<"/"<<m<<"/"<<y;
}
class L: public printer{
	private:
		string dpg;
	public:
		friend istream &operator >>(istream &input, L &a){
			a.nhap();
			cout<<"nhap do phan giai: ";
			fflush(stdin);
			getline(cin,a.dpg);
			return input;
		}
		friend ostream &operator <<(ostream &output, L &a);
		string get_dpg(){
			return dpg;
		}
};
ostream &operator <<(ostream &output, L &a){
	a.xuat();
	cout<<setw(30)<<a.get_dpg()<<endl;
	return output;
}
class ql{
	private:
		int n;
		L a[n];
	public:
		void nhaptt(){
			cout<<"nhap so may: ";
			cin>>n;
			for(int i=0; i<n; i++){
				cin>>a[i];
			}
			for(int i=0; i<n; i++){
				for(int j=i+1; j<n; j++){
					if(a[j]>a[i]){
						L t=a[i];
						a[i]=a[j];
						a[j]=t;
					}
				}
			}
			cout<<setw(10)<<"ma"<<setw(10)<<"ten"<<setw(15)<<"so luong"<<setw(15)<<"ngay nhap"<<setw(30)<<"do phan giai"<<endl;
			for(int i=0; i<n; i++){
				cout<<a[i];
			}
		}
		
};
int main(){
	ql a;
	a.nhaptt();
}
