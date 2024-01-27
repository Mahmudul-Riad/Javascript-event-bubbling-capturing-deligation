const grandParent=document.getElementById('grandParent');
const parent = document.getElementById('parent');
const child= document.getElementById('child');
const button = document.getElementById('btn');

grandParent.addEventListener('click',listener,{
    capture:true,
} )
parent.addEventListener('click',listener,{
    capture:true,
} )

child.addEventListener('click',listener,{
    capture:true,
} )

button.addEventListener('click',listener,{
    capture:true,
} )






function listener(){


    // console.log(this.id);
    // console.log(event.target);
    console.log(event.currentTarget);
}

