#include <iostream>
#include <string>
using namespace std;

int main(){
	string s;
	while( getline(cin,s)){
		int t=0, d=0;
		for(int i=0; i<s.length(); i++){
			if(s[i]>='a' && s[i]<='z') t++;
			else if(s[i]>='A' && s[i]<='Z') d++;
    	}
		for(int i=0; i<s.length(); i++){
		if(t<d){
			if(s[i]>='a' && s[i]<='z') s[i]-=32;
		}
		else 
			if(s[i]>='A' && s[i]<='Z') s[i]+=32;
        }
        cout<<s<<endl;
	}
}

