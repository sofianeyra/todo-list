import { AGREGAR_NOTA, BORRAR_NOTA } from '../actions/types';

export default function postReducer(state = [], action) {
    switch (action.type) {
        case AGREGAR_NOTA:
            return [...state, action.payload];
        case BORRAR_NOTA:
            // Aquí mantenemos el uso de action.payload.id
            return state.filter(post => post.id !== action.payload.id);
        default:
            return state;
    }
}
