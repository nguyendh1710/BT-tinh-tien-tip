




let luachon = document.getElementById('tip');  // dạng này và cả dạng chọn checkbox  nhớ đặt biến ở ngoài hàm thì nó mới ăn 
tip.options[2].selected = true;
tip.addEventListener('change', valueChange);

function valueChange(){
  let songuoi = +document.getElementById('songuoi').value;
  let tongtien = +document.getElementById('tong').value;
  let tientip = 0;
  let giatri= luachon.value;
   let message = document.getElementById('show_message');
 
 
 if (giatri === ""){
       message.innerHTML = "Bạn chưa chọn để tip";
  }
 else {
       message.innerHTML = "";
      
        
       
       tientip = (tongtien*(+giatri/100))/songuoi;
        
        display(tientip);
    }
  
        
}


function display(giatricanhienthi){


  document.getElementById("hienthi").innerHTML=`TIP AMOUNT NE TUN: ${giatricanhienthi}`;




}

















