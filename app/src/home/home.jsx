import React from 'react';
import './home.less';
import { Link } from 'react-router'
import { Button, Row, Col } from 'antd';

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="home-location">
                <Row type="flex" justify="center" align="middle">
                    <h1 className="title">welcome to MWT</h1>
                </Row>
                <Row type="flex" justify="center" align="middle">
                    <Col>
                        <Button type="primary" size="large">
                            <Link to="/login">Login</Link>
                        </Button>
                    </Col>

                    <Col offset={1}>
                        <Button size="large">
                            <Link to="/register">Register</Link>
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}