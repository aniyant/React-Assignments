export const payloadLogger = store => next => action => {
    if (action.payload) {
      console.log('Action payload:', action.payload);
    }
    console.log("store: ",store);
    console.log("next: ", next);
    console.log("action:", action);
    return next(action);
  };
  
  