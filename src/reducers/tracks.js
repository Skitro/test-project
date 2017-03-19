export default function create(state=[], action) {
    if (action.type === 'ADD') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}