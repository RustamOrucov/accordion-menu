const acordionBtn=document.querySelectorAll('button')
acordionBtn.forEach(el=>{
    el.addEventListener('click',()=>{
        const accordionBody=el.parentElement.nextElementSibling
        console.log(accordionBody);
        if(accordionBody.style.maxHeight){
            accordionBody.style.maxHeight=null
            el.querySelector('.hide').style.visibility='visible'
        }else{
            removeAll()
            accordionBody.style.maxHeight=accordionBody.scrollHeight+'px'
            el.querySelector('.hide').style.visibility='hidden'
        }
        
    })
})
function removeAll(){
    acordionBtn.forEach(el=>{
        el.parentElement.nextElementSibling.style.maxHeight=null
        el.querySelector('.hide').style.visibility='visible'
    })
}