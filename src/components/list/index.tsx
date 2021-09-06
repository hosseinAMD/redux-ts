import axios from "axios";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hook";
import { treatSlice } from "../../redux/treatSlice";
import { getTreats } from "../../server-config";

const List: React.FC = () => {
  const treats = useAppSelector((state) => state.treats);
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get(getTreats)
      .then((res) => dispatch(treatSlice.actions.setTreats(res.data || [])))
      .catch(() => console.error("API fetch error"));
  }, [dispatch]);

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
              <span
                onClick={() =>
                  dispatch(
                    treatSlice.actions.changeStatus({ id, value: false })
                  )
                }
                className="treats_paid"
              >
                PAID :D
              </span>
            ) : (
              <span
                onClick={() =>
                  dispatch(treatSlice.actions.changeStatus({ id, value: true }))
                }
                className="treats_pending"
              >
                PENDING
              </span>
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
