// action 생성 함수 
import { INC_COUNT, DEC_COUNT } from "../constants/counter";

export function incCount() {
  return {
    type: INC_COUNT,
    // 추가적으로 필요한 데이터가 있다면 (payload)
  }
}

export function decCount() {
  return {
    type: DEC_COUNT,
    // 추가적으로 필요한 데이터가 있다면 (payload)
  }
}

// action 객체 -> {type : , poyload : }
// action 타입 -> type에 들어갈 상수
// action 객체 생성 함수 -> payload를 받아서 action 객체를 생성해주는 함수