import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { hashHistory } from 'react-router';
import './login.less';

const createForm = Form.create;
const FormItem = Form.Item;

let Login = React.createClass({
    handleSubmit(e) {
        e.preventDefault();

        const submitVal = this.props.form.getFieldsValue();

        let canLogin = false;

        let localUserList = !localStorage.localUserList ? [] : JSON.parse(localStorage.localUserList);




        localUserList.forEach(function(item,index){
            if(submitVal.userName === item.name && submitVal.password === item.passwd){
                canLogin = true;
                return;
            }
        });


        if(canLogin) {
            hashHistory.push('init');
        } else {
            hashHistory.push({pathname: 'error', query: {errorMessage: '用户名或密码错误'}})

        }
    },

    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className="login-location">
                <h1 className="text-center">LOGIN</h1>
                <Form inline onSubmit={this.handleSubmit}>
                    <FormItem
                        label="账户"
                    >
                        <Input placeholder="请输入账户名"
                            {...getFieldProps('userName')}
                        />
                    </FormItem>
                    <FormItem
                        label="密码"
                    >
                        <Input type="password" placeholder="请输入密码"
                            {...getFieldProps('password')}
                        />
                    </FormItem>
                    <FormItem>
                        <Checkbox {...getFieldProps('agreement')}>记住我</Checkbox>
                    </FormItem>
                    <Button type="primary" htmlType="submit">登录</Button>
                </Form>
            </div>
        );
    }
});

export default createForm()(Login);