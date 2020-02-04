var btn1 = document.getElementById('btn1');

var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');
var i = 0;
var k = 0;

if(localStorage.getItem('pobednik') == '1') {
    alert('Prethodnu igru je dobio Player 1');
} else if(localStorage.getItem('pobednik') == '2'){
    alert('Prethodnu igru je dobio Player 2');   
}

btn1.addEventListener('click', function(){
    i++;
    score1.innerHTML = i;
    if(i == 30){
        alert('Pobednik je Player 1');
        localStorage.setItem('pobednik', '1');
    }
});

addEventListener('keydown', function(){
    k++;
    score2.innerHTML = k;
    if(k == 30){
        alert('Pobednik je Player 2');
        localStorage.setItem('pobednik', '2');
    }
})