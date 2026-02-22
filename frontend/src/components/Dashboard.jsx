// this is the dashboard, it will have all the buttons and pet animations (from PetDisplay)

function Dashboard({ pet }) { // function that returns the dashboard page, takes in pet as a prop to display the pet info and animations
  return (
    <div id='dashboard'>
      <h1 className='dashboardWelcome'>{pet.name}</h1>
      {/* {pet.type === "Cat" ? <img src={catIdle} width={500} height={500} className='dashboardCat' /> : <img src={dogIdle} width={500} height={500} className='dashboardDog' />} */}
      {/* <p>Your pet type is {pet.type}</p> */}
      <div id='petDisplay'></div>
      <div id='buttons'></div>
      <div id='statBars'></div>
      <div id='shop'></div>
    </div>
  );
}
export default Dashboard;
// essentially everything goes into this component, will be similar to App.jsx

    
