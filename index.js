// number increment code
const numberData = document.querySelectorAll(".numberIncrement");
const speed = 150;

numberData.forEach((curVal) => {
  const numAnimate = () => {
      const targetVal = parseInt(curVal.dataset.num);
      // console.log(targetVal);
      const sourceVal = parseInt(curVal.innerText);
      // console.log(sourceVal);
      const calculate = Math.trunc(targetVal/speed);
      // console.log(calculate);
      if(sourceVal<targetVal){
          curVal.innerText = sourceVal + calculate;
          setTimeout(numAnimate ,50);
      }
  }
  numAnimate();
});

// image slider code in index page
var arry = [
              'Images/wallpaperflare.com_wallpaper (1).jpg',
              'Images/wallpaperflare.com_wallpaper (1)_2.jpg',
              'Images/silhouette-coconut-palm-tree-with-swimming-pool.jpg',
              'Images/landscape-shot-beautiful-cholatse-mountains-body-water-khumbu-nepal.jpg'
            ];
var image = document.getElementById("slideImg");
var imgIndex = 1;
function fun1(){
    image.setAttribute("src",arry[imgIndex]);
    imgIndex--;
    if(imgIndex < 0){ imgIndex=3 }
}
function fun2(){
  image.setAttribute("src",arry[imgIndex]);
  imgIndex++;
  if(imgIndex > 3){ imgIndex=0 }
}
setInterval(fun2,3000);


// image slider code in packge page
var imgArry=[
  'Images/dubai.jpg',
  'Images/Italy.webp',
  'Images/singapor.jpg',
  'Images/paris.jpg'
];
var slideforImg = document.getElementById("imgForSlide");
// var imgIndex = 1;
function prev(){
  slideforImg.setAttribute("src",imgArry[imgIndex]);
  imgIndex--;
  if(imgIndex < 0){ imgIndex=3 }
}
function forward(){
  slideforImg.setAttribute("src",imgArry[imgIndex]);
  imgIndex++;
  if(imgIndex > 3){ imgIndex=0 }
}
setInterval(forward,3000);