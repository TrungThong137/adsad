// // // var fullName = 'Hoang trung thong';

// // // alert(fullName);

// // // var n=10;
// // // for(var i=0; i<n ; i++){
// // //     document.write('I love u' + "<br/>");
// // // }
// // // // concat noi. 
// // // // splice xoa 1 phan tu va chen 1 phan tu 
// // // // slice copy
// // // // tao ham function
// // // function showDialog(){

// // // }
// // // conform thong bao hop thoai
// // // confirm them o input
// // // polyfill?

// // // indexOf tim kiem 

// // // object 

// // var myInfo ={
// //     name: 'Trung Thong',
// //     age: 21,
// //     address: ''
// // };

// // // them 1 phan tu vao object
// // myInfo.mail= 'a@gmail.com';

// // // lay du lieu object ra
// // console.log(myInfo.name);
// // // delete de xoa du lieu trong object : delete myInfo.age;
// // // contractor xem lai du lieu da them trong object
// // // prototype them 1 thuoc tinh ben ngoai object
// // myInfo.prototype.an= 'an';
// // // doi tuong date
// // var date=new Date();

// // for(var key in myInfo){
// //     console.log(myInfo[key]);
// // }

// // for(var key of myInfo){
// //     console.log(key);
// // }
// // // dung cho object
// // for(var key of Object.values(myInfo)){
// //     console.log(myInfo[key]);
// // }

// // // forEach duyet qua tung phan tu cua mang 
// // myInfo.array.forEach(function(myInfo, index) {
// //     console.log(index,  myInfo);
// // });

// // // every dung kiem tra tat ca phan tu phai thoa man dieu kien nao do
// // // co the khai bien
// // myInfo.array.every(function(myInfo, index) {
// // //    return Dieu kien
// // });

// // // some kiem tra tat ca phan tu trong mang va chi can co 1 phan tu 
// // // thoa man dieu kien
// // myInfo.array.some(function(myInfo, index) {
// //     //    return Dieu kien
// // });

// // // find de tim kiem phan tu va chi tim kiem 1 phan tu
// // var course= myInfo.array.find(myInfo, index){
// //     // return dieu kien
// // }

// // // filter tim kiem tat ca cac phan tu trong mang

// // // map() thay doi cac phan tu trong mang
// // var newCourses= myInfo.map(function (e, index, originArray){
// //     console.log(e);
// //     // return cai gi no tra ve cai do
// //     return {
// //         id: e.address,
// //         name:  `Khoa hoc: ${myInfo.address}`,
// //         text: `chu: ${myInfo.name}`,
// //         index: index,
// //         originArray: e    }
// // });

// // // reduce tong 1 phan tu nao do trong mang
// // // 4 muc trong funtion luu tru, gia tri, chi muc, goc
// // var coint= myInfo.reduce(cont,0);
// // var i=0;
// // function cont(accumulator, value, index, root){
// //     i++;
// //     var tong = accumulator + value.coin;

// //     console.table({
// //         'luot chay: ': i,
// //         'bien tich tru: ': accumulator,
// //         'total: ': total
// //     });
// //     // chi can return
// //     return total;
// // }

// // // include method
// // // tim phan tu co ton tai trong mang trong do index la chi so chi muc
// // var course = ['java', 'PPHPH', 'c'];
// // console.log(course.includes('java', index));

// // // math.around() lam tron so nguyen
// // // math.ceil() lam tron so tren vd: 4.1 lam tron 5
// // // floor lam tron duoi

// // function myFunction(param){
// //     param(123);
// // }

// // function myCallback(param){
// //     console.log(param);  
// // }

// // myFunction(myCallback)

// // // dung map
// // var Course= [
// //     'java',
// //     'PHP',
// //     'ruby'
// // ]

// // var htmls=Course.map(function(Course){
// //     return `<h2>${Course}</h2>`;
// // });
// // // in ra 
// // console.log(htmls.join(' '));

// // // them bien vao 1 mang
// // Array.prototype.map2 = function(call){
// //     var output=[];
// //     for(var i=0; i< this.length; i++){
// //        var result= call(this[i], i);
// //        console.log('Result: ', result);
// //        output.push(result);
// //     }
// //     return output;
// // }
// // // cai "call" la function cua map2
// // var htmls=Course.map2(function(call){
// //     return `<h2>${Course}</h2>`;
// // });

