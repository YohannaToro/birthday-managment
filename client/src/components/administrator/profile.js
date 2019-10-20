import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TodoList from '../administrator/managment'
import Side from '../sidebar'


const useStyles = makeStyles(theme => ({
  drawerHeader: {
    padding: theme.spacing(0, 12),
    ...theme.mixins.toolbar
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  return (
    <div >
      <CssBaseline />
      <AppBar>
        <Toolbar className="nav-changes">
          <Side/>
        </Toolbar>
      </AppBar>
       <div className="container" style={{'marginTop':'10%'}}>
       <TodoList />  
           </div> 

    </div>
  );
}
