import React from 'react';
import {Form, Input, Button, Checkbox, Radio, Row, Col, message} from 'antd';
import {hashHistory} from 'react-router';
const FormItem = Form.Item;

import './editPage.less';

const EditPage = React.createClass({
    mixins: [Form.ValueMixin],

    getInitialState() {
        var localUserList = JSON.parse(localStorage.localUserList);
        let valObj = localUserList[+this.props.params.rowId];

        console.log(this.props.params.rowId);

        return {
            formData: {
                name: valObj.name,
                email: valObj.email,
                passwd: valObj.passwd,
                textarea:  valObj.textarea
            }
        };
    },



    handleSure(e) {
        e.preventDefault();

        let localUserList = JSON.parse(localStorage.localUserList);

        Object.assign(localUserList[+this.props.params.rowId], this.state.formData);

        localStorage.localUserList = JSON.stringify(localUserList);

        hashHistory.push('init');

    },

    handleBack() {
        hashHistory.push('init');
    },

    render() {
        return (
            <div className="edit-location">
                <h1 className="edit-title">修改输入的数据</h1>


                <Form horizontal>
                    <FormItem
                        id="name"
                        label="用户名："
                        labelCol={{span: 6}}
                        wrapperCol={{span: 14}}
                        required>
                        <Input type="text" id="name" name="password"  defaultValue={this.state.formData.name} onChange={this.setValue.bind(this, 'name')} />
                    </FormItem>

                    <FormItem
                        id="email"
                        label="邮箱："
                        labelCol={{span: 6}}
                        wrapperCol={{span: 14}}
                        required>
                        <Input type="text" id="email" name="email"  defaultValue={this.state.formData.email} onChange={this.setValue.bind(this, 'email')} />
                    </FormItem>
                    <FormItem
                        id="passwd"
                        label="密码："
                        labelCol={{span: 6}}
                        wrapperCol={{span: 14}}
                        required>
                        <Input type="text" id="passwd" name="passwd"  defaultValue={this.state.formData.passwd} onChange={this.setValue.bind(this, 'passwd')} />
                    </FormItem>

                    <FormItem
                        id="textarea"
                        label="备注："
                        labelCol={{span: 6}}
                        wrapperCol={{span: 14}}
                        required
                        help="随便写点什么">
                        <Input type="text" placeholder="随便写" id="textarea" name="textarea" defaultValue={this.state.formData.textarea} onChange={this.setValue.bind(this, 'textarea')} />
                    </FormItem>

                    <Row type="flex" justify="center">
                        <Col span="3">
                            <Button type="primary" htmlType="submit" className="edit-handle-sure" onClick={this.handleSure}>确定</Button>
                        </Col>
                        <Col span="3">
                            <Button type="defn" htmlType="submit" className="edit-handle-cancel" onClick={this.handleBack}>返回</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
});

export default EditPage;

