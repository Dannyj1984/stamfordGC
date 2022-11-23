import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';

function createData(
  category: string,
  year1Cost: number,
  year2Cost: number,
) {
  return { category, year1Cost, year2Cost };
}

const rowsMale = [
  createData('31 years and above', 850, 850),
  createData('26-30 years', 449, 449),
  createData('24-25 years', 333, 333),
  createData('22-23 years', 269, 269),
  createData('20-21 years', 206, 206),
  createData('6 day member excl Saturday', 740, 740),
  createData('Midweek member Mon - Fri', 634, 634),
  createData('3 day Member (Mon - Wed- Sun)', 520, 520)
];

const rowsFemale = [
    createData('31 years and above', 493, 493),
    createData('26-30 years', 260, 260),
    createData('24-25 years', 193, 193),
    createData('22-23 years', 156, 156),
    createData('20-21 years', 119, 119)
  ];

  const rowsJunior = [
    createData('Youth member - 19 years', 100, 100),
    createData('Youth member - 18 years', 90, 90),
    createData('Youth member - 15-17 years', 75, 75)
  ];

  const rowsOther = [
    createData('Academy membership (conditions apply)', 312.50, 312.50),
    createData('Social', 25, 25)
  ];

export default function MembershipTable() {
  return (
    <>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Membership Category (Male)</TableCell>
            <TableCell align="right">2022</TableCell>
            <TableCell align="right">2023</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsMale.map((row) => (
            <TableRow
              key={row.category}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.category}
              </TableCell>
              <TableCell align="right">£{row.year1Cost}</TableCell>
              <TableCell align="right">£{row.year2Cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
<Divider />
<br />
<TableContainer component={Paper}>
<Table sx={{ minWidth: 300 }} aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell>Membership Category (Female)</TableCell>
      <TableCell align="right">2022</TableCell>
      <TableCell align="right">2023</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rowsFemale.map((row) => (
      <TableRow
        key={row.category}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.category}
        </TableCell>
        <TableCell align="right">£{row.year1Cost}</TableCell>
        <TableCell align="right">£{row.year2Cost}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
<Divider />
<br />
<TableContainer component={Paper}>
<Table sx={{ minWidth: 300 }} aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell>Membership Category (Junior)</TableCell>
      <TableCell align="right">2022</TableCell>
      <TableCell align="right">2023</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rowsJunior.map((row) => (
      <TableRow
        key={row.category}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.category}
        </TableCell>
        <TableCell align="right">£{row.year1Cost}</TableCell>
        <TableCell align="right">£{row.year2Cost}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
<Divider />
<br />
<TableContainer component={Paper}>
<Table sx={{ minWidth: 300 }} aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell>Membership Category (Junior)</TableCell>
      <TableCell align="right">2022</TableCell>
      <TableCell align="right">2023</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rowsOther.map((row) => (
      <TableRow
        key={row.category}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.category}
        </TableCell>
        <TableCell align="right">£{row.year1Cost}0</TableCell>
        <TableCell align="right">£{row.year2Cost}0</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
<Divider />
</>
  );
}