function NavBar(){





  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" data-toggle="tooltip" data-placement="bottom" title="Click here to navigate back home" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link create" data-toggle="tooltip" data-placement="bottom" title="Click here to create an account" href="#/CreateAccount/">Create Account</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link deposit" data-toggle="tooltip" data-placement="bottom" title="Click here to deposit" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link withdraw" data-toggle="tooltip" data-placement="bottom" title="Click here to withdraw" href="#/withdraw/">Withdraw</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link alldata" data-toggle="tooltip" data-placement="bottom" title="Click here to see all data" href="#/alldata/">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );




}


// create.addEventListener("click", function(){

//   create.classList.add('active')
// })
