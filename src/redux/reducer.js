const initialState = {
    username: '',
    profile_pic: '',
    user_id: 0
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        default:
            return state;
    }
}
