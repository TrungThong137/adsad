const $= document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'TT_Music';

const  heading=$('header h2');
const cdThumb= $('.cd-thumb');
const audio=$('#audio');
const cd=$('.cd');
const player=$('.player')
const playBtn =$('.btn-toggle-play');
const progress=$('#progress');
const btnNext=$('.btn-next');
const btnPrev=$('.btn-prev');
const btnRandom=$('.btn-random');
const repeatBtn=$('.btn-repeat');
const playlist=$('.playlist');

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
    // config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY))|| {} ,

    // setConfig: function(key, value){
    //     this.config[key]=value;
    //     localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    // },

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
            name: 'FLOWER',
            singer: 'JISOO',
            path: './asset/music/yt1s.com - JISOO  꽃FLOWER MV.mp3',
            image: './asset/img/Jisoo.jpg'
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
        },
        {
            name: 'MÃI NHƯ NGÀY HÔM QUA',
            singer: 'Sơn Tùng MTP',
            path: './asset/music/yt1s.com - Như ngày hôm qua  Sơn Tùng MTP  Lâm Remix.mp3',
            image: './asset/img/MTP.jpg'
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
        playlist.innerHTML=html.join('')
    },

    defineProperties: function(){
        Object.defineProperty(this, 'currentSong', {
            get: function(){
                return this.songs[this.currentIndex];
            }
        })
    },

    loadSong: function(){
        heading.innerText = this.currentSong.name;
        cdThumb.style.backgroundImage= `url('${this.currentSong.image}')`;
        audio.src=this.currentSong.path;
    },

    handleEvent: function(){
        // 2. Scroll top
        const width = cd.offsetWidth;
        document.onscroll = function(){
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newWidth= width-scrollTop;
            cd.style.width=newWidth > 0 ? newWidth +'px': 0;
            cd.style.opacity=newWidth/width
        }

        // 3. play/pause/seek
        playBtn.onclick= function(){
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
            rotateCD.play();
        }
        // pause
        audio.onpause = function(){
            app.isPlaying=false;
            player.classList.remove('playing');
            rotateCD.pause();
        }
        // seek
        audio.ontimeupdate=function(){
            if(audio.duration){
                const progressPecent= Math.floor(audio.currentTime/audio.duration*100);
                progress.value=progressPecent;
                
            }
        }
        // xu ly khi tua
        progress.onchange=function(e){
            const seekTime = audio.duration/100 * e.target.value;
            audio.currentTime=seekTime;
        }
        // 4. CD rotate
        const rotateCD= cdThumb.animate([
            {
                transform: 'rotate(360deg)'
            }
        ],{
            duration: 10000,
            iterations: Infinity
        })
        rotateCD.pause();
        // 5. next/prev
        btnNext.onclick=function(){
            if(app.isRandom){
                app.randomSong();
            }else{
                app.nextSong();
            }
            app.render();
            audio.play();
            app.scrollActiveSong();
        }
        // prev
        btnPrev.onclick=function(){
            app.prevSong();
            audio.play();
            app.render();
            app.scrollActiveSong();
        }

        // 6. random
        btnRandom.onclick=function(){
            app.isRandom=!app.isRandom;
            btnRandom.classList.toggle('active', app.isRandom);
        }
        // 7.next/repeat when ended
        repeatBtn.onclick=function(){
            app.isRepeat=!app.isRepeat;
            repeatBtn.classList.toggle('active', app.isRepeat);
        }
        // ended
        audio.onended=function(){
            if(app.isRepeat){
                audio.play();
            }else{
                btnNext.click();
            }
        }
        
        // 10. play song when click
        playlist.onclick=function(e){
            const nodeSong= e.target.closest('.song:not(.active)');
            if(nodeSong || e.target.closest('.option')){
                if(nodeSong){
                    app.currentIndex=Number(nodeSong.dataset.index);
                    app.render();
                    app.loadSong();
                    audio.play();
                }
            }
            if(e.target.closest('.song.active')){
                audio.currentTime=0;
                audio.play();
            }
        }
    },

    randomSong: function(){
        var newIndex;
        do{
            newIndex= Math.floor(Math.random() * this.songs.length);
        }while(this.currentIndex==newIndex)
        this.currentIndex=newIndex;
        this.loadSong();
    },

    nextSong: function(){
        this.currentIndex++;
        if(this.currentIndex>=this.songs.length){
            this.currentIndex=0;
        }
        this.loadSong();
    },

    prevSong: function(){
        this.currentIndex--;
        if(this.currentIndex<=0){
            this.currentIndex=this.songs.length-1;
        }
        this.loadSong();
    },
    // 9. scroll active song into view
    scrollActiveSong: function(){
        setTimeout(()=>{
            $('.active.song').scrollIntoView({
                behavior: 'smooth',
                block: 'end',//start , nearest, end, center
                inline: 'nearest' 
            })
        },200)
    },

    start: function(){
        this.render();
        this.defineProperties();
        this.loadSong();
        this.handleEvent();
    }
}

app.start();
 
