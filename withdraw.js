function Withdraw(){



  const ctx = React.useContext(UserContext);
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]   = React.useState('');
  const [withdraw, setWithdraw]   = React.useState('');
  const [balance, setBalance]   = React.useState(ctx.users[ctx.users.length-1].balance);

  
let displayBalance = "Current Balance: $" + ctx.users[ctx.users.length-1].balance;
let currentBalance = 0
const disable = (!withdraw);




function validate(field, label){


if(isNaN(field)){

  setStatus('Sorry, please enter a valid number');
  setTimeout(() => setStatus(''),3000);
  return false;

}

else if (field < 0){

  setStatus('Sorry, please enter a number greater than zero');
  setTimeout(() => setStatus(''),3000);
  return false;


}

else if(field > balance){
setStatus('Sorry, number is greater than balance in account');
setTimeout(() => setStatus(''),3000);
return false;
}


return true

}


function validateWithdraw(){


if(!validate(Number(withdraw), balance)) return;
currentBalance = balance - Number(withdraw);
setBalance(currentBalance)
ctx.users[ctx.users.length-1].balance = currentBalance;
setShow(false)


}

function clearForm(){
  setWithdraw('');
  setShow(true);
}


return (
  
  <Card
    bgcolor="primary"
    header={displayBalance}
    status={status}
    body={show ? (  
            <>
            Withdrawal amount<br/>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
            <input type="input" className="form-control" id="deposit" placeholder="" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/>
            </div>
            <br/>
            <button type="submit" disabled={disable} className="btn btn-light" onClick={validateWithdraw}>Withdraw</button>
            </>
          ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Withdraw more</button>
            </>
          )}
  />
  
);
          }