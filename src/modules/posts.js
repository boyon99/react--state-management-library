import axios from "axios"

// 액션 타입
const LOADING = "posts/LOADING"
const SUCCESS = "posts/SUCCESS"
const ERROR = "posts/ERROR"

// 액션 객체 생성 함수
// async 함수를 리턴하는 함수를 쓸 수 있도록 하는 redux-thunk
export const getPosts = () => async (dispatch) => {
  // 여기 안에서 LOADING -> SUCCESS -> ERROR
  dispatch({ type: LOADING })
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch({ type: SUCCESS, payload: response.data })
  } catch (e) {
    dispatch({ type: ERROR, error: e })
  }
}

// 리듀서 함수
const initialState = {
  loading: false,
  data: null,
  error: null
}

export default function posts(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        loading: true,
        data: null,
        error: null
      }
    case SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null
      }
    case ERROR:
      return {
        loading: false,
        data: null,
        error: action.error
      }
    default:
      return state
  }
}