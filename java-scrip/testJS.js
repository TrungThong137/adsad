
// // // bai thuc hanh cach 1:
// // function Validator(options){
// //     function getParent(inputElement, selector){
// //         while(inputElement.parentElement){
// //             if(inputElement.parentElement.matches(selector)){
// //                 return inputElement.parentElement;
// //             }
// //             inputElement=inputElement.parentElement;
// //         }
// //     }
// //     // khai bao bien luu rules
// //     var ruleselector={};
// //     // lay ra id cua form
// //     var formElement=document.querySelector(options.form);
// //     // khoi tao ham Validate() de dung cho viec bao loi
// //     function Validate(inputElement, e){
// //         // goi toi class loi the span form-message
// //         var errorElement=getParent(inputElement,options.dadElement).querySelector(options.errorMessage);
// //         // lay du lieu ham trong test
// //         // input.value lay du lieu trong trong the input
// //         // errormsg=e.test(inputElement.value)
// //         var errorMsg;

// //         // lay rules cua selector
// //         var rules= ruleselector[e.Selector];
// //         // lap qua tung rules va kiem tra
// //         for(var i=0; i<rules.length; i++){
// //             switch(inputElement.type){
// //                 case 'radio':
// //                 case 'checkbox':
// //                     errorMsg=rules[i](
// //                         formElement.querySelector(e.Selector + ':checked')
// //                     );
// //                     break;
// //                 default:
// //                     errorMsg=rules[i](inputElement.value);
// //             }
// //             if(errorMsg) break;
// //         }

// //         if(errorMsg){
// //             errorElement.innerText=errorMsg;
// //             getParent(inputElement, options.dadElement).classList.add('invalid');
// //         }else{
// //             errorElement.innerText='';
// //             getParent(inputElement, options.dadElement).classList.remove('invalid');
// //         }

// //         // tra ve true neu khong co loi
// //         return !errorMsg;
// //     }

// //     if(formElement){
// //         // khi submit form
// //         formElement.onsubmit=function(e){
// //             // bo di ham mac dinh
// //             e.preventDefault();

// //             var isValid=true;

// //             // thuc hien lap qua tung rule va Validate
// //             options.rules.forEach(function(rule){
// //                 var inputElement=formElement.querySelector(rule.Selector);
// //                 var isTrue=Validate(inputElement,rule);
// //                 if(!isTrue){
// //                     isValid=false;
// //                 }
// //             });
// //             // lay giu lieu duoc nhap
// //             if(isValid){
// //                 // truong hop submit vs javascrip
// //                 if(typeof options.onsubmit === 'function'){

// //                     var enableInput = formElement.querySelectorAll('[name]');
// //                     // nodeList de lay ra phai dung reduce();
// //                     // enable la 1 nodeList dung Array.form de chuyen no qua 1 Array
// //                     var formValues = Array.from(enableInput).reduce(function (values, input){
// //                         switch(input.type){
// //                             case 'radio':
// //                                 values[input.name] = formElement.querySelector('input[name="'+input.name +'"]:checked').value;
// //                                 break;
// //                             case 'checkbox':
// //                                 if(!input.matches(':checked')) {
// //                                     return values;
// //                                 }
// //                                 if(!Array.isArray(values[input.name])){
// //                                     values[input.name]=[input.value];
// //                                 }else{
// //                                     values[input.name].push(input.value);
// //                                 }
// //                                 break;
// //                             case 'file':
// //                                 values[input.name]= input.files;
// //                                 break;
// //                             default:
// //                                 values[input.name]= input.value;  
// //                         }
// //                         return values;
// //                     }, {});

// //                     options.onsubmit(formValues)
// //                 }
// //                 // submit vs ham hanh vi mac dinh
// //                 else{
// //                     formValues.submit();
// //                 }
// //             }
// //         }

// //         // duyet tung thanh phan co trong rules
// //         options.rules.forEach(function(e){
// //             // luu lai cac rules cho mooi input
// //             if(Array.isArray(ruleselector[e.Selector])){
// //                 ruleselector[e.Selector].push(e.test);
// //             }else{
// //                 ruleselector[e.Selector] = [e.test];
// //             }
            
// //             // lay Id cua the duoc chon trong truong hop form co radio hoac checkbox
// //             var inputElements=formElement.querySelectorAll(e.Selector);

// //             Array.from(inputElements).forEach(function(inputElement){
// //                 // xu ly khi onblur
// //                 inputElement.onblur=function(){
// //                     // lay du lieu value cua the input: inputElement.value 
// //                     Validate(inputElement,e);
// //                 }

// //                 // xu ly khi user nhap lai vao the input
// //                 inputElement.oninput=function(){
// //                     var errorElement=getParent(inputElement, options.dadElement).querySelector(options.errorMessage);
// //                     errorElement.innerText='';
// //                     getParent(inputElement, options.dadElement).classList.remove('invalid');
// //                 }
// //             });
// //         });
// //     }
// // }

// // // dinh nghia rules
// // Validator.isRequired=function(value){
// //     return {
// //         Selector: value,
// //         test: function(e){
// //             // trim de loai bo cac dau cach
// //             return e ? undefined : 'Vui Long Nhap Truong Nay'
// //         }
// //     };
// // }

// // Validator.isEmail=function(value){
// //     return{
// //         Selector: value,
// //         // e la tham so duoc truyen vao de kiem tra the input dc nhap ko
// //         test: function(e){
// //             // kiem tra mail co hop le ko phai co @ va .com
// //             return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e) ? undefined : 'Email Chua hop le'
// //         }
// //     };
// // }

