import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import { AdminNavBar } from './AdminNavBar'
export default class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12}><AdminNavBar></AdminNavBar></Col>
        </Row>
      </Grid>
    )
  }
}