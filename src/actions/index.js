let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}

export const showTestButtonAction = () => ({
  type: 'SHOW_TEST_BUTTON',
});

export const hideTestButtonAction = () => ({
  type: 'HIDE_TEST_BUTTON',
});

export const setTestAPIResponseAction = data => ({
  type: 'SET_TEST_API_RESPONSE',
  respData: data,
});

export const fetchTestAPIData = url => ({
  type: 'FETCH_TEST_API_DATA',
  url,
});
