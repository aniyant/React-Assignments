export const Reducer = (state,{type,payload}) => {
    switch (type) {
        case 'latitude':
            return {
                ...state,
                 address: {
                  ...formState.address,
                   coordinates: {
                    ...formState.address.coordinates,
                     'latitude': payload
                   },
                 },
               }
        case 'longitude':
            return {
                ...state,
                 address: {
                  ...formState.address,
                   coordinates: {
                    ...formState.address.coordinates,
                     'longitude': payload,
                   },
                 },
               }
        default:
            return state
    }
}