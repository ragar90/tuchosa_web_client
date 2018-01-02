import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import AdminNavBar from './AdminNavBar'


export default class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <AdminNavBar/>
        </Row>
      </Grid>
    )
  }
}