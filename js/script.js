const adviceNo = document.querySelector('.advice-no');
const advice = document.querySelector('.advice');
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

const displayAdvice = function(dataAdvice, dataAdviceNo) {
        adviceNo.innerText = dataAdviceNo;
        advice.innerText = dataAdvice;
};