// // console.log(htmls);

// // // map

// // var course = [
// //     'java',
// //     'C++',
// //     'PHP'
// // ];

// // var newCourse = course.map(function(e){
// //     return `<h2>${course}</h2>`;
// // });
// // // console.log(newCourse.join(''))


// // Array.prototype.map2=(function(e){
// //     var a=[];
// //     for( var i=0; i<this.length; i++){
// //         a.push(e(this[i]));
// //     }
// //     return a;
// // });

// // var a=course.map2(function(e){
// //     return `h2 ${course} h2`
// // });

// // // console.log(a);

// // // find
// // var find= course.find(function(e){
// //     return e==='java';
// // });
// // // console.log(find);

// // // forEach(course, index, Array)
// // Array.prototype.forEach2=function (callBack){
// //     for( var index in this){
// //         // dung hasOwnProperty de kiem tra phan tu nam trong mang ko
// //         if(this.hasOwnProperty(index)){
// //             callBack(this[index], index, this)
// //         }
// //     }
// // }; 

// // course.forEach2(function(course, index, Array) {
// //     // console.log(course,index,Array);    
// // });
// // // some toi thieu 1 phan tu thoa man la tra ve true
// // Array.prototype.some2 = function(callBack){
// //     for(var i in this){
// //         if(this.hasOwnProperty(i)){
// //             if(callBack(this[i])===true){
// //                 return true;
// //             }
// //         }
// //     }
// //     return false;
// // }

// // var result = a.some2(function(a, index, Array){
// //     return a.isFinsh;
// // })

// // // console.log(result);

// // // every kiem tra tat ca cac element phai dat duoc dieu kien
// // Array.prototype.every2 = function(callBack){
// //     var output=true;
// //     for(var i in this){
// //         if(this.hasOwnProperty(i)){
// //             var values= callBack(this[i]);
// //             if(!values){
// //                 output=false;
// //                 break;
// //             }
// //         }
// //     }
// //     return true;
// // }

// // var result = a.every2(function(a, index, Array){
// //     return a.isFinsh;
// // })

// // // console.log(result);


// // // reduce

// // // filter
// // var a = [
// //     {
// //         naem: 'hacja',
// //         coin: 70,
// //         isFinsh: true
// //     },
// //     {
// //         name:'PHP',
// //         coin: 902,
// //         isFinsh: true
// //     },
// //     {
// //         name: 'Enlement',
// //         coin: 341,
// //         isFinsh: false
// //     }
// // ];
// // // filter in ra tat ca cac phan tu dat dieu kien
// // // find in ra 1 phan tu dau tien dat dieu kien

// // Array.prototype.filter2 = function (callBack ){
// //     var  output=[];
// //     for(var i in this){
// //         if(this.hasOwnProperty(i)){
// //             if(callBack(this[i])){
// //                 output.push(this[i]);
// //             }
// //         }
// //     }
// //     return output;
// // }

// // var b=a.filter2(function(a, index, Array){
// //     return a.coin>300
// // });

// // // console.log(b)

// // // dung new Set de xoa cac phan tu giong nhau trong mang
// // // dung [...()] de gom cac phan tu vao 1 mang
// // var d=['a', 'v', 'd','a', 'v', 'd'];
// // // console.log([...(new Set(d))])

// // // bai toan de quy

// // function deQuy(start, end, cb){
// //     if(start<end){
// //         cb(start)
// //         return deQuy(start+1, end, cb);
// //     }
// // }

// // deQuy(0, d.length, function(index){
// //     // console.log(d[index]);
// // });

// // function giaiThua(num){
// //     if(num==1){
// //         return 1;
// //     }else{
// //         return num*giaiThua(num-1);
// //     }
// // }

// // // dom html
// // // 1. element
// // // lay id
// // document.getElementById 
// // // class
// // document.getElementsByClassName
// // // tag lay ten the
// // document.getElementsByTagName
// // // css selector
// // var f=document.querySelector('.box .heading')
// // console.log(f)
// // // html colection
// // console.log(document.forms.head)
// // // thuoc tinh anchors tra ve tat ca cac the a co name
// // console.log(document.anchors)

