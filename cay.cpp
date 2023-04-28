#include <iostream>
using namespace std;

int main(){
	int h, tang, i, j;
	cout<<"nhap so tang va cheu cao: ";
	cin>>h>>tang;
	for(tang=1; tang<=h; tang++)
	for(i=1; i<=h; i++){
		for(j=1; j<=h+i-1; j++)
			if(j>=h-i+1)
				cout<<"* ";
			else cout<<"  ";
			cout<<endl;
		}
	return 0;
}
