import { userData } from '../constants/userData'

// 액션 타입
const ADD_USER = "user/ADD_USER"
const DELETE_USER = "counter/DELETE_USER";

// 액션 객체 생성 함수
let nextId = userData.length + 1

export function addUser(userInfo) {
  return {
    type: ADD_USER,
    payload: { ...userInfo, id: nextId++ },
  }
}
export function deleteUser(userId) {
  return {
    type: DELETE_USER,
    payload: { userId },
  }
}

// 리듀서 함수
const initialState = userData

export default function user(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        { ...action.payload }
      ]
    case DELETE_USER:
      return state.filter((user) => user.id !== action.payload.userId)
    default:
      return state;
  }
}