// // Validator.minLength=function(value, min){
// //     return{
// //         Selector: value,
// //         test: function(e){
// //             return e.length>=min ? undefined : `toi thieu phai nhap ${min} ki tu`
// //         }
// //     };
// // }

// // Validator.isComfirmed=function (value, getConfirm, message){
// //     return{
// //         Selector: value,
// //         test: function(e){
// //             return e==getConfirm() ? undefined : message||'Gia tri nhap vao khong hop le'
// //         }
// //     };
// // }




// // cach2 >????????--------------------------------------------------
// function Validator(idForm){

//     var _this=this;

//     var a={};

//     var rulesForm = {
//         required: function(e){
//             return e ? undefined : 'Chưa Nhập Trường Này';
//         },
//         email: function(e){
//             return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e) ? undefined : 'Email không hợp lệ';
//         },
//         min: function(e){
//             return function(f){
//                 return f.length>=e ? undefined : `Mật Khẩu ít nhất ${e} kí tự`;
//             }
//         }
//     }

//     function getParent(inputElement, father){
//         while(inputElement.parentElement){
//             if(inputElement.parentElement.matches(father)){
//                 return inputElement.parentElement;
//             }
//             inputElement=inputElement.parentElement;
//         }
//     }

//     var formElement=document.querySelector(idForm);
//     if(formElement){
//         var inputElements=formElement.querySelectorAll('[name][rules]');
//         for(var inputElement of inputElements){
//             var getAtb = inputElement.getAttribute('rules');
//             var rules = getAtb.split('|');
//             for(var rule of rules){
//                 var hasinclude= rule.includes(':');
//                 var infor;
//                 if(hasinclude){
//                     infor = rule.split(':');
//                     rule=infor[0];
//                 }

//                 var func = rulesForm[rule];
//                 if(hasinclude){
//                     func = func(infor[1]);
//                 }

//                 if(Array.isArray(a[inputElement.name])){
//                     a[inputElement.name].push(func);
//                 }else{
//                     a[inputElement.name] = [func];
//                 }
//             }
//             inputElement.onblur = Validate; 
//             inputElement.oninput=clearValidate;
//         }
       
//         function Validate(e){
//             var d = getParent(e.target, '.form');
//             var errorElement = d.querySelector('.form-message');
//             var errorMsg;
//             var rules = a[e.target.name];   
//             for( var rule of rules){
                
//                 errorMsg=rule(e.target.value);
//                 if(errorMsg) break;
//             }
            
//             if(errorMsg){
//                 errorElement.innerText=errorMsg;
//                 d.classList.add('invalid');
//             }else{
//                 errorElement.innerText='';
//                 d.classList.remove('invalid');
//             }
//             return !errorMsg;
//         }

//         function clearValidate(e){
//             var d = getParent(e.target, '.form');
//             var errorElement = d.querySelector('.form-message');
//             errorElement.innerText='';
//             d.classList.remove('invalid');
//         }
//     }
//     formElement.onsubmit = function(e){
//         e.preventDefault();
//         var enable=formElement.querySelectorAll('[name][rules]');
//         var isTrue = true;
//         for(var inputElement of enable){
//             if(!Validate({target: inputElement})){
//                 isTrue =false;
//             }
//         }
//         if(isTrue){
//             if(typeof _this.onsubmit === 'function'){
//                 var input = formElement.querySelectorAll('[name]');
//                 var valueReturn= Array.from(input).reduce(function(a,b){
//                     switch(b.type){
//                         case 'radio':
//                             a[b.name]=formElement.querySelector('input[name="'+b.name+'"]:checked').value;
//                             break;
//                         case 'checkbox':
//                             if(!b.matches(':checked')){
//                                 return a;
//                             }
//                             if(Array.isArray(a[b.name])){
//                                 a[b.name].push(b.value);
//                             }else{
//                                 a[b.name]=[b.value];
//                             }
//                         default:
//                             a[b.name]=b.value;
//                     }
//                     return a;
//                 },{});
//                 _this.onsubmit(valueReturn);
//             }else{
//                 formElement.onsubmit();
//             }
//         }
//     }
// }

// function testJS(log, type = 'log'){
//     console[type](log)
// }

// export default testJS;

// <!-- 00000000000000000000000000000000000000000000000000000000000000 -->
function toast({
    title='', message='', type='infor', duration=3000
}, idNode){
    const main = document.querySelector(idNode);
    if(main){
        const toast = document.createElement('div');
        toast.classList.add('toast', `toast--${type}`);
        var delay=(duration/1000).toFixed(2);
        toast.style.animation=`leftSlide ease 0.3s, fadeout linear 1s ${delay}s forwards`;
        const icons={
                success: 'fas fa-check-circle',
                info: 'fas fa-info-circle',
                warning: 'fas fa-exclamation-circle',
                error: 'fas fa-exclamation-circle' 
        };

        var a=setTimeout(function(e){
            main.removeChild(toast)
        }, duration+1000);

        toast.onclick=function(e){
            if(e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(a);
            }
        }

        var icon=icons[type];
        toast.innerHTML=`
            <i class="toast__icon ${icon}"></i>
            <div class="body">
                <h3>${title}</h3>
                <p>${message}</p>
            </div>
            <i class="toast__close fa fa-times" aria-hidden="true"></i>
        `;
        main.appendChild(toast)
    }
}