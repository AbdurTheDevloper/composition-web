let images = ["images/sl1.jpg" ,"images/sl2.jpg" , "images/sl3.jpg" , "images/sl4.jpg" ];
let  img = document.getElementById('sliderImg');

let count = 0;

function next(){
    count++
    if(count>=images.length){
      count = 0;
      img.src = images[count]
    }else{
        img.src = images[count]
    }

}

function prev(){
    count--
    if(count<=0){
      count = images.length - 1;
      img.src = images[count]
    }else{
        img.src = images[count]
    }

}

let menuIcon = document.getElementById('menuIcon');
let navBar = document.getElementById('navBar');
menuIcon.onclick = function(){
  if( navBar.style.right == '-999px'){
    navBar.style.right = '0px';
  }else{
    navBar.style.right = '-999px';
  }
}
