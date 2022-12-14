import React from 'react';
import {Button, ButtonGroup} from "@mui/material";
import Container from "@mui/material/Container";
import style from "./dashboard.module.css"
import AddIcon from '@mui/icons-material/Add';
import EastIcon from '@mui/icons-material/East';

import Orders from "../../Components/Orders";
import {Paper} from "@material-ui/core";
import Chart from "../../Components/Chart";


const Dashboard = () => {
  return (
    <Container maxWidth={'lg'} >
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: 'center', marginTop: '50px'}}>
        <div className={style.title}>
          Account Balance
        </div>
        <div>
          <Button variant="outlined"
                  sx={{mr: 4, color: 'black', border: '1px solid grey', textTransform: "capitalize"}}>
            <AddIcon fontSize={"small"} sx={{paddingRight: '8px'}}/>
            Add Money
          </Button>
          <Button sx={{textTransform: "capitalize"}} variant="contained" color="success">
            <EastIcon fontSize={"small"} sx={{paddingRight: '8px'}}/>
            Send Money
          </Button>
        </div>
      </div>
      <div className={style.amount}>
        $ 107,843.82 CAD
      </div>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: 'center', marginTop: '60px'}}>
        <div>
          <span className={style.title_group}>Spending over time</span>
          <span className={style.title_group}><span className={style.dot_light}/> EFTs</span>
          <span className={style.title_group}><span className={style.dot_medium}/> Card payments</span>
          <span className={style.title_group}><span className={style.dot_hard}/> International wires</span>
        </div>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button sx={{color: 'black', border: '1px solid grey', textTransform: "capitalize"}}>12 month</Button>
          <Button sx={{color: 'black', border: '1px solid grey', textTransform: "capitalize"}}>30 days</Button>
          <Button sx={{color: 'black', border: '1px solid grey', textTransform: "capitalize"}}> 7 days</Button>
        </ButtonGroup>
      </div>
      <div style={{marginTop: '40px', marginBottom:'40px',}}>
        <Chart/>
      </div>
      <div>
        <Paper className={style.paper}>
        <Orders/>
        </Paper>
      </div>
    </Container>
  );
};

export default Dashboard;
