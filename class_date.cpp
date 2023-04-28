#include<bits/stdc++.h>
using namespace std;
class date{
	private:
		int d, m ,y;
	public:
		void nhap();
		void xuat();
		void congk(int k);
		void tang();
		bool nhuan();
		int ngay();
		void kc();
		int nam();
};
bool date::nhuan(){
	if((y%4==0 && y%100==0) || y%400==0){
		return true;
	}else return false;
}
int date::ngay(){
	if(m==4 || m==6 || m==9 || m==11){
		return 30;
	}else if(m==2){
		return 28+nhuan();
	}else return 31;
}
void date::nhap(){
	int a;
	bool b;
	while(b==false){
		cout<<"nhap ngay: "; cin>>d;
		cout<<"nhap thang: "; cin>>m;
		cout<<"nhap nam: "; cin>>y;
		a=ngay();
		if(d>0 && d<=a && m>=1 && m<=12 && y>0){
			b=true;
		}
		else cout<<"nhap lai: "<<endl;
		b==false;
	}
}
void date::xuat(){
	cout<<d<<"/"<<m<<"/"<<y<<endl;
}
void date::tang(){
	int a=ngay();
	if(++d>a){
		d=1;
		if(++m>12){
			m=1;
			y+=1;
		}
	}
}
void date::congk(int k){
	for(int i=1; i<=k; i++){
		tang();
	}
}
int date::nam(){
	if((y%4==0 && y%100==0) || y%400==0){
		return 366;
	}else return 365;
}
void date::kc(){
	date a; int c=0;
	a.nhap();
	a.xuat();
	if(a.y==y){
		if(a.m==m){
			if(a.d==d) cout<<0<<" ngay";
			else cout<<abs(a.d-d)<<" ngay";
		}else if(a.m>m){
			c+=ngay()-d+a.d;
			m=m+1;
			while(a.m>m){
				c+=ngay();
				m+=1;
			}
			cout<<c<<" ngay";
		}else{
			c+=a.ngay()-a.d+d;
			a.m=a.m+1;
			while(a.m<m){
				c+=a.ngay();
				a.m+=1;
			}
			cout<<c<<" ngay";
		}
	}else if(a.y>y){
		if(a.m==m){
			if(a.d==d){
				c+=nam();
				y=y+1;
				while(a.y>y){
					c+=nam();
					y=y+1;
				}
				cout<<c<<" ngay";
			}else{
				c+=abs(a.d-d) + nam();
				y=y+1;
				while(a.y>y){
					c+=nam();
					y=y+1;
				}
				cout<<c<<" ngay";
			}
		}else if(a.m>m){
			c+=nam()+ngay()-d+a.d;
			m=m+1;
			y=y+1;
			while(a.m>m){
				c+=ngay();
				m+=1;
			}
			while(a.y>y){
					c+=nam();
					y=y+1;
			}
			cout<<c<<" ngay";
		}else{
			c+=nam()+a.ngay()-a.d+d;
			a.m=a.m+1;
			y=y+1;
			while(a.m<m){
				c+=a.ngay();
				a.m+=1;
			}
			while(a.y>y){
					c+=nam();
					y=y+1;
			}
			cout<<c<<" ngay";
		}
	}else{
		if(a.m==m){
			if(a.d==d){
				c+=a.nam();
				a.y=a.y+1;
				while(a.y<y){
					c+=a.nam();
					a.y=a.y+1;
				}
				cout<<c<<" ngay";
			}else{
				c+=abs(a.d-d) + a.nam();
				a.y=a.y+1;
				while(a.y<y){
					c+=a.nam();
					a.y=a.y+1;
				}
				cout<<c<<" ngay";
			}
		}else if(a.m<m){
			c+=a.nam()+a.ngay()-a.d+d;
			a.m=a.m+1;
			a.y=a.y+1;
			while(a.m<m){
				c+=a.ngay();
				a.m+=1;
			}
			while(a.y<y){
					c+=a.nam();
					a.y=a.y+1;
			}
			cout<<c<<" ngay";
		}else{
			c+=a.nam()+ngay()-d+a.d;
			m=m+1;
			a.y=a.y+1;
			while(a.m>m){
				c+=ngay();
				m+=1;
			}
			while(a.y<y){
					c+=a.nam();
					a.y=a.y+1;
			}
			cout<<c<<" ngay";
		}
	}
}

int main(){
	date d;
	d.nhap();
	d.xuat();
	d.tang();
	cout<<"ngay sau tang 1 ngay: ";
	d.xuat();
	int a;
	cout<<"nhap so ngay can tang: "; cin>>a;
	d.congk(a);
	d.xuat();
	d.kc();
}
