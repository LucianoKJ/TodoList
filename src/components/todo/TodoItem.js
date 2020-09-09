import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, toggleTodo, finishTodo } from '../../actions/'

function TodoItem(props) {
  // console.log(props)
  // 先解構賦值，直接套用由props得到的變數值
  const { value, deleteTodo, toggleTodo, finishTodo } = props

  const date = new Date(value.id)

  //完成狀態的CSS
  const cssClasses = value.completed
    ? 'list-group-item d-flex justify-content-between align-items-center list-group-item-dark'
    : 'list-group-item d-flex justify-content-between align-items-center'

  const handleDelete = (id) => {
    deleteTodo(id)
  }
  const handleEditedToggle = (id) => {
    toggleTodo(id)
  }
  const handleCompletedToggle = (id) => {
    finishTodo(id)
  }

  React.useEffect(() => {
    console.log(value)
  })
  return (
    <>
      <li className={cssClasses}>
        {value.text}
        <button
          type="button"
          className="btn btn-info"
          onClick={() => {
            handleEditedToggle(value.id)
          }}
        >
          edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            handleDelete(value.id)
          }}
        >
          delete
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            handleCompletedToggle(value.id)
          }}
        >
          {value.completed ? 'canceling completed' : 'completed'}
        </button>

        <span className="badge badge-primary badge-pill">
          {date.toLocaleString()}
        </span>
      </li>
    </>
  )
}
const mapDispatchToProps = {
  deleteTodo,
  toggleTodo,
  finishTodo,
}

export default connect(null, mapDispatchToProps)(TodoItem)
