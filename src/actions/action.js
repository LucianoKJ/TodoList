import {
  ADD_TODO,
  DELETE_TODO,
  FINISH_TODO,
  TOGGLE_TODO,
  CHANGE_TEXT,
} from '../actions/actionType'

//新增
export const addTodo = (newTodoItem) => ({
  type: ADD_TODO,
  payload: newTodoItem,
})

//刪除
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
})

//修改
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
})

//修改內容
export const changeText = (id, text) => ({
  type: CHANGE_TEXT,
  payload: { id, text },
})

//完成
export const finishTodo = (id) => ({
  type: FINISH_TODO,
  payload: { id },
})
