const $=document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);

const playlist=$('.playlist');
const NameSong=$('header h2');
const cd=$('.cd');
const cdThumb=$('.cd-thumb');
const audio=$('#audio');
const player=$('.player')
const playBtn=$('.btn-toggle-play');
const progress=$('.progress');
const btnNext=$('.btn-next');
const btnPrev=$('.btn-prev');
const btnRandom=$('.btn-random');
const btnRepeat=$('.btn-repeat');


// cac buoc can lam:
/*
    1. render songs 
    2. Scroll top
    3. play/pause/seek
    4. CD rotate
    5. next/prev
    6. random
    7.next/repeat when ended
    8. active song
    9. scroll active song into view
    10. play song when click
*/

const app={
    currentIndex: 0,

    isPlaying: false,
    isRandom: false,
    isRepeat: false,

    songs: [
        {
            name: 'Chỉ Bằng Cái Gật Đầu',
            singer: 'VN',
            path: './asset/music/chi-bang-cai-gat-dau-heineken-remix-yan-nguyen-nhac-edm-tik-tok-gay-nghien.mp3',
            image: './asset/img/ccd.jpg'
        },
        {
            name: 'Sunny-Hako',
            singer: 'TT',
            path: './asset/music/sunny-ban-edm-thu-gian-giai-nghiet.mp3',
            image: './asset/img/Sunny.jpg'
        },
        {
            name: 'Mashup',
            singer: 'none',
            path: './asset/music/chi-muon-ben-em-luc-nay-remix-top-20-ban-nhac-remix.mp3',
            image: './asset/img/masup.jpg'
        },
        {
            name: 'BOOMBAYAH',
            singer: 'Black-Pink',
            path: './asset/music/yt1s.com - BLACKPINK  붐바야BOOMBAYAH MV.mp3',
            image: './asset/img/images.jpg'
        },
        {
            name: 'NÓI HOẶC KHÔNG NÓI',
            singer: 'AMEE',
            path: './asset/music/yt1s.com - AMEE x SKIN AQUA TONE UP UV  NÓI HOẶC KHÔNG NÓI  Official Music Video.mp3',
            image: './asset/img/AMEE.webp'
        }
    ],

    // 1. render songs 
    render: function(){
        const html=this.songs.map((song,index)=>{
            return `
                <div class="song ${this.currentIndex==index ? 'active' : ''}" data-index="${index}">
                    <div class="thumb" style="background-image: url('${song.image}')"></div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option"> <i class="fas fa-ellipsis-h"></i></div>
                </div>
            `
        })
        playlist.innerHTML=html.join('');
    },

    defineProperties: function(){
        Object.defineProperty(this, 'currentSong', {
            get: function(){
                return this.songs[this.currentIndex];
            }
        })
    },

    updateSong: function(){
        NameSong.innerText=this.currentSong.name;
        cdThumb.style.backgroundImage=`url(${this.currentSong.image})`;
        audio.src=this.currentSong.path;
    },

    handleEvent: function(){
        // 2. Scroll top
        const width= cd.offsetWidth;
        document.onscroll=function(){
            const scrolltop=window.screenY || document.documentElement.scrollTop;
            const newWidth=width-scrolltop;
            cd.style.width=newWidth > 0 ? newWidth+'px' :0;
            cd.style.opacity=newWidth/width
        }
        // 3. play/pause/seek
        playBtn.onclick=function(){
            if(app.isPlaying){
                audio.pause();
            }else{
                audio.play();
            }
        }
        // play
        audio.onplay=function(){
            app.isPlaying=true;
            player.classList.add('playing');
            cdroate.play();
        }
        // pause
        audio.onpause=function(){
            app.isPlaying=false;
            player.classList.remove('playing')
            cdroate.pause();
        }
        // seek
        audio.ontimeupdate=function(e){
            if(audio.duration){
                const percent=Math.floor(audio.currentTime/audio.duration*100)
                progress.value=percent
            }
        }

        progress.onchange=function(e){
            const time= audio.duration/100*e.target.value;
            audio.currentTime=time;
        }
        // 4. CD rotate
        const cdroate=cdThumb.animate([
            {
                transform: 'rotate(360deg)'
            }
        ],{
            duration: 10000,
            iterations: Infinity
        })
        cdroate.pause();
        // 5. next/prev
        // next
        btnNext.onclick=function(){
            if(app.isRandom){
                app.randomSong();
            }else{
                app.nextSong();
            }
            audio.play();
            app.render();
            app.scrollActiveSong();
        }
        // prev
        btnPrev.onclick=function(){
            if(app.isRandom){
                app.randomSong();
            }else{
                app.prevSong();
            }
            audio.play();
            app.render();
            app.scrollActiveSong();
        }
    //     6. random
        btnRandom.onclick=function(){
            app.isRandom=!app.isRandom;
            btnRandom.classList.toggle('active', app.isRandom);
        }
    // 7.next/repeat when ended
        btnRepeat.onclick=function(){
            app.isRepeat=!app.isRepeat;
            btnRandom.classList.toggle('active', app.isRepeat);
        }

        audio.onended=function(){
            if(app.isRepeat){
                audio.play();
            }else{
                btnNext.click();
            }
        }
        // 10. play song when click
        playlist.onclick=function(e){
            const songNode = e.target.closest('.song:not(.active)');
            const option=e.target.closest('.option');
            if(songNode || option){
                if(songNode){
                    app.currentIndex=Number(songNode.dataset.index);
                    app.updateSong();
                    app.render();
                    audio.play();
                }
            }
            if(e.target.closest('.song.active')){
                audio.play();
                audio.currentTime=0;
            }
        }
    },
    // 9. scroll active song into view
    scrollActiveSong: function(){
        setTimeout(()=>{
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest'
            })
        },200)
    },

    nextSong: function(){
        this.currentIndex++;
        if(this.currentIndex>=this.songs.length){
            this.currentIndex=0;
        }
        this.updateSong();
    },

    prevSong: function(){
        this.currentIndex--;
        if(this.currentIndex<=0){
            this.currentIndex=this.songs.length-1;
        }
        this.updateSong();
    },

    randomSong: function(){
        let index;
        do{
            index=Math.floor(Math.random() * this.songs.length);
        }while(index==this.currentIndex)
        this.currentIndex=index;
        this.updateSong();
    },

    start: function(){
        this.render();
        this.defineProperties();
        this.updateSong()
        this.handleEvent();
    }
}

app.start();