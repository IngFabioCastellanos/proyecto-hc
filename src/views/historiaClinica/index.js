import {
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

const HistoriaClinica = () => {
  return (
    <div>
      <h2>Historia Clínica</h2>
      <FormGroup>
        <TextField
          id="outlined-basic"
          label="Primer Nombre"
          variant="outlined"
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Segundo Nombre"
          variant="outlined"
        />
        <br />

        <TextField
          id="outlined-basic"
          label="Primer Apellido"
          variant="outlined"
        />
        <br />

        <TextField
          id="outlined-basic"
          label="Segundo Apellido"
          variant="outlined"
        />
      </FormGroup>
    </div>
  );
};

export default HistoriaClinica;
