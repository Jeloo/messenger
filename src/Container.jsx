import React, { Component } from 'react';
import {Grid, Row, Col} from '@jetbrains/ring-ui/components/grid/grid';

export default class Container extends Component {
    render() {
        return (
            <Grid>
                <Row start="xs">
                    <Col xs={12} sm={4} md={6} lg={3}>
                        <div className="cell">Cell 1</div>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={3}>
                        <div className="cell">Cell 2</div>
                    </Col>
                    <Col xs={12} smOffset={4} sm={8} md={12} lg={6}>
                        <div className="cell">Cell 3</div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}