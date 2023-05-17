const dateEl=document.getElementById('date');
const timeEl=document.getElementById('time');

const modifiyNumber=(number)=>{
  return parseInt(number)<=10?"0"+number:number;
}
const getNowDate=()=>{
  const nowDate=new Date();

  const week=['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
  let month=modifiyNumber(nowDate.getMonth()+1)
  let date=modifiyNumber(nowDate.getDate());
  let day=nowDate.getDay();



  setNowDate(month,date);


}

const setNowDate=(month,date)=>{
  dateEl.textContent=`${month}월 ${date}일 `
}





const setTime=()=>{
  
const time=new Date();
const hour=modifiyNumber(time.getHours());
const minute=modifiyNumber(time.getMinutes())
const second=modifiyNumber(time.getSeconds());
  timeEl.textContent=`${hour} : ${minute}`;
}

getNowDate();



setInterval(setTime,1000);