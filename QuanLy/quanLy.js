

var courseApi='http://localhost:3000/comments';

function start(){
    getCourse(renderCourse);

    handleCreate();
}

start();

function getCourse(callback){
    fetch(courseApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function handleDelete(id){
    var options={
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(courseApi+'/'+id, options)
        .then(function (response){
            return response.json();
        })
        .then(function(){
            var a=document.querySelector('.course-'+id);
            if(a){
                a.remove();
            }
        })
}

function handleUpdate(id){
    var data=getData();
    var options={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi+'/'+id, options)
        .then(function(response){
            return response.json();
        })
        .then(function(){
            getCourse(renderCourse);
        })
}

function renderCourse(course){
    var html=course.map(function(e){
        return `<li class="course-${e.id}">
            <h4>${e.body}</h4>
            <p>${e.postID}</p>
            <button onclick="handleDelete(${e.id})">Xoa &times;</button>
            <button onclick="handleUpdate(${e.id})">Sua &check;</button>
        </li>`
    })
    var ul= document.querySelector('#course-box')
    ul.innerHTML=html.join('');
}

function createCourse(data,callback){
    var options={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options)
        .then(function (response){
            return response.json();
        })
        .then(callback)
}

function getData(){
    var body=document.querySelector('input[name="body"]').value;
    var postID=document.querySelector('input[name="id"]').value;
    var data={
            body: body,
            postID: postID
    }
    return data;
}

function handleCreate(){ 
    var button = document.querySelector('#create');
    button.onclick= function(){
        createCourse(getData(),function(){
            getCourse(renderCourse);
        })
    }
    
}
// ------------------------------------------------------------------

const $= document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);

const tabs= $$('.tab-item');
const panes= $$('.tab-pane');

const tabActive=$('.tab-item.active');
const line=$('.tabs .line');
line.style.left = tabActive.offsetLeft +'px'
line.style.width= tabActive.offsetWidth +'px'

for(let i=0; i<tabs.length ; i++){
    tabs[i].setAttribute('data-index',i);
}

const app={
    isOnclick: false,
    currentIndex: 0,
    istrue: 0,

    click: function(){
        tabs.forEach((tab,index)=>{
            tab.onclick=function(e){
                app.isOnclick=true;
                const a=e.target.closest('.tab-item');
                app.currentIndex=Number(a.dataset.index);
                app.next()
                $('.tab-item.active').classList.remove('active');
                $('.tab-pane.active').classList.remove('active');
                tab.classList.add('active');
                panes[index].classList.add('active');
                line.style.left= tab.offsetLeft +'px';
                line.style.width=tab.offsetWidth +'px';
            }
        })
    },

    next: function(){
        if(this.isOnclick){
            let i=this.currentIndex+1;
            a=setInterval(function(){
                if(this.currentIndex!=this.istrue){
                    console.log(this.currentIndex)
                    this.end();
                } 
            },2000)
        }
    },

    end: function(){
        console.log(this.currentIndex)
    },

    start: function(){
        this.click();
    }
}
app.start();
function sleep(ms){
        return new Promise(function (resolve){
            setTimeout(resolve,ms);
        });
    }
    
    sleep(3000)
        .then(function(){
            console.log(1);
            return sleep(1000);
        })
// let i=1;
// setInterval(function(){
    
//     $('.tab-item.active').classList.remove('active');
//     $('.tab-pane.active').classList.remove('active');
//     tabs[i].classList.add('active');
//     panes[i].classList.add('active');
//     line.style.left= tabs[i].offsetLeft +'px';
//     line.style.width=tabs[i].offsetWidth +'px';
//     i++;
//     if(i>=tabs.length){
//         i=0;
//     }    
// },2000)

// ------------------------------------------------------------------
