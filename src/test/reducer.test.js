import reducer from '../reducers/todos'
import * as types from '../actions/actionType'

describe('todos reducer', () => {
  const initialTodoData = [
    {
      id: 1591256594282,
      text: '每週三交進度',
      completed: false,
      edited: false,
    },
  ]

  test('test default', () => {
    // 初始資料
    expect(reducer(undefined, {})).toEqual(initialTodoData)
  })

  test('test ADD_TODO', () => {
    const prevState = JSON.parse(JSON.stringify(initialTodoData))
    const action = {
      type: types.ADD_TODO,
      payload: {
        id: 123,
        text: '早睡早起',
        completed: false,
        edited: false,
      },
    }
    const expectOutcome = [action.payload, ...prevState]
    expect(reducer(prevState, action)).toEqual(expectOutcome)
  })

  test('test DELETE_TODO', () => {
    const prevState = JSON.parse(JSON.stringify(initialTodoData))
    const action = {
      type: types.DELETE_TODO,
      payload: {
        id: initialTodoData[0].id,
      },
    }
    const expectOutcome = []
    expect(reducer(prevState, action)).toEqual(expectOutcome)
  })

  test('test TOGGLE_TODO', () => {
    const prevState = JSON.parse(JSON.stringify(initialTodoData))
    const action = {
      type: types.TOGGLE_TODO,
      payload: {
        id: prevState[0].id,
      },
    }
    const expectOutcome = JSON.parse(JSON.stringify(prevState))
    expectOutcome[0].edited = !expectOutcome[0].edited
    expect(reducer(prevState, action)).toEqual(expectOutcome)
  })

  test('test CHANGE_TEXT', () => {
    const prevState = JSON.parse(JSON.stringify(initialTodoData))
    const action = {
      type: types.CHANGE_TEXT,
      payload: {
        id: prevState[0].id,
        text: 'abcdefg',
      },
    }
    const expectOutcome = JSON.parse(JSON.stringify(prevState))
    expectOutcome[0].text = action.payload.text
    expect(reducer(prevState, action)).toEqual(expectOutcome)
  })

  test('test FINISH_TODO', () => {
    const prevState = JSON.parse(JSON.stringify(initialTodoData))
    const action = {
      type: types.FINISH_TODO,
      payload: {
        id: prevState[0].id,
      },
    }
    const expectOutcome = JSON.parse(JSON.stringify(prevState))
    expectOutcome[0].completed = !expectOutcome[0].completed
    expect(reducer(prevState, action)).toEqual(expectOutcome)
  })
})
