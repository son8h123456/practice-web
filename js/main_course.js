
var categoryTitle = document.querySelectorAll('.category-title');
var allCourse = document.querySelectorAll('.all')
// console.log(categoryTitle)
// console.log(allCourse)

for(let i =0; i<categoryTitle.length;i++) {
    categoryTitle[i].addEventListener('click', 
    filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item) {
    changeActivePosition(item);
        for(let i =0;i<allCourse.length;i++) {
            if(allCourse[i].classList.contains(item.attributes.id.value)) {
                allCourse[i].parentElement.style.display = 'block';
            } else {
                allCourse[i].parentElement.style.display = 'none';
            }
        }
        // console.log(item.attributes.id.value)
    
}
function changeActivePosition(activeItem) {
    for(let i =0; i<categoryTitle.length;i++) {
        categoryTitle[i].classList.remove('active')
    }
    activeItem.classList.add('active');
}


var mainCourse = document.getElementById('mainCourse')
var heading = document.querySelector('#mainCourse .heading')
var category = document.querySelectorAll('.category-title')
var courseItem = document.querySelectorAll('.courseItem')
var title_h3 = document.querySelectorAll('#mainCourse .courseContent h3 a')
var tc = document.querySelector('#all')
var a = 0;
function darkmode() {
    if(a == 0) {
        mainCourse.parentElement.style.backgroundColor = '#202020'; 
        mainCourse.parentElement.style.color = '#c6c6c6'; 
         heading.style.backgroundColor = '#404040';
         category.forEach(function(item) {
             item.classList.add('darkmode')
             if(item.attributes.id.value == 'all') {
                 item.classList.remove('darkmode');
             } 
             item.parentElement.style.color = '';
         })
         courseItem.forEach(function(item) {
             item.classList.add('darkmode');
         })
         title_h3.forEach(function(item) {
             item.style.color = '#c2c2c2';
         })
        tc.parentElement.style.color ='#c4bba9';
         a = 1;
    } else {
        mainCourse.parentElement.style.backgroundColor = '#ffffff'; 
        mainCourse.parentElement.style.color = '#0d0e0d'; 
         heading.style.backgroundColor = '#808080';
         category.forEach(function(item) {
            item.classList.remove('darkmode');
            item.parentElement.style.color = 'black';
            
        })
        courseItem.forEach(function(item) {
            item.classList.remove('darkmode');
        })
        title_h3.forEach(function(item) {
            item.style.color = 'black';
        })

        a=0;
    }
    console.log(a)
    localStorage.setItem('darkmode',JSON.stringify(a));
}
