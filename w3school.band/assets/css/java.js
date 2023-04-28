function Validator(options){
    console.log(document.querySelector(options.form))
    var formElement= document.querySelector(options.form);
    var a={};

    function Validate(inputElement, rule){
        var errorElement= inputElement.parentElement.querySelector(options.errorMessage);
        var errorMsg;

        var rules=a[rule.selection]
        for(var i=0; i<rules.length; i++){
            errorMsg= rules[i](inputElement.value);
            if(errorMsg) break;
        }
        if(errorMsg){
            errorElement.innerText=errorMsg;
            inputElement.parentElement.classList.add('invalid');
        }else{
            errorElement.innerText='';
            inputElement.parentElement.classList.remove('invalid');
        }
        return !errorMsg;
    }

    formElement.onsubmit= function(e){  
        e.preventDefault();
        var istrue=true;

        options.rules.forEach(function(rule){
            var inputElement= formElement.querySelector(rule.selection);
            var a=Validate(inputElement,rule);
            if(!a){
                istrue=false;
            }
        });

        if(istrue){
            var inputForm= formElement.querySelectorAll('[name]');
            var formValues= Array.from(inputForm).reduce(function(a,b){
                a[b.name]=b.value;
                return a;
            },{});

            options.onsubmit(formValues);
        }
    }

    if(formElement){
        options.rules.forEach(function (rule){
            if(Array.isArray(a[rule.selection])){
                a[rule.selection].push(rule.test);
            }else{
                a[rule.selection]= [rule.test];
            }

            var inputElement= formElement.querySelector(rule.selection);
            if(inputElement){
                inputElement.onblur= function (){
                    Validate(inputElement,rule);
                }

                inputElement.oninput=function(){
                    var errorElement= inputElement.parentElement.querySelector(options.errorMessage);
                    errorElement.innerText='';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}

Validator.isRequired= function(value){
    return{
        selection: value,
        test: function(e){
            return e.trim() ? undefined : 'Chua Nhap Truong Nay'
        }
    }
}

Validator.isEmail=function(value,message){
    return{
        selection: value,
        test: function(e){
            var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(e) ? undefined : message
        }
    }
}

