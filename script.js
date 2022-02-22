(function(){
    let screen = document.querySelector('.screen');
    let store = '0';
    let total = 0;
    let pre;


    let buttons = document.querySelectorAll('.button');
    buttons.forEach((elem)=>{
        elem.addEventListener('click', (e)=>{
            buttonClick(e.target.innerText)
        });
    })




function buttonClick(eti) {
    isNaN(parseInt(eti)) ? handleSymbol(eti) : handleNumber(eti);

    render();
}

function handleSymbol(eti){
    switch(eti){
        case 'C':
            store = '0';
            total = 0;
            break;
        case '=':
            if(pre === null) return;
            calculate(parseInt(store));
            pre = null;
            store = '' + total;
            total = 0;
            break;
        case '←':
            if(store.length === 1){
                store = '0'
            }
            else{
                store = store.slice(0, store.length - 1)
            }
            break;
        default:
            handleMath(eti);

    }
}

function handleNumber(eti){
    return store === '0' ? (store = eti) : (store += eti);
}

function handleMath(eti){
    const intStore = parseInt(store);
    if(total === 0){
        total = intStore;
    }
    else{
        calculate(intStore);
    }
    pre = eti;
    store = '0';
}

function calculate(intStore){
    if(pre === '+'){
        total += intStore;
    }
    else if(pre === '−'){
        total -= intStore;
    }
    else if(pre === '×'){
        total *= intStore;
    }
    else{
        total /= intStore;
    }
}

function render(){
    screen.innerText = store;
}


})();