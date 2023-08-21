// function createImgElement(){
//     var img = document.createElement('img')
//     imagesArea.append(img)
//     return img.src
// }

var myImg = document.getElementById("myimg")

var imagArray = [ 
        "https://1.bp.blogspot.com/-T67HSJcTHdo/YLf8zwp8GKI/AAAAAAAADQE/_aOZ5yoy1osZGg9-RSPdr9z3YNMO-eJEACLcBGAsYHQ/s16000/%25D8%25A8%25D8%25AB%2B%25D9%2585%25D8%25AD%25D8%25AA%25D9%2588%25D9%258A%2B%25D8%25A7%25D9%2584%25D8%25A7%25D9%2584%25D8%25B9%25D8%25A7%25D8%25A8.jpg",
        "https://media.istockphoto.com/id/1334436084/photo/top-down-view-of-colorful-illuminated-gaming-accessories-laying-on-table.jpg?s=612x612&w=0&k=20&c=E9xnbAZoBS5LlUX0q-zxT_3m6gEZpyB2k51_U4LLMNs=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1Veu8OnKcAi_VC03EGEW0Ux0YkRg33vxPDlWuE0Y&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejdE9PyyKpSO_9fwjsPHG5hv81Ku4n5J8kQ&usqp=CAU",
        
    ] ;



var index = 0; 
myImg.setAttribute('src' , imagArray[index])

function goPrev(){
        index-- 
        if(index < 0 || index >imagArray.length-1){
            index = imagArray.length-1
        }
        myImg.src = imagArray[index]
}

function goNext(){
    index++
    myImg.setAttribute('src' , imagArray[index % imagArray.length])

}

var myIntervalId ; 
function doPlay(){
    clearInterval(myIntervalId)
   myIntervalId =  setInterval(goNext , 1000)
}

function doStop(){
    clearInterval(myIntervalId)
}