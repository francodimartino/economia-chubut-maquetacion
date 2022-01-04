



function asignarItemsSegunTamanio(){
    let items = document.querySelectorAll('.carousel-cm .carousel-item-cm')
    let itemsclonados=document.querySelectorAll('.clonado')
    
    itemsclonados.forEach((item)=>{
        
        item.remove()
    })


    items.forEach((el) => {
        
        
        const minPerSlide = (window.innerWidth > 768 ? 5 : 2)
        let next = el.nextElementSibling
        for (var i=1; i<minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
              }
            let cloneChild = next.cloneNode(true)
            let hijo=cloneChild.children[0]
            
            hijo.classList.add("clonado")
            
            el.appendChild(hijo)
            next = next.nextElementSibling
        }
        

    })
}


asignarItemsSegunTamanio()

window.onresize=function(){
    asignarItemsSegunTamanio()
    asignarItemsSegunTamanio()
}
