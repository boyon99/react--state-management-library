// action 생성 함수 
import { INC_COUNT, DEC_COUNT } from "../constants/counter";

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

// action 객체 -> {type : , poyload : }
// action 타입 -> type에 들어갈 상수
// action 객체 생성 함수 -> payload를 받아서 action 객체를 생성해주는 함수