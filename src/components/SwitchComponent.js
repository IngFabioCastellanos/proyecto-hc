import { Switch } from "@material-ui/core";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const SwitchComponent = () => {
  const [state, setState] = useState({
    checkedA: true,
  });
  const { setThema } = useContext(ThemeContext);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setThema(state.checkedA);
  };

  return (
    <Switch
      checked={state.checkedA}
      onChange={handleChange}
      name="checkedA"
      inputProps={{ "aria-label": "secondary checkbox" }}
    />
  );
};

export default SwitchComponent;
