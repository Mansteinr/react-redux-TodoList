import React, { Component } from 'react'
// 通过connect来获取provider提供的数据
import { connect } from 'react-redux'


const TodoList = (props) => { // 无状态组件
  const { inputValue, handleInputChange, handleDelete,  handleClick, list } = props
  return(<div>
    <div>
      <input type="text" value= { inputValue } onChange={ handleInputChange }/>
      {/* <input value={this.props.inputValue} onChange={this.handleInputChange.bind(this)}/> */}
      <button onClick={ handleClick }>提交</button>
    </div>
    <ul>
      {
        list.map((v, k) => {
          return <li onClick={() => handleDelete(k)} key={k}>{v}</li>
        })
      }
    </ul>
  </div>)
}

// class TodoList extends Component{

//   render() {
//     const { inputValue, handleInputChange, handleDelete,  handleClick, list } = this.props
//     return(<div>
//       <div>
//         <input type="text" value= { inputValue } onChange={ handleInputChange }/>
//         {/* <input value={this.props.inputValue} onChange={this.handleInputChange.bind(this)}/> */}
//         <button onClick={ handleClick }>提交</button>
//       </div>
//       <ul>
//         {
//           list.map((v, k) => {
//             return <li onClick={() => handleDelete(k)} key={k}>{v}</li>
//           })
//         }
//       </ul>
//     </div>)
//   }
// }

// 将state中的数据映射到组件的props中 这样组件取数据可以通过props取到公共数据
// state 为store中的数据
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// 将store.dispatch这个方法挂载到props上面,组件可以通过props直接调用该方法
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleClick() {
      const action = {
        type: 'add_item'
      }
      dispatch(action)
    },
    handleDelete(index) {
      const action = {
        type: 'delete_item',
        index
      }
      dispatch(action)
    }
  }
}
// // 让这个组件和store连接
// export default connect(null, null)(TodoList)

// 让这个组件和store通过mapStateToProps这个规则和连接
// export default connect(mapStateToProps, null)(TodoList)


// 让这个组件和store通过mapDispatchToProps这个规则对state中的数据做修改
// 数据改变页面自动发生改变
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)