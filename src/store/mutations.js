export default {
  CHANGE_THEME (state, payload) {
    state.themeColor = payload
  },
  CHANGE_SNACK (state, payload) {
    state.snack = Object.assign(state.snack, payload)
  }
}
