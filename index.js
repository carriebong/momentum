$(document).ready(function () {
    renderCurrentTime();
    renderQuote();
});


function renderCurrentTime() {
let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
fetch(url)
.then(res => res.json()).then((data) => {
    let datetime = data['datetime'].substr(11,8);
    $('#time').text(datetime);
});
}


// 1분마다 새로고침해주는 함수 추가함 // 
function init(){
    setInterval(renderCurrentTime,60000)
    setInterval(renderQuote,60000);
}

init()

function renderQuote() {
    let url = `https://api.quotable.io/random`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `" ${data['content']} "`;
            let author = `- ${data['author']} -`;
            $('#content').text(content);
            $('#author').text(author);
        });
}