// // // lay text trong 1 the
// // // trong query ghi the de lay the ghi class de lay class
// // var headingElement = document.querySelector('.heading');
// // console.log(headingElement)
// // // dung inner text de lay noi dung ben trong the hoac class da chon
// // console.log(headingElement.innerText)
// // // cach sua doi noi dung
// // headingElement.innerText = 'New heading'

// // // them 1 element trong 1 element co san dung innerHTML
// // var boxElement= document.querySelector('.box')
// // console.log(boxElement.innerHTML)
// // // innerHTML va outerHTML

// // // contenteditable dung de sua text nhu the input
// // // draggable keo noi dung

// // // // Dom Style
// // // boxElement.style.width = '100px';
// // // boxElement.style.height='100px';
// // // boxElement.style.backgroundColor = 'green';

// // // dung object them nhieu thuoc tinh 
// // Object.assign(boxElement.style, {
// //     width: '199px',
// //     height: '200px',
// //     backgroundColor:'red'
// // });

// // // classList
// // // value lay chuoi

// // // add
// // boxElement.classList.add('color');

// // // kiem tra class co ton tai ko "cai nay tra ve true false"
// // // console.log(boxElement.classList.contains('color'))

// // // xoa
// // setTimeout(() => {
// //     // boxElement.classList.remove('color')
// // }, 3000);
// // // dung toggle 
// // // dung setInterval 
// // setInterval(() =>{
// //     boxElement.classList.toggle('color');
// // }, 1000);

// // // dom event
// // // onclick lang nghe su kien khi nhan va0
// // onclick='';
// // var h1Element= document.querySelector('h1');
// // h1Element.onclick = function (e){
// //     // target tra ve cai element click
// //     console.log(e.target);
// // };

// // // 1. input/select
// // var inputElement= document.querySelector('input[type="checkbox"]');

// // // onchang : value cua the thay doi
// // // oninput : du lieu thay doi den dau lay ra den day
// // inputElement.oninput = function(e){
// //     console.log(e.target.value)
// // }

// // inputElement.onchange = function(e){
// //     console.log(e.target.checked);
// // }
// // // the select cung lam onchange nhu checkbox nhung target.value

// // // 2.key up/dowm
// // // lay du lieu khi nhan phim tiep theo la key down
// // // key up lay du lieu khi nhac phim len
// // // which : xuat ra so
// // inputElement.onkeydown =function(e){
// //     e.target.value
// // }

// // // preventDefault() bo di hanh vi mac dinh cua no
// // var aElement=document.links
// // for(var i=0; i<aElement.length; i++){
// //     aElement[i].onclick = function(e){
// //         if(e.target.href.startsWith('https://google.com')){
// //             e.preventDefault();
// //         }
// //     }
// // }

// // // onmousedown 

// // // stopPropagation
// // document.querySelectorAll('div')[1].onclick=function(){
// //     console.log('DIV');
// // }

// // document.querySelector('button').onclick=function(e){
// //     e.stopPropagation();
// //     // console.log('click me');
// // }
// // // huy bo lang nghe bang cleartimeout
// // // event listener xu dung khi xu ly nhieu viec 1 luc va muon huy bo su 
// // // kien vao truong hop nao do
// // var btn= document.getElementById('1');
// // function viec1(){
// //     console.log('viec 1');
// // }
// // btn.addEventListener('click', viec1);

// // setTimeout(function(){
// //     // huy bo lang nghe
// //     btn.removeEventListener('click',viec1);
// // },3000);


// // // thuc hanh test lai

// function Validator(options){
//     var formElement=document.querySelector(options.form);

//     function getParent(inputElement, value){
//         while(inputElement.parentElement){
//             if(inputElement.parentElement.matches(value)){
//                 return inputElement.parentElement;
//             }
//             inputElement=inputElement.parentElement;
//         }
//     }

//     function Validate(inputElement, rule){
//         var errorElement = getParent(inputElement, options.dadElement).querySelector(options.errorMessage);
//         var errorMsg;

//         var rules = a[rule.selection];
//         for(var i=0 ; i< rules.length; i++){
//             switch(inputElement.type){
//                 case 'radio':
//                 case 'checkbox':
//                     errorMsg=rules[i](
//                         formElement.querySelector(rule.selection +":checked")
//                     )
//                     break;
//                 default:
//                     errorMsg=rules[i](inputElement.value);
//             }
//             if(errorMsg) break;
//         }

