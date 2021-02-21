const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none"
    const trArea = document.getElementById("transiction-Area");
    trArea.style.display = "block"
})
//deposit button even handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    const depositNumber =getInputNumber("depositAmount");
    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    document.getElementById("depositAmount").value = "";  
    })
    //withdraw button even handler
const withdrawbtn = document.getElementById('addWithdraw');
    withdrawbtn.addEventListener('click', function() {
       const withdrawNumbers = getInputNumber('addWithdrawAmount');
       updateSpanText("withdrawAmounnt", withdrawNumbers);
       updateSpanText("currentBalance", -1* withdrawNumbers);
       document.getElementById("addWithdrawAmount").value = "";
    })
    function getInputNumber(id){
        const amount = document.getElementById(id).value;
        const amountNumber = parseFloat(amount);
        return amountNumber;
    }
    function updateSpanText(id, addedNumber) {
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const totalNumber = addedNumber +currentNumber;
        document.getElementById(id).innerText = totalNumber;
        
    }