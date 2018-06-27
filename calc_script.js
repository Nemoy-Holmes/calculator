
$(document).ready(function(){
//on-off function

var number = "";
var operation = 0;
//for calculation and display

//controls the display
var display = function (val) {
  if(val==="")
  {
    $('.screen').html("Screen")
    $('.screen').css('font-size','200%');
  }
  else{
    $('.screen').html(val);
    $('.screen').css('font-size','200%');
  }
}

//controls the input


        $('.tab1').on('click', function () {
            inputRead('1');
        });
        $('.tab2').on('click', function () {
            inputRead('2');
        });
        $('.tab3').on('click', function () {
            inputRead('3');
        });
        $('.tab4').on('click', function () {
            inputRead('4');
        });
        $('.tab5').on('click', function () {
            inputRead('5');
        });
        $('.tab6').on('click', function () {
            inputRead('6');
        });
        $('.tab7').on('click', function () {
            inputRead('7');
        });
        $('.tab8').on('click', function () {
            inputRead('8');
        });
        $('.tab9').on('click', function () {
            inputRead('9');
        });
        $('.tab0').on('click', function () {
            inputRead('0');
        });
        $('.tabEqual').on('click', function () {
            calculation();
        });
        $('.tabAdd').on('click', function () {
            inputRead('+');
        });
        $('.tabDot').on('click', function () {
            inputRead('.');
        });
        $('.tabSub').on('click', function () {
            inputRead('-');
        });
        $('.tabMulti').on('click', function () {
            inputRead('*');
        });
        $('.tabDiv').on('click', function () {
            inputRead('/');
        });
        $('.tabDel').on('click', function () {
            number = "";
            display(number);
        });
        $('.tabUndo').on('click', function () {
            number = operation;
            display(number);
        });
        $('.tabCan').on('click', function () {
            var res = number.slice(0, number.length - 1);
            number = res;
            display(number);
        });

//reads the value on input
var num;
var inputRead = function (num) {

    //sees if the string is empty
    if (number === "") {
        number = num;
    }

    //string concatenation
    else {
        number = number + num;
    }
    display(number);
}

//evaluate the strings
calculation = function () {
    var result = eval(number);
    operation = number;
    number = result;
    display(number);
}
});
