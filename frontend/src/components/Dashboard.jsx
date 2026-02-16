// this is the dashboard, it will have all the buttons and pet animations (from PetDisplay)

import Idle from '../assets/spriteSheets/cat/Idle (5).png';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <p>This is where you can manage your tasks and view your progress.</p>
      <img src={Idle} className='dashboardIdle' width={100} height={100} />
    </div>
  );
};
export default Dashboard;