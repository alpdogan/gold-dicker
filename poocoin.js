
setInterval(() => {
    var trackPage = "http://localhost:3000/txtrack/";

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
            console.log(bscscan);
            tx = bscscan.replace('https://bscscan.com/tx/', '');
            tx = tx.replace(trackPage, '');
            [...link.children][0].href = trackPage + tx;
    }
    )
}, 1000);