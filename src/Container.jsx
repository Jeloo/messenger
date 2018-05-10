import React, { Component } from 'react';
import {Grid, Row, Col} from '@jetbrains/ring-ui/components/grid/grid';

export default class Container extends Component {
    render() {
        return (
            <Grid>
                <Row start="xs">
                    <Col xs={12} sm={4} lg={3}>
                        <div className="cell">Cell 1</div>
                    </Col>
                    <Col xs={12} sm={8} lg={9}>
                        <div className="cell">Cell 2</div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}