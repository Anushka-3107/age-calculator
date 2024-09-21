
const birthDate = document.getElementById('birthDate');
const currDate = document.getElementById('currDate');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

let bDate,cDate;

const birthInput = () => {
    bDate = new Date(birthDate.value);
    console.log(typeof(bDate));
}

const currInput = () =>{
    cDate = new Date(currDate.value);
    console.log(typeof(cDate));
}

birthDate.addEventListener('change', birthInput);
currDate.addEventListener('change',currInput);

const calculate = () =>{
    if(!bDate){
        alert('Please enter your birth date nad current date');
    }
    else{
        const fullYears = cDate.getFullYear() - bDate.getFullYear();
        console.log((fullYears));

        const fullMonths = cDate.getMonth() - bDate.getMonth();
        console.log(fullMonths);

        const fullDays = cDate.getDay() - bDate.getDay();
        console.log(fullDays); 

        if (fullDays < 0) {
            fullMonths--; 
            const lastMonthDate = new Date(cDate.getFullYear(), cDate.getMonth(), 0);
            console.log(lastMonthDate,'lm');
            fullDays += lastMonthDate.getDate(); 
        }

        if (fullMonths < 0) {
            fullYears--; 
            fullMonths += 12; 
        }

       
        result.textContent = `your age is : ${fullYears} Years ${fullMonths} Months ${fullDays} Days`;
    }
}


btn.addEventListener('click', calculate);