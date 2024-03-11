const adviceNo = document.querySelector('.advice-no');
const advice = document.querySelector('.advice');
const dice = document.querySelector('.dice');

const initialAdvice = async function() {
    const choice = Math.floor(Math.random() * 223);
    let res = await fetch(`https://api.adviceslip.com/advice/${choice}`);
    let data = await res.json();

    let dataAdvice = data.slip.advice;
    let dataAdviceNo = data.slip.id;
    displayAdvice(dataAdvice, dataAdviceNo);
}

initialAdvice();


dice.addEventListener('click', function() {
    const choice = Math.floor(Math.random() * 223);
    const adviceGetter = async function() {
        let res = await fetch(`https://api.adviceslip.com/advice/${choice}`);
        let data = await res.json();
        console.log(data);

        let dataAdvice = data.slip.advice;
        let dataAdviceNo = data.slip.id;

        displayAdvice(dataAdvice, dataAdviceNo)
    };   
adviceGetter();
});



const displayAdvice = function(dataAdvice, dataAdviceNo) {
    adviceNo.innerText = `Advice #${dataAdviceNo}`;
    advice.innerText = `"${dataAdvice}"`;
};

