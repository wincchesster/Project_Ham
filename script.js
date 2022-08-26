// ------------------------------------------- Services tabs:

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




// -------------------------------------------Amazing Work tabs:

const workTabs = document.querySelectorAll('.amazing-work-tab')
const workTamplates = document.querySelectorAll('.aw-template')

workTabs.forEach(tab => {
    tab.addEventListener('click', openActiveTab2);
});

function openActiveTab2(tab) {
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

const coverBoards = document.querySelectorAll('.aw-template') 

coverBoards.forEach(cover => {
    cover.addEventListener('mouseenter', function(event) {

        let target = event.target
        let titleList = target.classList
        let title = titleList[1]
        let targetContent = target.outerHTML
        target.innerHTML = `<div class="work-hover-cover">
        <div>
         <button class="chain-btn"><img src="./img/elements/chain.svg" alt="chain"></button>
         <button class="stop-btn"><img src="./img/elements/stop.svg" alt="stop"></button>
        </div>
        <span>Creative Design</span>
        <p>${title}</p>
      </div> `
    })
})



// ---------------------------------------------Load More Function:



// $(document).ready(function () {
//     $('.amazing-work-templates div:lt(12)').show();
//     let items =  24;
//     let shown =  12;
//     $('.load-more-btn').click(function () {
//         shown = $('.amazing-work-templates div:visible').length+12;
//         if(shown < items) {
//           $('.amazing-work-templates div:lt('+shown+')').show("slow", function showNext() {
//             $( this ).next( "div" ).show( "slow", showNext );
//           });
//         } else {
//           $('.amazing-work-templates div:lt('+items+')').show("slow", function showNext() {
//             $( this ).next( "div" ).show( "slow", showNext );
//           });
//           $('.load-more-btn').hide();
//         }
//     });
// });

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



// const arrows = document.querySelectorAll('.arrow-btn');
// const minAvatar = document.querySelectorAll('.team-intro-min-case');



// arrows.forEach(arrow => {
//     arrow.addEventListener('click', function(event) {

//         if (event.target.classList.contains('left')) {
//             minAvatar.forEach(img => {
//                 if (img.classList.contains('active') && img.previousElementSibling !== null) {
//                     img.previousElementSibling.classList.add('active')
//                 } 
//                 else if  (img.classList.contains('active') && img.previousElementSibling === null) {
//                     let lastImgInt = img.parentNode.children.length;
//                     let lastImg = img.parentNode.children[3]
//                     lastImg.classList.add('active')
//                 }
//                 img.classList.remove('active')
//             })
//         }  
//         if (event.target.classList.contains('right')) {
//             minAvatar.forEach(img => {
//                 if (img.classList.contains('active') && img.nextElementSibling !== null) {
//                     console.log(img.nextElementSibling)
//                     img.nextElementSibling.classList.add('active')
//                 } 
//                 else if  (img.classList.contains('active') && img.nextElementSibling === null) {
//                     let firstImgInt = img.parentNode.children.length;
//                     let firstImg = img.parentNode.children[0]
//                     firstImg.classList.add('active')
//                 }
//                 img.classList.remove('active')
//             })
//         }
//     })
    
// })

/////////////////////////////test


const carousel = document.querySelector('[js-carousel-wrapper]');
const arrows = document.querySelectorAll('[data-carousel-arrows]');
const carouselDots = document.querySelectorAll('[js-data-dots]');
const slideNumber = document.querySelector('[js-slide-number-text]');
let slideIndex = 0;


// function to add active slide attribute
function activateSlide (slides) {
    slides.forEach(slide => {
        slide.removeAttribute('data-active-slide');
    });
    slides[slideIndex].setAttribute('data-active-slide', true);
}
// function to add active dots attribute
function activateDots(dots) {
    dots.forEach(dot => {
        dot.removeAttribute('data-active-dot')
    })
    dots[slideIndex].setAttribute('data-active-dot', true);
}
// Below function will add or remove disabled attribute to the arrows
function disableArrows(slides, nextBtn, prevBtn) {
    let nextBtnBooleanValue = slideIndex >= slides.length - 1 ? true : false;
    let prevBtnBooleanValue = slideIndex <= 0 ? true : false;
    nextBtnBooleanValue ? nextBtn.setAttribute('disabled', 'true') : nextBtn.removeAttribute('disabled');
    prevBtnBooleanValue ? prevBtn.setAttribute('disabled', 'true') : prevBtn.removeAttribute('disabled');
}
// helper function to hide or show slides
function showslides(carouselWrapper, dots) {
    const slides = carouselWrapper.querySelectorAll('[js-carousel-item]');
    // Below commented code need to added only if we no need to disabled arrow once they reached to end
    // if (slideIndex > slides.length - 1) slideIndex = 0;
    // if (slideIndex < 0) slideIndex = slides.length - 1;
    // Below code need to added only if we need to disable the arrows once they reached to end
    const nextBtn = carouselWrapper.querySelector('.next');
    const prevBtn = carouselWrapper.querySelector('.prev');
    disableArrows(slides, nextBtn, prevBtn)
    activateSlide (slides);
    activateDots(dots);
    addCurrentSlideNumber(slides, slideNumber);
}
// function to navigate next or prev slide
function nextOrPrevSlide (dir) {
    if (dir === 'next') {
        slideIndex++;
        showslides(carousel, carouselDots);
    } else {
        slideIndex--;
        showslides(carousel, carouselDots);
    }
}
// function to activate current clicked dot vs current slide
function currentSlide(n) {
    slideIndex = n - 1;
    showslides(carousel, carouselDots);
}
// function to handle arrows click event
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
// function to handle dots click event
function handleDotsClickEvent(dots) {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide(parseInt(dot.dataset.dotsIndex))
        })
    })
}
// handle all the click events
function handleClickEvents() {
    handleDotsClickEvent(carouselDots);
    handleArrowClickEvent(arrows);
    // We need to call this function here only if we need to disable the prev arrow on-load
    showslides(carousel, carouselDots);
}
handleClickEvents();






