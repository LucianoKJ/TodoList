import React from 'react'
import TodoItem from './TodoItem'
import TodoItemEditForm from './TodoItemEditForm'
import { connect } from 'react-redux'

function TodoList(props) {
  const { todos, handleEditedSave } = props

  return (
    <>
      <div>
        <ul className="list-group">
          {todos.map((value, index) => {
            if (value.edited) {
              return (
                <TodoItemEditForm
                  key={value.id}
                  value={value}
                  handleEditSave={handleEditedSave}
                />
              )
            }
            return <TodoItem key={value.id} value={value} />
          })}
        </ul>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(TodoList)
