import React from 'react'
import { HashRouter as Router, Route, Link} from 'react-router-dom'
import "./index.css"
import {addKey} from '../../../source/js/comm.js'
import {Table, Input, Select, Button} from 'antd'

const Option = Select.Option



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [],
      tableHeader: [
        { title: '编号', dataIndex: 'CookerRecipeID', key: 'CookerRecipeID'},
        { title: '菜谱分类', dataIndex: 'CategoryName', key: 'CategoryName'},
        { title: '主图', dataIndex: 'ImageUrl', key: 'ImageUrl', render: (data) => (<img src={data}/>)},
        { title: '名称', dataIndex: 'Name', key: 'Name'},
        { title: '加热温度', dataIndex: 'Temperature', key: 'Temperature'},
        { title: '加热时长', dataIndex: 'Duration', key: 'Duration'},
        { title: '自定义菜谱', dataIndex: 'IsCustom', key: 'IsCustom'},
        { title: '热门', dataIndex: 'IsHot', key: 'IsHot'},
        {
          title: '操作', dataIndex: 'option', key: 'option', render: (text, data) => (<div>
            {/* <a className="cookbook-a-btn" href="javascript:;" >编辑</a> */}
            <Link to="/index/edit">编辑</Link>
            <a className="cookbook-a-btn" href="javascript:;">移除</a>
        </div>)},
      ]
    }
  }
  componentWillMount() {
    this.getData()
  }
  getData() {
    window.http.get('./cook_list2.json').then(res => {
      if (res.status === 200) {
        let data = res.data.data
        data.rows = addKey(data.rows, 'CookerRecipeID')
        
        this.setState({
          list: data
        })
        console.log(this.state.list);
      }
    })
  }
  edit() {
    this.props.history.push('/edit')
  }
  render() {
    return (
      <div className="CookerRecipe">
        <div className="cook-list flex">
          <div className="cook-list-item">
            <p>语言</p>
            <Select
              defaultValue="简体中文"
            >
              <Option value="zh">简体中文</Option>
              <Option value="en">English</Option>
            </Select>
          </div>
          <div className="cook-list-item">
            <p>菜谱分类</p>
            <Select></Select>
          </div>
          <div className="cook-list-item">
            <p>菜谱名称</p>
            <Input placeholder="菜谱名称"/>
          </div>
          <div className="cook-list-item">
            <p style={{opacity: 0}}>查找</p>
            <Button>查找</Button>
          </div>
        </div>
        <Table
          className="cook-table-list"
          columns={this.state.tableHeader}
          bordered
          style={{ marginTop: 10 }}
          dataSource={this.state.list.rows}
        ></Table>
      </div>
    )
  }

}

export default App