const bookMarkBar=document.getElementById('bookmark-bar');
const bookmarkOpen=document.getElementById('bookmark-open');
const booKMarkClose=document.getElementById('bookmark-close')



const isBookMarkBarOpen=localStorage.getItem('isBookMarkBarOpen');

if(isBookMarkBarOpen==='close'){
  bookMarkBar.style.display='none';
      bookmarkOpen.style.display='none';
      booKMarkClose.style.display='flex';
}else{
  bookMarkBar.style.display='block';
  bookmarkOpen.style.display='flex';
  booKMarkClose.style.display='none;';
}

const bookMarkBarToggle=()=>{
  const isBookMarkBarOpen=localStorage.getItem('isBookMarkBarOpen')
  
    if(isBookMarkBarOpen==='close'){

      localStorage.setItem('isBookMarkBarOpen','open');

      bookMarkBar.style.display='block';
      bookmarkOpen.style.display='flex';
      booKMarkClose.style.display='none';

      return;
    
    }else{
      localStorage.setItem('isBookMarkBarOpen','close');

      bookMarkBar.style.display='none';
      bookmarkOpen.style.display='none';
      booKMarkClose.style.display='flex';

    }



  }

  document.getElementById("bookmark-open-btn").addEventListener("click", bookMarkBarToggle);
document.getElementById("bookmark-close-btn").addEventListener("click", bookMarkBarToggle);

