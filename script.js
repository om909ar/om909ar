
function checkAnswer(correct){

    const result = document.getElementById("result");

    if(correct){
        result.innerHTML = "✅ إجابة صحيحة";
        localStorage.setItem("progress","10");
        document.getElementById("progress").innerText = "10%";
    }else{
        result.innerHTML = "❌ إجابة خاطئة";
    }
}

window.onload = function(){

    const saved = localStorage.getItem("progress");

    if(saved){
        document.getElementById("progress").innerText = saved + "%";
    }
}
