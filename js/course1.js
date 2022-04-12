var showAndHideImg = document.querySelector('.shImg')
var imgCourse = document.querySelectorAll('.imgCourse')

// var  categoryVideoTitle = document.querySelectorAll('.groupTitle')
// for(let i=0;i< categoryVideoTitle.length;i++) {
//     openVideo[i].addEventListener('click', function() {
//         var a = document.querySelector('.groupVideo')
        
//             a.classList.toggle('open')
        
//     })
// }

var a = document.querySelector('.groupVideo')


function check() {
    var totalCheckbox = document.querySelectorAll('input[type="checkbox"]:checked').length;
    var a = document.querySelector('.countCourse').textContent = totalCheckbox + '/8';
    console.log(a)
}
// console.log(showAndHideImg.textContent)
// imgCourse[0].classList.add('hiddenImg')
    showAndHideImg.addEventListener('click',function() {
        for(let i =0;i<imgCourse.length;i++) {
            imgCourse[i].classList.toggle('hidden') 
        } 
        if(showAndHideImg.textContent == 'Ẩn hình thu nhỏ') {
            showAndHideImg.textContent = 'Hiện hình thu nhỏ'
        } else {
            showAndHideImg.textContent = 'Ẩn hình thu nhỏ'
        }
    })

// function myFunction() {
//     var showItem = document.getElementById('show')
//     if(showItem.style.display == 'none') {
//         showItem.style.display = 'block';
   
//     } else {
//         showItem.style.display = 'none'
//     }
// }
var categoryGroupTitle = document.querySelectorAll('.groupTitle');
var allGroupVideo = document.querySelectorAll('.groupVideo_1')

console.log(categoryGroupTitle)
console.log(allGroupVideo)

for(let i =0; i<categoryGroupTitle.length;i++) {
    categoryGroupTitle[i].addEventListener('click', 
    filterVideos.bind(this, categoryGroupTitle[i]));
}
function filterVideos(item) {
    changeActive(item);
        for(let i =0;i<allGroupVideo.length;i++) {
            if(allGroupVideo[i].classList.contains(item.attributes.id.value)) {
              
                        allGroupVideo[i].classList.toggle('open')
                
    
            } 
            // else {
            //     allGroupVideo[i].style.display = 'block';
            // }
        }
        console.log(item.attributes.id.value)
        // console.log(item)
    
}
function changeActive(activeItem) {
    for(let i =0; i<categoryGroupTitle.length;i++) {
        categoryGroupTitle[i].classList.remove('activeTitleVideo')
    }
    activeItem.classList.add('activeTitleVideo');
}


var categoryTitle = document.querySelectorAll('.contentCourse');
var allVideo = document.querySelectorAll('.all')
// console.log(categoryTitle)
// console.log(allVideo)
for(let i =0; i<categoryTitle.length;i++) {
    categoryTitle[i].addEventListener('click', 
    filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item) {
    changeActivePosition(item);
        for(let i =0;i<allVideo.length;i++) {
            if(allVideo[i].classList.contains(item.attributes.id.value)) {
                allVideo[i].style.display = 'block';
            } else {
                allVideo[i].style.display = 'none';
            }
        }
        // console.log(item.attributes.id.value)
        console.log(item)
    
}
function changeActivePosition(activeItem) {
    for(let i =0; i<categoryTitle.length;i++) {
        categoryTitle[i].classList.remove('active')
    }
    activeItem.classList.add('active');
}
var darkmode = JSON.parse(localStorage.getItem('darkmode'));
var detailCourse = document.querySelector('#detailCourse');
var groupTitle = document.querySelectorAll('.groupTitle');

var heading = document.querySelector('#detailCourse .heading')
if (darkmode == 0) {
    heading.style.backgroundColor = '#404040';
    detailCourse.parentElement.style.backgroundColor = 'white';
    detailCourse.parentElement.style.color = 'black';
    groupTitle.forEach(function(item) {
        item.style.backgroundColor = '#f7f8fa';
    })
  
    darkmode = 1;
} else {
    heading.style.backgroundColor = '#404040';
    detailCourse.parentElement.style.backgroundColor = '#202020';
    detailCourse.parentElement.style.color = '#c6ba92';
    groupTitle.forEach(function(item) {
        item.style.backgroundColor = '#363636';
    })
    darkmode =0;
}