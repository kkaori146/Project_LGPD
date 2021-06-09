let lgpdUrl = 'https://jsonplaceholder.typicode.com/posts';
let lgpdHtml= `
<div class="lgpd">
    <div class="lgpd--left">
Nós utilizamos para melhorar a sua experiência como usuário.<br/>
Para conferir detalhadamente todos os cookies utilizados, leia nossa <a href="">politica de privacidade.</a>
    </div>
    <div class="lgpd--right">
<button>OK</button>
    </div>
</div>
<link rel="stylesheet" href="assets/css/style.css" />
`;

let lsContent = localStorage.getItem('lgpd');
if(!lsContent) {
document.body.innerHTML += lgpdHtml;

let lgpdArea = document.querySelector('.lgpd');
let lgpdButton = lgpdArea.querySelector('button');

lgpdButton.addEventListener('click', async ()=>{
lgpdArea.remove();

let result = await fetch(lgpdUrl);
let json = await result.json();

if(json.error != '') {
    let id = '123';  //na prática seria json.id
    localStorage.setItem('lgpd', json.id);
}

localStorage.setItem('lgpd', 123);
});
}