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





