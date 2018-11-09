import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';

let id = 0;
var createData = (event, round, meet, category, year, location, link, videoRating, raceRating) => {
  id += 1;
  return { id, event, round, meet, category, year, location, link, videoRating, raceRating };
}


const rows = [
  createData('800m', 'final', 'olympics', 'open men', 1992, 'barcelona', 'https://www.youtube.com/watch?v=ryYo6jAtLGs'),
  createData('800m', 'final', 'olympics', 'open men', 1996, 'atlanta', 'https://www.youtube.com/watch?v=duQ-Wg0SzvU'),
  createData('800m', 'final', 'olympics', 'open men', 2000, 'sydney', 'https://www.youtube.com/watch?v=w8q3QNQ8J3s'),
  createData('800m', 'final', 'olympics', 'open men', 2004, 'athens', 'https://www.youtube.com/watch?v=HYB4jWkXYDU'),
  createData('800m', 'final', 'olympics', 'open men', 2008, 'beijing', 'https://www.youtube.com/watch?v=-3Cdw78L22Y'),
  createData('800m', 'final', 'olympics', 'open men', 2012, 'london', 'https://www.youtube.com/watch?v=YKEOjWEzVGs&t=310s'),
  createData('800m', 'final', 'olympics', 'open men', 2016, 'rio de janeiro', 'https://www.youtube.com/watch?v=Grf_62s_95w&t=294s'),

  createData('800m', 'final', 'olympics', 'open women', 1992, 'barcelona', 'https://www.youtube.com/watch?v=x0Q6NPEJbWk'),
  createData('800m', 'final', 'olympics', 'open women', 1996, 'atlanta', 'https://www.youtube.com/watch?v=VNg3S3Ccad8'),
  createData('800m', 'final', 'olympics', 'open women', 2000, 'sydney', 'https://www.youtube.com/watch?v=NXdNoGo19s4&t=341s'),
  createData('800m', 'final', 'olympics', 'open women', 2004, 'athens', 'https://www.youtube.com/watch?v=iCtal7MbG8w'),
  createData('800m', 'final', 'olympics', 'open women', 2008, 'beijing', 'https://www.youtube.com/watch?v=r-6ValHi-T4'),
  createData('800m', 'final', 'olympics', 'open women', 2012, 'london', 'https://www.youtube.com/watch?v=vHU9OFSwmEs'),
  createData('800m', 'final', 'olympics', 'open women', 2016, 'rio de janeiro', 'https://www.youtube.com/watch?v=d6YT9N0AIsM'),
];

const VideoLink = ({link}) => (
  <div>
    <a href={link} target="_blank">Youtube Link</a>
  </div>
)



const tableColumnHeaders = {
  "Event": {"value": "event"},
  "Round": {"value":"round"},
  "Meet": {"value":"meet"},
  "Category": {"value":"category"},
  "Year": {"value":"year"},
  "Location": {"value":"location"},
  "Link": {"value":"link"}
}


export default class Races extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      'sortBy': 'year',
      'sortOrder': -1
    }
  }
  customRowsSort = (a, b) => {
    const { sortBy, sortOrder } = this.state
    if(a[sortBy] < b[sortBy]) { return -1 * sortOrder; }
    if(a[sortBy] > b[sortBy]) { return 1 * sortOrder; }
    return 0;
  }
  handleSortClick = (event, property) => {
    if (property === this.state.sortBy) this.setState({...this.state, sortOrder: this.state.sortOrder * -1})
    else this.setState({...this.state, sortBy: property}) }

  render() {
    return (
      <Paper>
      <Table>
        <TableHead>
          <TableRow>
            {Object.keys(tableColumnHeaders).map((header) => {
              return (
                <TableCell onClick={event => this.handleSortClick(event, tableColumnHeaders[header].value)}
                            numeric={tableColumnHeaders[header].numeric ? true : false}>
                              <div style={{'cursor': 'pointer'}}>
                                {header}
                              </div>

                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.sort(this.customRowsSort).map(row => {
            return (
              <TableRow key={row.id}
                        >
                <TableCell component="th" scope="row">
                  {row.event}
                </TableCell>
                <TableCell>{row.round}</TableCell>
                <TableCell>{row.meet}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.year}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell><VideoLink link={row.link} /></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    )
  }
}
