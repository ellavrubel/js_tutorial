

document.getElementById('btn').addEventListener('click', function () {

    document.getElementById('text').style.visibility = 'hidden';

});


document.getElementById('btn2').addEventListener('click', function () {

    document.getElementById('text').style.visibility = 'visible';

});


//



const a = document.getElementById('btn3');

a.addEventListener('click',firstFunc);
a.addEventListener('mouseover',secondFunc);
a.addEventListener('mouseout',thirdFunc);

function firstFunc(){
    document.getElementById('rty').innerHTML += 'click <br>';
}

function secondFunc(){
    document.getElementById('rty').innerHTML += 'mouseover <br>';
}


function thirdFunc(){
    document.getElementById('rty').innerHTML += 'mouseout <br>';
}

