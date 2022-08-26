// -- Services tabs:

const serviceTabs = document.querySelectorAll('.services-nav-link')
const serviceContent = document.querySelectorAll('.services-content')

serviceTabs.forEach(tab => {
    tab.addEventListener('click', openActiveTab);
});

function openActiveTab(tab) {
    let activeTab = tab.currentTarget;
    let title = activeTab.dataset.title

    serviceTabs.forEach(tab => {
        tab.classList.remove('active')
    });

    serviceContent.forEach(tab => {
        tab.classList.remove("active");
     });

    document.querySelector("#" + title).classList.add("active");

    activeTab.classList.add('active')
}




// -- Amazing Work tabs:

const workTabs = document.querySelectorAll('.amazing-work-tab')
const workTamplates = document.querySelectorAll('.aw-template')

workTabs.forEach(tab => {
    tab.addEventListener('click', workActiveTab);
});

function workActiveTab(tab) {
    let activeTab = tab.currentTarget;
    let title = activeTab.dataset.title

    workTabs.forEach(tab => {
        tab.classList.remove('active')
    });

    workTamplates.forEach(tab => {
        tab.classList.remove("active");
     });


    workTamplates.forEach(cover => {
        if (cover.classList.contains(title)) {
        cover.classList.add('active')
        loadMoreBtn.classList.add('hiden')
        } else {
            cover.classList.add('hiden')
        }
    });

    activeTab.classList.add('active')
}

//-- Cover Bords:


const coverBoards = document.querySelectorAll('.aw-template') 

//JQ Solution:
/*

$(document).ready(function(){   
    $(coverBoards).each(function (index, value){
        $(this).mouseenter(function(){
            $(this).html(`<div class="work-hover-cover">
                    <div>
                   <button class="chain-btn"><img src="./img/elements/chain.svg" alt="chain"></button>
                     <button class="stop-btn"><img src="./img/elements/stop.svg" alt="stop"></button>
                    </div>
                     <span>Creative Design</span>
                   <p></p>
                  </div> `)
            });
          $(this).mouseleave(function(){
            $(this).html('')
              })  
          });
      });

*/


//Pure JS Solution:

coverBoards.forEach(cover => {
    cover.addEventListener('mouseenter', function(event) {

        let target = event.target
        let titleList = target.classList
        let title = titleList[1]
        target.innerHTML = `<div class="work-hover-cover">
        <div>
         <button class="chain-btn"><img src="./img/elements/chain.svg" alt="chain"></button>
         <button class="stop-btn"><img src="./img/elements/stop.svg" alt="stop"></button>
        </div>
        <span>Creative Design</span>
        <p>${title}</p>
      </div> `
    })


    cover.addEventListener('mouseout', function(event) {
        console.log(event.target)
    }) 
})



// --  Load More Function:

//JQ Solution:

/*

$(document).ready(function () {
    $('.amazing-work-templates div:lt(12)').show();
    let items =  24;
    let shown =  12;
    $('.load-more-btn').click(function () {
        shown = $('.amazing-work-templates div:visible').length+12;
        if(shown < items) {
          $('.amazing-work-templates div:lt('+shown+')').show("slow", function showNext() {
            $( this ).next( "div" ).show( "slow", showNext );
          });
        } else {
          $('.amazing-work-templates div:lt('+items+')').show("slow", function showNext() {
            $( this ).next( "div" ).show( "slow", showNext );
          });
          $('.load-more-btn').hide();
        }
    });
});

*/

//Pure JS Solution:

const loadMoreBtn = document.querySelector('.load-more-btn');
const moreWorks = document.querySelectorAll('.aw-template')

loadMoreBtn.addEventListener('click', () => {
    loadMoreBtn.classList.add('loading-btn')
    loadMoreBtn.classList.remove('btn', 'load-more-btn')
    
    setTimeout(function() {
        
        moreWorks.forEach(element => {
            element.classList.remove('hiden')
        });
        loadMoreBtn.classList.add('hiden')
    }, 1000);
});

// -- Feedback Carousel:

const carousel = document.querySelector('.carousel-wrapper');
const arrows = document.querySelectorAll('[data-carousel-arrows]');
const carouselDots = document.querySelectorAll('[data-min-img]');
let slideIndex = 0;


// - add active slide attribute:
function activateSlide (slides) {
    slides.forEach(slide => {
        slide.removeAttribute('data-active-slide');
    });
    slides[slideIndex].setAttribute('data-active-slide', true);
}
// - add active img-dots attribute:
function activateDots(dots) {
    dots.forEach(dot => {
        dot.removeAttribute('data-active-dot')
    })
    dots[slideIndex].setAttribute('data-active-dot', true);
}
// - add or remove disabled attribute to the arrows:
function disableArrows(slides, nextBtn, prevBtn) {
    let nextBtnBooleanValue = slideIndex >= slides.length - 1 ? true : false;
    let prevBtnBooleanValue = slideIndex <= 0 ? true : false;
    nextBtnBooleanValue ? nextBtn.setAttribute('disabled', 'true') : nextBtn.removeAttribute('disabled');
    prevBtnBooleanValue ? prevBtn.setAttribute('disabled', 'true') : prevBtn.removeAttribute('disabled');
}
// - hide or show slides function:
function showslides(carouselWrapper, dots) {
    const slides = carouselWrapper.querySelectorAll('.carousel-item');

    const nextBtn = carouselWrapper.querySelector('.next');
    const prevBtn = carouselWrapper.querySelector('.prev');
    disableArrows(slides, nextBtn, prevBtn)
    activateSlide (slides);
    activateDots(dots);

}
// - navigate next or prev slide function:
function nextOrPrevSlide (dir) {
    if (dir === 'next') {
        slideIndex++;
        showslides(carousel, carouselDots);
    } else {
        slideIndex--;
        showslides(carousel, carouselDots);
    }
}


function currentSlide(n) {
    slideIndex = n - 1;
    showslides(carousel, carouselDots);
}
// - handles functions:
function handleArrowClickEvent(arrowBtn) {
    arrowBtn.forEach(arrow => {
        arrow.addEventListener('click', () => {
            if (arrow.dataset.dir === 'next') {
                nextOrPrevSlide('next');
            } else {
                nextOrPrevSlide('prev')
            }
        })
    });
}

function handleDotsClickEvent(dots) {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide(parseInt(dot.dataset.dotsIndex))
        })
    })
}

function handleClickEvents() {
    handleDotsClickEvent(carouselDots);
    handleArrowClickEvent(arrows);
    showslides(carousel, carouselDots);
}

handleClickEvents();






