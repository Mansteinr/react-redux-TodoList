import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from './store'

const App = (
  // Provider连接了store 那么Provider里面所有的组件都有能力获取store里面的数据
  // Provider 是react-redux提供提供的API
  <Provider store={store}> 
    <TodoList/>
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'))