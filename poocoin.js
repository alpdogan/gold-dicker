//tracking live transactions
setInterval(() => {
    var trackPage = "http://localhost:5000/txtrack/";

    var trackLinks = [...document.querySelectorAll(".ReactVirtualized__Table__rowColumn.table-col-wrap")];
    trackLinks.map((track) => { 
        
            if(track.children.length > 2){
                return track;
            }
            return null;
        })
        .filter(p => p !== null)
        .map((link) => {
            var bscscan = [...link.children][0].href;
            tx = bscscan.replace('https://bscscan.com/tx/', '');
            tx = tx.replace(trackPage, '');
            [...link.children][0].href = trackPage + tx;
    }
    )
}, 1000);



//expand wallet scroll

document.querySelectorAll("div.d-block div.mt-2 div.h-100")[0].parentElement.style.height = '2000px'
