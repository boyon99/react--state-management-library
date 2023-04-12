// action 객체 -> {type : , poyload : }
// action 타입 -> type에 들어갈 상수
// action 객체 생성 함수 -> payload를 받아서 action 객체를 생성해주는 함수

// 액션 타입
// action type 상수를 정의
// 카운터와 관련하여 어떤 action type이 있을지
const INC_COUNT = "INC_COUNT"
const DEC_COUNT = "DEC_COUNT"

// 액션 객체 생성 함수
// incCount(2) -> 현재 값의 +2가 되도록
// {type: INC_COUNT, payload: {diff : 2}}
export function incCount(diff) {
  return {
    type: INC_COUNT,
    // 추가적으로 필요한 데이터가 있다면 (payload)
    payload: { diff }
  }
}

export function decCount(diff) {
  return {
    type: DEC_COUNT,
    // 추가적으로 필요한 데이터가 있다면 (payload)
    payload: { diff }
  }
}

// 리듀서 함수
const initialState = 0

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INC_COUNT:
      return state + action.payload.diff
    case DEC_COUNT:
      return state - action.payload.diff
    default:
      return state
  }
}