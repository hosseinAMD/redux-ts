import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router";
import { postTreat } from "../../server-config";

const Form: React.FC = () => {
  const [person, setPerson] = useState<string>("");
  const [treat, setTreat] = useState<string>("");

  const { push } = useHistory();

  const handlePersonChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson(e.currentTarget.value);
  };

  const handleTreatChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTreat(e.currentTarget.value);
  };

  const addToList = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post(postTreat, { person, treat })
      .then((res) => {
        console.log(res.data);
        push("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={addToList} className="form">
      <input
        name="person"
        type="text"
        className="form_input"
        value={person}
        onChange={handlePersonChange}
        placeholder="Person"
        autoComplete="off"
        required
      />
      <input
        name="treat"
        type="text"
        className="form_input"
        value={treat}
        onChange={handleTreatChange}
        placeholder="Treat"
        autoComplete="off"
        required
      />
      <input type="submit" className="form_submit" />
    </form>
  );
};

export default Form;
