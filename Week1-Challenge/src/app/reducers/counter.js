import initialState from '../models/index';

function counter(state = initialState, action) {
  console.log(initialState);
  console.log(state);
    switch(action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1
        };
      case 'DECREMENT':
        return {
          count: state.count - 1
        };
      default:
        return state;
    }
}

export default counter;
