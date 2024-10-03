function Book(title,author,pages){
    this.title=title,
    this.author=author,
    this.pages=pages;
    this.read="read",
    this.info=function(){
        return(this.title+" ,"+this.author+","+this.pages+","+this.read);
    }
}
let count=2;
const myLibrary=[];
Array.prototype.remove = function (v) {
    if (this.indexOf(v) != -1) {
        this.splice(this.indexOf(v), 1);
        return true;
    }
    return false;
}
Book.prototype.toggle=function(v){
    
        if(this.read=="read"){
            this.read="Unread";
        }else{
            this.read="read";
        }
    
}
const HarryPotter=new Book('Harry Potter','JK Rowling',312,"read");
const Utopia=new Book("Utopia","Sir Thomas Moor",413,"not-read");
myLibrary.push(HarryPotter);
myLibrary.push(Utopia);
for(let i=0;i<myLibrary.length;i++){
   console.log(myLibrary[i].author);
}
let container=document.querySelector('.container');
console.log("there");
display();
function display(){
    console.log("near");
    for(let i=0;i<myLibrary.length;i++){
        let box=document.createElement('div');
        box.style.width="200px";
        box.style.height="200px";
        box.style.backgroundColor="gold";
        box.style.backgroundImage="url(81q77Q39nEL._AC_UF1000,1000_QL80_.jpg)"
        box.style.backgroundSize="cover"
        box.style.border="2px solid black";
        box.style.borderRadius="5px";
        console.log("here");
        container.appendChild(box);
        let titlediv=document.createElement('div');
        let authordiv=document.createElement('div');
        let pagesdiv=document.createElement('div');
        let readdiv=document.createElement('div');
        let readbuttondiv=document.createElement('div');
        let readbutton=document.createElement('input');
        readbutton.type="checkbox";
        readbutton.checked="true";

        readbuttondiv.appendChild(readbutton);
        let spanread=document.createElement('span');
        spanread.innerHTML="Read";
         readbutton.addEventListener('change',()=>{
            console.log("radio"+i);
            // readbutton.checked="true";
        if(readbutton.checked){
            readbutton.checked=true;
            readdiv.innerText="Read Status:"+"Read";
           
            console.log("unchecked")
            
        }else{
            readbutton.checked=false;
            readdiv.innerText="Read Status:"+"Unread";
            console.log("checked");


        }


      })
       
        readbuttondiv.appendChild(spanread);
        // let removediv=document.createElement('div');
       
        // let removebookbtn=document.createElement('BUTTON');
        // removebookbtn.innerHTML="REMOVE BOOK";
        // removebookbtn.style.id=i;
        // removebookbtn.addEventListener('click',()=>{
        //     console.log("click"+i);
        //     myLibrary.remove(myLibrary[i]);
        //     count--;
        //     console.log(count);
        //     console.log(myLibrary);
        //     container.removeChild(box);
            

        // });
        // removediv.appendChild(removebookbtn);
        titlediv.classList.add('innerdiv');
        authordiv.classList.add('innerdiv');
        pagesdiv.classList.add('innerdiv');
        readdiv.classList.add('innerdiv');
        // removediv.classList.add('innerdiv');
        readbuttondiv.classList.add('innerbuttondiv');
        titlediv.innerHTML="Title:"+myLibrary[i].title;
        authordiv.innerHTML="Author:"+myLibrary[i].author;
        pagesdiv.innerHTML="Pages:"+myLibrary[i].pages;
        readdiv.innerText="Read Status:"+myLibrary[i].read;
        box.appendChild(titlediv);
        box.appendChild(authordiv);
        box.appendChild(pagesdiv);
        box.appendChild(readdiv);
        box.appendChild(readbuttondiv);

        // box.appendChild(removediv);

    }
}

   
    const showbtn=document.querySelector('#show-dialog');
    const cancelbutton=document.querySelector('#normal-close');
    cancelbutton.classList.add('button');
    const dialog=document.querySelector('#dialog');
    const jsclosebtn=dialog.querySelector('#js-close');
    const output=document.querySelector('output');
    const inputbox=document.querySelector('input');
    const titles=document.querySelector('#title');
    const authors=document.querySelector('#author');
    const pagess=document.querySelector('#pages');
    const reads=document.querySelector('#read');
    showbtn.addEventListener("click",()=>{
        dialog.showModal();
      
    })
    cancelbutton.addEventListener('click',(e)=>{
        e.close();
    })

   jsclosebtn.classList.add('addbtn');
    jsclosebtn.addEventListener('click',(e)=>{
        e.preventDefault();
        myLibrary.push( new Book(titles.value,authors.value,pagess.value));
        // e.close();
        function displaynew(){
            for(let i=count;i<myLibrary.length;i++){
            console.log("near");
                let box=document.createElement('div');
                box.style.width="200px";
                box.style.height="200px";
                box.style.backgroundColor="grey";
                box.style.border="0.6px solid black";
                box.style.borderRadius="5px";
                box.style.backgroundImage="url(images.jpg)"
                box.style.backgroundSize="cover";
                console.log("here");
                container.appendChild(box);
                let titlediv=document.createElement('div');
                let authordiv=document.createElement('div');
                let pagesdiv=document.createElement('div');
                let readdiv=document.createElement('div');
                let readbuttondiv=document.createElement('div');
                let readbutton=document.createElement('input');
                readbutton.type="checkbox";
                readbutton.checked="true";

                readbuttondiv.appendChild(readbutton);
                let spanread=document.createElement('span');
                spanread.innerHTML="Read";
                 readbutton.addEventListener('change',()=>{
                    console.log("radio"+i);
                    // readbutton.checked="true";
                if(readbutton.checked){
                    readbutton.checked=true;
                    readdiv.innerText="Read Status:"+"Read";
                   
                    console.log("unchecked")
                    
                }else{
                    readbutton.checked=false;
                    readdiv.innerText="Read Status:"+"Unread";
                    console.log("checked");


                }


              })
               
                readbuttondiv.appendChild(spanread);
                let removediv=document.createElement('div');
                let removebookbtn=document.createElement('BUTTON');
                removebookbtn.innerHTML="REMOVE BOOK";
                removebookbtn.style.class="i";
                removebookbtn.addEventListener('click',()=>{
                    console.log("click"+i);
                    myLibrary.remove(myLibrary[i]);
                    count--;
                    console.log(count);
                    console.log(myLibrary);
                    container.removeChild(box);
                    
        
                });
                removediv.appendChild(removebookbtn);
               
                titlediv.classList.add('innerdiv');
                authordiv.classList.add('innerdiv');
                pagesdiv.classList.add('innerdiv');
                readdiv.classList.add('innerdiv');
                readbuttondiv.classList.add('innerbuttondiv');
                removediv.classList.add('innerbuttondiv');
                titlediv.innerHTML="Title:"+myLibrary[i].title;
                authordiv.innerHTML="Author:"+myLibrary[i].author;
                pagesdiv.innerHTML="Pages:"+myLibrary[i].pages;
                readdiv.innerText="Read Status:"+myLibrary[i].read;
                box.appendChild(titlediv);
                box.appendChild(authordiv);
                box.appendChild(pagesdiv);
                box.appendChild(readdiv);
                box.appendChild(readbuttondiv);
                box.appendChild(removediv);

            }
        
        }
        displaynew();
        count++;
        console.log(count);
        dialog.close(inputbox.value);
    })
   