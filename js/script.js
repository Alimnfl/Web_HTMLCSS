const txtElement = ['Content Creator', 'Web Developer', 'Graphic Design'];
let count = 0;
let txtIndext = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

    if(count == txtElement.length){
        count = 0;
    }
    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndext);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndext = 1;
    }

    setTimeout(ngetik, 500);

})();