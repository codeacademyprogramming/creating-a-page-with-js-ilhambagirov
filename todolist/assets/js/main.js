let addbtn=document.querySelector('.add');
let savebtn=document.querySelector('.save');
let saveDbtn=document.querySelector('.saveDisabled')
let input =document.querySelector('.todo input');
let taskList =document.querySelector('.tasks');
addbtn.addEventListener('click',()=>{
    if (input.value==0) {
        alert('Please enter valid task');
    }else{
        taskList.style.display='block'
        listItemMaker(input.value);
        input.value='';
        setDate();
        deleteItemMaker();
        input.value='';
        editItemMaker();
        input.value='';
        deleteItem();
        input.value='';
        editItem();
        input.value='';
        done();
        

    }
})
function listItemMaker(todoName) {
    const listItem = document.createElement('li');
    const itemValue = document.createElement('span');
    itemValue.innerText = todoName;
    listItem.append(itemValue)
    taskList.prepend(listItem);
}

function deleteItemMaker() {
    const buttonWrapper = document.createElement('span');
    let taskList =document.querySelector('.tasks li');
    const buttonItem = document.createElement('button');
    buttonItem.className = 'delete';
    buttonItem.innerText='Delete';
    buttonWrapper.className='btnWrapper';
    buttonWrapper.append(buttonItem);
    taskList.append(buttonWrapper);
}

function editItemMaker() {
    let buttonWrapper =document.querySelector('.tasks li .btnWrapper');
    const buttonItem = document.createElement('button');
    buttonItem.className = 'edit';
    buttonItem.innerText='Edit';
    buttonWrapper.append(buttonItem);
}

function deleteItem(){
    let bedelettedTasks=document.querySelectorAll('.btnWrapper .delete');
        bedelettedTasks.forEach(deletted=>{
        deletted.onclick=function(){
        this.parentNode.parentElement.remove();
        if (!taskList.hasChildNodes()) {
            taskList.style.display='none'
        }
        input.value=''
        }
        })
}

function editItem(){
    let bedelettedTasks=document.querySelectorAll('.btnWrapper .edit');
        bedelettedTasks.forEach(deletted=>{
        deletted.onclick=function(){
            input.value= this.parentNode.parentElement.firstChild.innerText;
            let bechanged=this.parentNode.parentElement.firstChild;
            saveDbtn.style.display='none'
            savebtn.style.display='block'
            addbtn.style.display='none'
            savebtn.onclick=function(){
            bechanged.innerText=input.value;
            input.value=''
            saveDbtn.style.display='block'
            savebtn.style.display='none'
            addbtn.style.display='block'
        }

        let bedelettedTasks=document.querySelectorAll('.btnWrapper .delete');
        bedelettedTasks.forEach(deletted=>{
        deletted.onclick=function(){
        this.parentNode.parentElement.remove();
        saveDbtn.style.display='block'
            savebtn.style.display='none'
            addbtn.style.display='block'
        if (!taskList.hasChildNodes()) {
            taskList.style.display='none'
        }
        input.value=''
        }
        })
        }
        
        })
            
}

function done() {
    let doneTasks=Array.from(document.querySelectorAll('li'));

    doneTasks.forEach(donetask=>{
        donetask.onclick=function(event){
            event.preventDefault()
            donetask.firstChild.classList.toggle('done')
             
        }
    })

}

function setDate() {
    const now = new Date()
    const dateItem = document.createElement('span');
    let taskList =document.querySelector('.tasks li');
    dateItem.innerText=now;
    taskList.append(dateItem);
    
}
// input.addEventListener('keydown', (e) => {
//     if (e.code === 'Enter') {
//         if (!input.value) {
//             alert('Please enter a todo name');
//         } else {
//             taskList.style.display='block'
//             listItemMaker(input.value);
//             deleteItemMaker();
//             editItemMaker();
//             input.value='';
//             deleteItem();
//             input.value='';
//             editItem();
//             input.value='';
//         }
//     }
// })