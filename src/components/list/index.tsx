import { NavLink } from "react-router-dom";
import { mockTreats } from "../../data/mock-treats";

const List: React.FC = () => {
  return (
    <div className="treats">
      <h2>The list of treats must be done!</h2>
      {mockTreats.map(({ person, treat, paid }, index) => (
        <div key={index} className="treats_item">
          <div className="treats_title">
            <p>
              <strong>{person}</strong> must treat <strong>{treat}</strong>
            </p>
          </div>
          <div>
            {paid ? (
              <span className="treats_paid">PAID :D</span>
            ) : (
              <span className="treats_pending">PENDING</span>
            )}
          </div>
        </div>
      ))}
      <NavLink to="/create" className="treats_button">
        Create Treat
      </NavLink>
    </div>
  );
};

export default List;
