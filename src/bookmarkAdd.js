const newBookmarkForm=document.getElementById('bookmark-item-input-form');

const bookmarkItemList=document.getElementById('bookmark-list');



let bookmarkList=[];
if(localStorage.getItem('bookmarkList')){
  bookmarkList=JSON.parse(localStorage.getItem('bookmarkList'))

}else{
  localStorage.setItem('bookmarkList',JSON.stringify(bookmarkList))
}

const addBookMarkItem=()=>{
  let bookmarkList=[];
  if(localStorage.getItem('bookmarkList')){
    bookmarkList=JSON.parse(localStorage.getItem('bookmarkList'))
  }
  let name=document.getElementById('new-bookmark-name-input').value;
  let url=document.getElementById('new-bookmark-url-input').value;
  let createdAt=Date.now();

  bookmarkList.push({name:name,url:url,createdAt:createdAt});

  localStorage.setItem('bookmarkList',JSON.stringify(bookmarkList));

  document.getElementById('new-bookmark-name-input').value='';
  document.getElementById('new-bookmark-url-input').value='';

  setBookMarkItem({name:name,url:url,createdAt:createdAt})
  newBookmarkToggle();


}

let isAddbtnClick=false;
newBookmarkForm.style.display='none';

const newBookmarkToggle=()=>{
  isAddbtnClick=!isAddbtnClick;
  isAddbtnClick?(newBookmarkForm.style.display='block'):(newBookmarkForm.style.display='none');


}


const deleteBookmarkItem=(id)=>{
  const isDelete=window.confirm('정말 삭제하겠습니까?');
  if(isDelete){
    let bookmarkList=JSON.parse(localStorage.getItem('bookmarkList'))
    let nowBookmarkLst=bookmarkList.filter((ele)=>ele.createdAt!=id)
    localStorage.setItem('bookmarkList',JSON.stringify(nowBookmarkLst))

    document.getElementById(`bookmark-item-${id}`).remove();


  }

}



const setBookMarkItem=(item)=>{
   
  const bookmarkItem=document.createElement('div');
  bookmarkItem.classList.add('bookmark-item');
  bookmarkItem.id=`bookmark-item-${item.createdAt}`

  const bookmarkInfo=document.createElement('div');
  bookmarkInfo.classList.add('bookmark-info');
  
  const bookmarkUrl=document.createElement('a');
  bookmarkUrl.classList.add('bookmark-url');
  bookmarkUrl.href=item.url;


  const urlIcon=document.createElement('div');
  urlIcon.classList.add('url-icon');
  
  const urlIconimg=document.createElement('img');
  urlIconimg.src=`https://www.google.com/s2/favicons?domain_url=${item.url}`


  const nameELement=document.createElement('div');
  nameELement.classList.add('name');
  nameELement.textContent=item.name;



  const bookmarkDelBtn=document.createElement('div');
  bookmarkDelBtn.textContent='삭제';
  bookmarkDelBtn.classList.add('del-btn')
  bookmarkDelBtn.addEventListener('click',()=>{
    deleteBookmarkItem(item.createdAt)
  });


  bookmarkItem.appendChild(bookmarkInfo)
  bookmarkItem.appendChild(bookmarkDelBtn)
  bookmarkInfo.appendChild(bookmarkUrl)
  bookmarkUrl.appendChild(urlIcon);
  bookmarkUrl.appendChild(nameELement);

  urlIcon.appendChild(urlIconimg)

  bookmarkItemList.appendChild(bookmarkItem);

}

const setBookMarkList=()=>{

  bookmarkList.forEach((item)=>{
    setBookMarkItem(item);
  })
}



document.getElementById('bookmark-item-add-btn').addEventListener('click',newBookmarkToggle);
document.getElementById('add-btn').addEventListener('click',addBookMarkItem);
document.getElementById('cancel-btn').addEventListener('click',newBookmarkToggle);
setBookMarkList();
