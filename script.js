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
console.log(moreWorks)

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