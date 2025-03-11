// 장바구니
const basketStarterEl = document.querySelector('header .basket-starter')
const basketEl = basketStarterEl.querySelector('.basket')

basketStarterEl.addEventListener('click', function(event)
{event.stopPropagation()
    if (basketEl.classList.contains('show') ){
        basketEl.classList.remove('show')//hide
    }else{
        basketEl.classList.add('show')//show
    }
})
basketEl.addEventListener('click', function(event){
    event.stopPropagation()
})

window.addEventListener('click', function(){
    basketEl.classList.remove('show')
})


// 검색내용
const headerEl = document.querySelector('header')
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')]
const searchWrapEl = headerEl.querySelector('.search-wrap')
const searchStarterEl = headerEl.querySelector('.search-starter')
const searchCloserEl = searchWrapEl.querySelector('.search-closer')
const searchShadowEl = searchWrapEl.querySelector('.shadow')
const searchInputEl = searchWrapEl.querySelector('input')
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')]

searchStarterEl.addEventListener('click', function(){showSearching()})
searchCloserEl.addEventListener('click', function(){hideSearching()})
searchShadowEl.addEventListener('click', function(){hideSearching()})

function showSearching(){
    headerEl.classList.add('searching')
    document.documentElement.classList.add('fixed')
    headerMenuEls.reverse().forEach(function(el, index){
        el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
        console.log(headerMenuEls.reverse())
    })
    searchDelayEls.forEach(function(el, index){
        el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
    })
    setTimeout(function(){
        searchInputEl.focus()
    }, 600)
}

function hideSearching(){
    headerEl.classList.remove('searching')
    document.documentElement.classList.remove('fixed')
    headerMenuEls.reverse().forEach(function(el, index){
        el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
    })
    searchDelayEls.reverse().forEach(function(el, index){
        el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
    })
     searchDelayEls.reverse()
     searchInputEl.value = ''
}



// 요소의 가시성 관찰 옵저빙
const io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if (!entry.isIntersecting){
            return    
        }
        entry.target.classList.add('show')
    })
})
const infoEls = document.querySelectorAll('.info')
infoEls.forEach(function(el){
    io.observe(el)
})



// paly/pause 메서드는 video요소에서 직접 쓸 수 있는 스크립트 메서드
// 비디오 재생버튼
const video = document.querySelector('.stage video')
const playBtn = document.querySelector('.stage .controller--play')
const pauseBtn = document.querySelector('.stage .controller--pause') 

playBtn.addEventListener('click', function() {
    video.play()
    playBtn.classList.add('hide')
    pauseBtn.classList.remove('hide')
})

pauseBtn.addEventListener('click', function () {
    video.pause()
    playBtn.classList.remove('hide')
    pauseBtn.classList.add('hide')
})