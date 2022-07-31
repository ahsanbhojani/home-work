function zakatGold() {
let gold = document.getElementById('goldValue').value;
if(gold >= 7.5 ) {
    document.getElementById('gold').innerText = gold*120000/40;
}
else{ 
document.getElementById('gold').innerText = "no zakat"

}
}
function zakatOfSilver() {
    let silver = document.getElementById('silverValue').value;
    if(silver >= 52.5 ){
        document.getElementById('silver').innerText = silver * 1400 /40;
    }
    else{ document.getElementById('silver').innerText ="their is no zakat";
    
    }
    }

function zakatOfCash() {
    let cash = document.getElementById('cashValue').value;
    if(cash >= 90000 ){
        document.getElementById('cash').innerText =  cash /40;
    }
    else{ document.getElementById('cash').innerText ="their is no zakat";
    
    }
    }