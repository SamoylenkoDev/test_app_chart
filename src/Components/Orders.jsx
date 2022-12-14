import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Button, ButtonGroup} from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return {id, date, name, shipTo, paymentMethod, amount};
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];


export default function Orders() {

  return (
    <React.Fragment>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: 'center'}}>
        <div>
          <h3>Recent Transaction</h3>
        </div>
        <div>
          <Button variant="outlined"
                  sx={{ color: 'black', border: '1px solid grey', textTransform: "capitalize"}}>
            <CalendarTodayIcon fontSize={"small"} sx={{paddingRight: '8px'}}/>
            Selected dates
          </Button>
        </div>
      </div>
      <Table size="medium">
        <TableHead>
          <TableRow >
            <TableCell align={"left"}>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button sx={{color: 'black', border: '1px solid grey', textTransform: "capitalize"}}>View all</Button>
              <Button sx={{color: 'black', border: '1px solid grey', textTransform: "capitalize"}}>Transfers</Button>
              <Button sx={{color: 'black', border: '1px solid grey', textTransform: "capitalize"}}>Cards</Button>
            </ButtonGroup>
            </TableCell>
            <TableCell/>
            <TableCell/>
            <TableCell/>
          </TableRow>
          <TableRow>
            <TableCell >Transaction</TableCell>
            <TableCell align={"right"}>Amount</TableCell>
            <TableCell align={"right"}>Date</TableCell>
            <TableCell align={"right"}>Card</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell align={"right"}>{row.amount}</TableCell>
              <TableCell align={"right"}>{row.date}</TableCell>
              <TableCell align={"right"}>{row.paymentMethod}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
