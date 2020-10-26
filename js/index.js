window.onload = function(){
    var man = document.querySelector(".man")
    var falg = 1
    setInterval(function(){
        if(falg ==1){
            man.src = "img/pg1-man1.png"
            falg = 2
        }else{
            man.src = "img/pg1-man.png"
            falg = 1
        }
        
    },800)
}