#include <bits/stdc++.h>
using namespace std;
struct sinhvien {
	string mssv;
	string ho;
	string name;
	string gioitinh;
	float diem;
};
struct Node {
	sinhvien *data;
	struct  Node* link;
};
struct List {
	Node* pHead;
	Node* pTail;
};
void KhoiTaoList(List &l) {
	l.pHead = l.pTail = NULL;
}
void nhap(sinhvien *sv) {
	cout << "Nhap Ho sinh vien: ";
	fflush(stdin);
	getline(cin,sv->ho);
	cout << "Nhap Ten sinh vien: ";
	fflush(stdin);
	getline(cin,sv->name);
	cout << "Nhap Ma so sinh vien : ";
	getline(cin,sv->mssv);	
		fflush(stdin);
	cout << "Nhap gioi tinh cua sinh vien: ";
	getline(cin, sv->gioitinh);
	fflush(stdin);
	cout << "Nhap diem cua sinh vien : ";
	cin >> sv->diem;	
}
Node *KhoiTaoNode() {
	sinhvien* sv = new sinhvien;
	nhap(sv);
	Node* p = new Node;
	p->data = sv;
	p->link = NULL;
	return p;
}
void chendau(List &l, Node *p) {
	if (l.pHead == NULL) {
		l.pHead = l.pTail= p;
	}
	else {
		p->link = l.pHead;
		l.pHead = p;
	}
}
void ThemSinhVienVaoCuoi(List& l,Node *p){
    if(l.pHead==NULL){
        l.pHead=l.pTail=p;
    }
    else{
        Node *pTmp=l.pHead;
        while(pTmp->link!=NULL)
        {
            pTmp=pTmp->link;
        }
        pTmp->link=p;
    }
    l.pTail=p;
}
void Show(List l) {
	for (Node* k = l.pHead; k != NULL; k = k->link) {
		cout << "MSSV : " << k->data->mssv;
		cout << "\tHo  : " << k->data->ho ;
		cout << "\tTen  : " << k->data->name ;
		cout << "\tGioi tinh  : " << k->data->gioitinh ;
		cout << "\tDiem : " << k->data->diem ;
        cout<<endl;
	}
}
void showNode(Node *k) {
	cout << "MSSV : " << k->data->mssv;
	cout << "\tHo  : " << k->data->ho ;
	cout << "\tTen  : " << k->data->name ;
	cout << "\tGioi tinh  : " << k->data->gioitinh ;
	cout << "\tDiem : " << k->data->diem ;
    cout<<endl;
}
void tim(List l){
	string  mssv;
    cout << "nhap Ma So Sinh Vien Can Tim Kiem : ";
    fflush(stdin);
    getline(cin,mssv);
    for (Node* k = l.pHead; k != NULL; k = k->link) {
	    if (k->data->mssv == mssv) {
	    showNode(k);
		}
    }
}

void sx(List l){
	for(Node *k=l.pHead; k->link!=NULL; k=k->link){
		for(Node *q=k->link; q!=NULL; q=q->link){
			if(k->data->mssv>q->data->mssv){
				sinhvien *a=k->data;
				k->data=q->data;
				q->data=a;
			}
		}
	}
	Show(l);
}
int main() {
	List l;
	KhoiTaoList(l);
	int n;
	cout<<"nhap so sinh vien: ";
	cin>>n;
	for(int i=0; i<n; i++){
		Node* p = KhoiTaoNode();
		ThemSinhVienVaoCuoi(l, p);
	}
	Show(l);
	tim(l);
	sx(l);
	return 0;
}
