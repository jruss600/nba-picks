import React from 'react';
import Card  from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

const Legend = () => {
    return(
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <h4>Legend</h4>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <div className="container">
                            <div className="row" style={{margin: '2px 150px 20px 150px'}}>
                            <div className="col-sm projWin"><span style={{verticalAlign: 'middle'}}>Projected Win</span></div>
                            <div className="col-sm projLoss"><span style={{verticalAlign: 'middle'}}>Projected Loss</span></div>
                            <div className="col-sm win"><span style={{verticalAlign: 'middle'}}>Win</span></div>
                            <div className="col-sm loss"><div>Loss</div></div>
                            </div>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>  
    )
}

export default Legend;