//         if(errorMsg){
//             errorElement.innerText=errorMsg;
//             getParent(inputElement, options.dadElement).classList.add('invalid');
//         }else{
//             errorElement.innerText='';
//             getParent(inputElement, options.dadElement).classList.remove('invalid');
//         }
//         return !errorMsg;
//     }

//     var a={};
//     if(formElement){
//         formElement.onsubmit=function(e){
//             e.preventDefault();
//             var isTrue=true;
//             options.rules.forEach(function(rule){
//                 var inputElement=formElement.querySelector(rule.selection);
//                 var a=Validate(inputElement,rule);
//                 if(!a){
//                     isTrue=false;
//                 }
//             });

//             if(isTrue){
//                 if(typeof options.onsubmit==='function'){
//                     var elementValues= formElement.querySelectorAll('[name]');
//                     var formvalues=Array.from(elementValues).reduce(function(data,b){
//                         switch(b.type){
//                             case "radio":
//                                 data[b.name]=formElement.querySelector('input[name="'+b.selection+'"]:checked').value;
//                                 break;
//                             case "file":
//                                 data[b.name]=b.files;
//                                 break;
//                             case "checkbox":
//                                 if(!b.matches(':checked')) return data;
//                                 if(!Array.isArray(data[b.name])){
//                                     data[b.name]=[b.value];
//                                 }else{
//                                     data[b.name].push(b.value);
//                                 }
//                                 break;
//                             default:
//                                 data[b.name]=b.value;
//                         }
//                         return data;
//                     },{});

//                     options.onsubmit(formvalues);
//                 }
//             }
//         }

//         options.rules.forEach(function(rule){
//             if(Array.isArray(a[rule.selection])){
//                 a[rule.selection].push(rule.test);
//             }else{
//                 a[rule.selection]=[rule.test];
//             }

//             var inputElements=formElement.querySelectorAll(rule.selection);
//             Array.from(inputElements).forEach(function(inputElement){
//                 if(inputElement){
//                     inputElement.onblur=function(){
//                         Validate(inputElement, rule);
//                     }

//                     inputElement.oninput=function(){
//                         var errorElement=getParent(inputElement,options.dadElement).querySelector(options.errorMessage);
//                         errorElement.innerText='';
//                         getParent(inputElement,options.dadElement).classList.remove('invalid');
//                     }
//                 }
//             });
//         });
//     }
// }

// Validator.isRequired=function(selection){
//     return{
//         selection: selection,
//         test: function(e){
//             return e ? undefined : 'Chua Nhap truong nay'
//         }
//     }
// }

// Validator.isEmail=function(selection){
//     return{
//         selection: selection,
//         test: function(e){
//             regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//             return  regex.test(e) ? undefined : 'Email nhap khong hop le';
//         }
//     }
// }

// Validator.minLength=function(selection, min){
//     return{
//         selection: selection,
//         test: function(e){
//             return e>=min ? undefined : `Nhap toi thieu ${min} ki tu`;
//         }
//     }
// }

// Validator.isComfirmed=function(selection, pass, message){
//     return{
//         selection: selection,
//         test: function(e){
//             return e===pass() ? undefined : message||'Chua Nhap truong nay'
//         }
//     }
// }

// // ---------------------------------------------------------------------
// function sleep(ms){
//     return new Promise(function (resolve){
//         setTimeout(resolve,ms);
//     });
// }

