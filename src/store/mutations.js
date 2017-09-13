import * as types from './mutation-types'
const mutation = {
  [types.SET_ADDRESS](state, address) {
    state.address = address
  }
}
export default mutation