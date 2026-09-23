// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",e=>{

        const destino=document.querySelector(link.getAttribute("href"));

        if(!destino){
            return;
        }

        e.preventDefault();

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});