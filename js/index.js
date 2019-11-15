$(document).ready(function () {

    const calc = $('.calculator');
    const calcDisplay = calc.find('.calculator__display');
    const calcKeys = calc.find('.calculator__key');
    const calcButton = calc.find('.calculator__button');
    const calcClear = calc.find('.calculator__clear');
    const calcEqual = calc.find('.calculator__key--equal');
    const calcPower = calc.find('.calculator__power');
    const calcSpace = calc.find('.calculator__backspace');

    calcKeys.each(function () {
        const current = $(this).attr('value');
        $(this).text(current);
    });

    calcButton.on('click', function () {
        calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
    });

    calcClear.on('click', function () {
        calcDisplay.val('');
    });

    calcEqual.on('click', function () {
        calcDisplay.val( eval( calcDisplay.val() ) );
    });

    calcPower.on('click', function () {
        calcDisplay.val( Math.pow( calcDisplay.val(), 3 ) );
    });

    calcSpace.on('click', function () { 
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
    });

});
