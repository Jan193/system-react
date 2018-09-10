import React from 'react'
import {Select, Table} from 'antd'
import "./index.css"
 
const Option = Select.Option 

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [],
      tableHeader: [
        { title: '分类ID', dataIndex: 'CookerRecipeCategoryID', key: 'CookerRecipeCategoryID'},
        { title: '分类名称', dataIndex: 'Name', key: 'Name'},
        { title: '分类图标', dataIndex: 'IconUrl', key: 'IconUrl', render: (data) => (<img src={data}/>)},
        { title: '排序', dataIndex: 'Ord', key: 'Ord'},
        { title: '备注', dataIndex: 'Remark', key: 'Remark'},
        {
          title: '操作', dataIndex: 'option', key: 'option', render: (text, data) => (<div>
            <a className="cookbook-a-btn" href="javascript:;">下级</a>
            {
              data.ParentID >= 0 ? (<a className="cookbook-a-btn" href="javascript:;">编辑</a>) : ''
            }
            {
              data.ParentID >=0 ? (<a className="cookbook-a-btn" href="javascript:;">删除</a>) : ''
            }
          
        </div>)},
      ]
    }
  }
  componentWillMount() {
    this.getData().then(res => {
      for (let i = 0; i < res.length; i++) {
        let parent = res[i]
        parent['key'] = parent.CookerRecipeCategoryID
        if (parent.children.length <= 0) return
        for (let j = 0; j < parent.children.length; j++) {
          let child = parent.children[j]
          child.key = child.CookerRecipeCategoryID
        }
      }
      console.log(res)
      this.setState({
        list: res
      })
    })
  }
  componentDidMount() {
    
  }
  onClick() {
    
  }
  getData() {
    let promise = new Promise((resolve, reject) => {
      window.http.get('./CookerRecipeCategory.json').then(res => {
        if (res.status === 200) {
          resolve(res.data.data)
        }
      })
    })
    return promise
  }
  render() {

    return (
      <div className="CookerRecipeCategory">
        <Select defaultValue="中文简体" style={{ width: 120 }}>
          <Option value="zh">中文简体</Option>
          <Option value="en">English</Option>
        </Select>
        <Table
          className="cookbook-type"
          style={{marginTop: 10}}
          columns={this.state.tableHeader}
          bordered
          dataSource={this.state.list}/>
      </div>
    )

  }

}

export default App