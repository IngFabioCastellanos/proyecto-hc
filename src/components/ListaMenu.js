import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";

import React from "react";
import { Link } from "react-router-dom";

const ListaMenu = () => {
  return (
    <List>
      <Link to="/historiaClinica" style={{ textDecoration: "none" }}>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Historia clinica" />
        </ListItem>
      </Link>
      <Link to="/agenda" style={{ textDecoration: "none" }}>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Agenda" />
        </ListItem>
      </Link>
    </List>
  );
};

export default ListaMenu;
