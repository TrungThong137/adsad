#include<bits/stdc++.h>
using namespace std;
typedef char St20[20];
struct node{
	St20 data;
	node *Left, *Right;
};

node *insert(node *root, St20 x){
	if(root==NULL){
		root=(node *)malloc(sizeof(node));
		root->Left=NULL;
		root->Right=NULL;
		strcpy(root->data,x);
	}else if(strcmp(root->data,x)>0){
		root->Left=insert(root->Left,x);
	}else{
		root->Right=insert(root->Right,x);
	}
	return root;
}

void GLR(node *root){
	if(root!=NULL){
		cout<<root->data<<" ";
		GLR(root->Left);
		GLR(root->Right);
	}
}

void search(node *root, St20 name){
	if(root==NULL){
		cout<<"danh rong!!"<<endl;
	}else if(strcmp(root->data,name)==0){
		cout<<"tim thay "<<root->data<<" ";
	}else if(strcmp(root->data,name)>0){
		search(root->Left,name);
	}else{
		search(root->Right,name);
	}
}

void LGR(node *root){
	if(root!=NULL){
		LGR(root->Left);
		cout<<root->data<<endl;
		LGR(root->Right);
	}
}

node *min(node *root){
	if(root->Left==NULL){
		return root;
	}else{
		return min(root->Left);
	}
}

node *max(node *root){
	if(root->Right==NULL){
		return root;
	}else{
		return max(root->Right);
	}
}

int Test(node *root){
	
}

int main(){
	node *root=NULL;
	int n;
	cout<<"Nhap so phan tu: ";
	cin>>n;
	St20 x;
	for(int i=0; i<n; i++){
		cout<<"Nhap data["<<i<<"]: ";
		fflush(stdin);
		gets(x);
		root=insert(root,x);
	}
	cout<<"Cay da nhap: ";
	GLR(root);
	cout<<endl<<Test(root)<<endl;
	
	cout<<"\nin theo trai goc phai: ";
	LGR(root);
	cout<<"\nBo sung them du lieu: ";
	fflush(stdin);
	gets(x);
	root=insert(root,x);
	GLR(root);
	search(root,x);
}
