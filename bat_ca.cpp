#include <iostream>

using namespace std;

int main(){
 int a,b,n;
 cin>>a>>b>>n;
 int s=0, dem=0;
 while(s<n && a>b){
 	s+=a;
 	dem++;
 	if(s<n) s=s-b;
}
 cout<<dem;
 return 0;
}
