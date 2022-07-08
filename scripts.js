let tiTle = document.querySelector('.title');
let turn = 'x';
let boxes = [];

function end (num1,num2,num3){

        tiTle.innerHTML = `${boxes[num1]} winner`
        document.getElementById('item' + num1).style.background = '#16F529';
        document.getElementById('item' + num2).style.background = '#16F529';
        document.getElementById('item' + num3).style.background = '#16F529';


}


function winNer (){

    for (let i = 1; i < 10 ; i++){

        boxes[i] = document.getElementById('item' + i).innerHTML;


    }
    if(boxes[1] == boxes[2] && boxes[2] == boxes[3] && boxes[1] !='' ){

       end(1,2,3)
    }

    else if (boxes[4] == boxes[5] && boxes[5] == boxes[6] && boxes[4] !='' ){

        end(4,5,6)
    }

    else if (boxes[7] == boxes[8] && boxes[8] == boxes[9] && boxes[7] !='' ){

        end(7,8,9)
    }


    //vertical

    else if (boxes[1] == boxes[4] && boxes[4] == boxes[7] && boxes[4] !='' ){

        end(1,4,7)
    }

    else if (boxes[2] == boxes[5] && boxes[5] == boxes[8] && boxes[2] !='' ){

        end(2,5,8)

    }

    else if (boxes[3] == boxes[6] && boxes[6] == boxes[9] && boxes[3] !='' ){

        end(3,6,9)
    }

    //cross

    else if (boxes[1] == boxes[5] && boxes[5] == boxes[9] && boxes[1] !='' ){

        end(1,5,9)
    }

    else if (boxes[3] == boxes[5] && boxes[5] == boxes[7] && boxes[3] !='' ){

        end(3,5,7)
    }
    
}

function gaMe (id){

    let element = document.getElementById(id);

    if (turn === 'x' && element.innerHTML == '') {

        element.innerHTML = 'x';
        turn = 'o';
        tiTle.innerHTML = 'o';
    }

    else if (turn === 'o' && element.innerHTML == ''){

        element.innerHTML = 'o';
        turn = 'x';
        tiTle.innerHTML = 'x';
       
    }
    
   winNer();
}