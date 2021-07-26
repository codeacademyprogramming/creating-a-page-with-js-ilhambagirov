let btn=document.getElementById('btn');
let sidebar=document.getElementById('sidebar-id');
let ulInsideDivs=document.querySelectorAll('.sidebardiv');
let leftbtnPath='<path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>';
let leftbtnSVG='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">'+leftbtnPath+'</svg>';
let rigthbtnPath='<path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>';
let rightbtnSVG='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="pr-2" viewBox="0 0 16 16">'+rigthbtnPath+'</svg>';
let spaninsideBtn=document.querySelector('.insidebtn');
let Sideb=document.querySelector('.sideb');

function checkClass(className){
    sidebar.classList.toggle('sidebarCollapse');
    sidebar.classList.toggle('sidebar-class');
    btn.classList.toggle('btnCollapese')
    btn.classList.toggle('btns');
    if (btn.classList.contains(className)) {
        btn.innerHTML=leftbtnSVG;
        spaninsideBtn.style.display='none';
        Sideb.style.width='40px'
        for (let i = 0; i < ulInsideDivs.length; i++) {
            ulInsideDivs[i].style.display='none';
            
        }
    }
    else{
        setTimeout(()=>{
            btn.innerHTML=rightbtnSVG + ' '+spaninsideBtn.innerHTML;
        },100)
        Sideb.style.width='225px'
        for (let i = 0; i < ulInsideDivs.length; i++) {
                ulInsideDivs[i].style.display='block';
                ulInsideDivs[i].style.whiteSpace='nowrap';
                ulInsideDivs[i].style.overflow='hidden';
        }
    }
}
btn.onclick=function() {
    checkClass('btnCollapese');
}

var mql = window.matchMedia('(max-width: 1200px)');

mql.addEventListener( "change", (e) => {
    if (e.matches) {
        checkClass('btnCollapese');
  }else{
    checkClass('btnCollapese');
  }
})

var mql2 = window.matchMedia('(max-width: 769px)');

mql2.addEventListener( "change", (e) => {
    if (e.matches) {
      sidebar.style.display='none'
      Sideb.style.display='none'
  }else{
    sidebar.style.display='block'
    Sideb.style.display='block'
  }
})



//data uls

let lists=Array.from(document.querySelectorAll('.customulside li'));
lists.forEach((list)=>{
    list.onmouseover=function(){
      let found=  document.querySelector(`[data-target =${list.getAttribute('data-source')}]`);
      console.log(found)
      found.classList.remove('d-none')
    }

    list.onmouseout=function(){
      let found=  document.querySelector(`[data-target =${list.getAttribute('data-source')}]`);
      found.classList.add('d-none')
    }
})

// NAVBAR

let gitlabLogo=document.querySelector('.gitlab');
let searchInput=document.querySelector('.custom-c2-input');
let searchIcon=document.querySelector('.search-icon');
console.log(searchIcon)
let navResponsive = window.matchMedia('(max-width: 1000px)');
console.log(searchInput)
console.log(gitlabLogo)


navResponsive.addEventListener( "change", (e) => {
    if (e.matches) {
       gitlabLogo.style.display='none';
       searchInput.style.display='none';
       searchIcon.style.display='none'
  }else{
    searchIcon.style.display='block'
    gitlabLogo.style.display='inline';
    searchInput.style.display='block';
  }
})

