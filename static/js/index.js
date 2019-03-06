window.onload = function(){
    const Month = new Date().getMonth() + 1;
    const Day = new Date().getDate();
    const DATE = String(Month) + String(Day);
    axios('/api/bing', {
        params: {
            date: DATE
        }
    }).then(({data}) => {
        document.getElementById('bingdata').innerHTML = data
    })
}