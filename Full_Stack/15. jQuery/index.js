


$("h1").css("color", "yellow")

// for (var i=0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color = "purple";
//     });
// }

// $("button").click(function(){
//     $("h1").css("color", "purple");
// })


// $("input").keypress(function(event){
//     console.log(event.key);
//     $("h1").text(event.key);
// })

// $("h1").on("mouseover", function(){
//     $("h1").css("color", "purple")
// })

// $("h1").on("click", function(){
//     $("h1").css("color", "purple")
// })

// $("button").on("click", function(){
//     $("h1").animate({opacity:0.5})
// })

// $("button").on("click", function(){
//     $("h1").slideToggle();
// })


// $("button").on("click", function(){
//     $("h1").animate({margin: "20%"});
// })

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})