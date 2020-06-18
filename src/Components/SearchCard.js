import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardHeader, Button } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

class SearchCard extends Component {
  
  render(props) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7 offset-3 text-center">
            <Card>
                <CardHeader>iTunes Song Search</CardHeader>
                <CardBody>
                    <CardTitle>Retrieve song details from iTunes' enormous database</CardTitle>
                    <br></br>
                    <InputGroup>
                        <Input onChange={this.props.onInputChange} placeholder="Enter artist/song/album name"/>
                        <InputGroupAddon addonType="append">
                            <Button color="primary" onClick={() => this.props.onButtonSubmit()}>Search</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchCard;