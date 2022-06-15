import { reactive, toRefs } from 'vue'

const state = reactive({
    showtoolbar: false
})

export default () => {

  const setToolbarView = (view) => {
    state.showtoolbar = view
  }

  return {
    ...toRefs(state),
    setToolbarView
  }
}