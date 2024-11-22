export function inputValueReducer(state={}, action) {   
    if (action.type === "TODO_TITLE") {
        return {
            ...state, 
            text: action.payload.text
        } 
    } else if (action.type === "TODO_ADD") {
        return {
            ...state,
            text: ""
        }
    }

    return state
}

export const initialInputValue = {
     text: ""
}

export function selectText(state) {
    return state.inputValue.text;
}

export function editText(newText) {
    return {
        type: "TODO_TITLE",
        payload: {
          text: newText
        }
    };
}