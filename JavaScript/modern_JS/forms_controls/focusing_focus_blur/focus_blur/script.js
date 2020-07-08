let table = document.getElementById('bagua-table');
let ok = document.createElement('div');
let cancel = document.createElement('div');
ok.className = 'ok__button';
cancel.className = 'cancel__button'; 
ok.innerText = 'OK';
cancel.innerText = 'CANCEL';



table.addEventListener('click', function(event) {
    let curr = event.target;
    



    if(curr.tagName === 'TD') {
        let textArea = document.createElement('textarea');
        textArea.style.width = curr.clientWidth + 'px';
        textArea.style.height = curr.clientHeight + 'px';


        let previousHtml = curr.innerHTML;
        textArea.value = curr.innerHTML;
        curr.innerHTML = '';
        curr.appendChild(textArea);
        textArea.focus();
        curr.append(ok, cancel);
        ok.addEventListener('click', function(e) {
            ok.parentElement.innerHTML = previousHtml;
        });
        cancel.addEventListener('click', function(e) {
            cancel.parentElement.innerHTML = previousHtml;
        });
    }

});