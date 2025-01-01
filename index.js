window.addEventListener("load", (event) => {
    colors();

    function returnRandomColor(){
        return "#" + Math.floor(Math.random()*16777215).toString(16);
    }

    async function sleep(timer){
        return new Promise((fullfill, reject) =>{
            setTimeout(fullfill, timer);
        })
    }

    async function colors () { 
        const btn = document.querySelector('.price-btn');
        
        while(true){
            const color = returnRandomColor();
            btn.style.backgroundColor = color;
            await sleep(150);
        }
    }
});