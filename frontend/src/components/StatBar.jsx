// status bar for hunger, happiness, energy, and health; will be a horizontal bar that fills up 
// based on the pet's current status in each category from json file
function StatBar({ label, value, isReversed }) {
    const displayValue = isReversed ? 100 - value : value;
    const getColor = () => {
        if (displayValue > 60) return "limegreen";
        if (displayValue > 30) return "orange";
        return "red";
    }
    return (
      <div className="stat-bar">
        <div className="stat-header">
          <span>{label}</span>
          <span className="stat-value">{value}</span>
        </div>
  
        <div className="stat-bar-background">
          <div
            className="stat-bar-fill"
            style={{ width: `${value}%`,
            backgroundColor: getColor() }}
          ></div>
        </div>
      </div>
    );
  }
  
  export default StatBar;