var myRequest = new XMLHttpRequest();
myRequest.onreadystatechange=function(){
  if (myRequest.readyState===4){
    document.getElementById('ajax-content').innerHTML=myRequest.responseText;
  }
};
function sendTheAJAX(){
  myRequest.open('GET','surprise1.html');
  myRequest.send();
  document.getElementById('reveal').style.display='none';
}
