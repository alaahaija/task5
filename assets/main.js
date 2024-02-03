let addNote = document.querySelector('.yournotes');
let notes = document.querySelector('.notes');
let checksbtn=[];
addNote.onsubmit = function(e){
    e.preventDefault();
    let yournote = document.querySelector('.addnote').value;

    if(yournote!=""){
    notes.innerHTML+=`
    <div class='note'>
    <input type="checkbox" class="done"/>
    <label>${yournote}</label>
    </div>
    `
    document.querySelector('.addnote').value='';
    checksbtn=document.querySelectorAll('.done');}
    else
    alert('its empty');
    for(let i = 0 ; i<checksbtn.length ; i++ ){
        checksbtn[i].onclick = function(){
            if (checksbtn[i].checked)

            checksbtn[i].parentNode.classList.add('checked');

            else

            checksbtn[i].classList.remove('checked');
        }
    }
   
}