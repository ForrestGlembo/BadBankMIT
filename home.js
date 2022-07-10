function Home(){
  return (
    <Card
      txtcolor="black"
      header="BadBank" className='bg-success'
      title="Welcome to a very bad bank"
      text="Please create an account to deposit."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