// sleep(3000)
//     .then(function(){
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function(){
//         console.log(2);
//         return sleep(1000);
//     })
//     .then(function(){
//         console.log(3);
//         // neu giua duong bat 1 loi moi thi tra ve catch va dung lai
//         return new Promise(function(resolve,reject){
//             reject('co loi');
//         })
//     })
//     .then(function(){
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function(){
//         console.log(2);
//         return sleep(1000);
//     })
//     .catch(function(err){
//         console.log(err)
//     })


// // promise.resolve va promise.reject and promise.all

// var promise1=new Promise(function(resolve){
//     setTimeout(function(){
//         resolve([1]);
//     },1000)
// })

// var promise2=new Promise(function(resolve){
//     setTimeout(function(){
//         resolve([3,4, 8]);
//     },3000)
// })
// // concat noi mang
// Promise.all([promise1,promise2])
//     .then(function(a){
//         console.log(a[0].concat(a[1]));
//     })

// // ----------------------------------------------------------------
// // dung class co thuoc tinh constructor
// class Course{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     run(){
//         return this.name;
//     }
// }
// // ------
// function logger(log, type){
//     console[type](log);
// }
// // tham so 'warn' truyen len type
// logger('message....' ,'error')

// // ------------ lay cac phan tu trong mang nhanh 
// var array = ['java', 'php', 'html'];
// var [,,c] = array;
// console.log(c)
// // lay ra cac phan tu con lai ...rest lay ra cac phan tu phia sau
// var [a,...rest] = array;
// console.log(rest);
// // dung : va ten thay doi vd name: children

// // param
// function log(...param){
//     console.log(param);
// }
// // tra ve 1 mang
// console.log(log(1,2,3,4,5,6,7))

// // noi 2 array
// var array1=['java', 'php'];
// var array2=['reactJS', 'dart'];
// var array3=[...array2,...array1];
// console.log(array3)
// // output: [reactJS', 'dart','java', 'php']

// // tagged template literals
// function highlight([first, ...body],...rest){
//     return rest.reduce(
//         // shift() de xoa phan tu trong 1 mang
//         (a,b)=> [...a, `<span>${b}</span>`, body.shift()],
//         [first]// first la  bien khoi tao
//     )
//     .join('') // join de bien 1 mang thanh 1 chuoi
// }

// var brand = 'TT';
// var course = 'html';
// const html= highlight`Hoc Lap Trinh ${brand} tai ${course} !`;
// console.log(html);

// // ------------modules: Import/export
// import testJS from './testJS.js'

// testJS('test message...', 'warn') //video 103

// // optional chaining (?.)

//-------------- 000000000000000000000000000000000000000jioajdkadiu1837ujijakdksannxcklvklbhfqwiryqy0
var user=[
    {
        id: 1,
        name: 'TT'
    },
    {
        id: 2,
        name: 'TH'
    },
    {
        id: 3,
        name: 'hoang'
    }
];

var comment=[
    {
        id: 1,
        id_user: 1,
        content: 'alo ban oi'
    },
    {
        id: 2,
        id_user: 2,
        content: 'nghe day ban oi'
    },
    {
        id: 3,
        id_user: 1,
        content: 'di choi ko'
    },
    {
        id: 4,
        id_user: 3,
        content: 'cho di ke vs'
    },
]

function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comment);
        },1000)
    })
}

function getUserId(UserId){
    var id=user.filter(function(e){
        return UserId.includes(e.id);
    })
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(id)
        },1000)
    })
}

getComments()
    .then(function(comment){
        var a=comment.map(function(e){
            return e.id_user;
        })
        return getUserId(a)
            .then(function(e){
                return{
                    user: e,
                    comment: comment
                }
            })
    })

    .then(function(e){
        var html='';
        var ulElent= document.getElementById('comment-box');
        e.comment.forEach(function(comments){
            const a=e.user.find(function(u){
                return u.id === comments.id_user
            })
            html+=`<li>${a.name}: ${comments.content}</li>`
        })
        ulElent.innerHTML=html;
    })

// ----------------------------0000000000---------------------
// Fetch\
var postAPI='https://jsonplaceholder.typicode.com/posts';
fetch(postAPI)
//  tra ve du lieu tra ve
    .then(function(response){
        return response.json();
        // response.json() tra ve 1 promise
        // Json.parse: JSON -> javascrip types
    })
    .then(function(pots){
        console.log(pots)
        var html=pots.map(function(pot){
            return `
                <li>
                    <h2>${pot.title}</h2>
                    <p>${pot.body}</p>
                </li>
            `
        })
        document.getElementById('comment-box').innerHTML=html.join('')
    })
    .catch(function(e){
        console.log(e)
    })

// Json server:API server
var courseAPI='http://localhost:3000/posts'
fetch(courseAPI)
    .then(function(response){
        return response.json();
    })
    .then(function(Course){
        var html=Course.map(function(e){
            return `<li>title: ${e.title}</li>`
        })
        console.log(html.join(''))
    })

// -postman
// CRUD trong back-end
    // -create: tao moi ->POST
    // read: lay du lieu ->GET
    // update: Chinh sua ->PUT/PATCH
    // delete: xoa du lieu ->DELETE
// ----------------------------0000000000---------------------

