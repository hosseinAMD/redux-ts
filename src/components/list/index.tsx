import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Treat } from "../../models/Treat";
import { getTreats } from "../../server-config";

const List: React.FC = () => {
  const [treats, setTreats] = useState<Treat[]>([]);

  useEffect(() => {
    axios
      .get(getTreats)
      .then((res) => setTreats(res.data || []))
      .catch(() => console.error("API fetch error"));
  }, []);

  return (
    <div className="treats">
      <h2>The list of treats must be done!</h2>
      {treats.map(({ id, person, treat, paid }) => (
        <div key={id} className="treats_item">
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
