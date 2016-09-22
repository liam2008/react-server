import React from 'react';
import {Table,Icon,Tooltip} from 'antd';
import { Link } from 'react-router';

// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch';
import 'es6-promise/dist/es6-promise.min.js';
import 'fetch-ie8/fetch.js';
import './welcome.less';

import { hashHistory } from 'react-router';

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tData:[],
            loading: true
        }
    }

    // 行单击事件
    rowClick = (e) => {
        console.log(e.key);
    };

    //// 获取表格数据
    fetchTableData = () => {
        this.setState({loading:false});
        this.setState({tData:JSON.parse(localStorage.localUserList)});
    };



    handleDelete = (num) => {

        let localUserList = JSON.parse(localStorage.localUserList);

        localUserList.splice(num,1);

        localStorage.localUserList = JSON.stringify(localUserList);


        this.setState({
            tData:localUserList
        });
    };

    // 组件渲染后获取外界数据(GET)
    componentDidMount() {
        this.fetchTableData();
    }

    location = () => {
        return location.href.substring(0,location.href.lastIndexOf('/')+1);
    }

    render() {
        /*定义表格列*/
        const columns = [{
            title: '用户名',
            dataIndex: 'name'
        }, {
            title: '密码',
            dataIndex: 'password'
        }, {
            title: '邮箱',
            dataIndex: 'email'
        },
            {
            title: '备注',
            dataIndex: 'content'
        }, {
            title: '操作',
            dataIndex: 'handle',
            render:
                (t,r,i) => (
                    <span>
                        <Tooltip title="编辑"><Link to={"init/editpage/"+(i)}><i className="fa fa-pencil" /></Link></Tooltip>&nbsp;&nbsp;
                        <Tooltip title="删除" onClick={ () => { this.handleDelete(i)}}><i className="fa fa-trash" style={{color:'#FD5B5B'}}/></Tooltip>
                    </span>
                )
        }];

        return (
            <div id="wrap">
                <div id="table">
                    <Table
                        rowSelection={{}}
                        dataSource={this.state.tData}
                        columns={columns}
                        size="middle"
                        pagination={{size:'large'}}
                        onRowClick={this.rowClick}
                        loading={this.state.loading}
                        />
                </div>
            </div>
        )
    }
}
