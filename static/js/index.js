const getDate = () => {
    const Month = new Date().getMonth() + 1;
    const Day = new Date().getDate();
    const DATE = String(Month) + String(Day);
    return DATE;
  };
window.onload = function(){
    axios('/api/bing', {
        params: {
            date: getDate()
        }
    }).then(({data}) => {
        document.getElementById('bingdata').innerHTML = data
    })
}