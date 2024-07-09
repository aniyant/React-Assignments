export const actionTypeLogger = store => next => action => {
    console.log('Dispatching action type:', action.type);

    console.log("store: ",store);
    console.log("next: ", next);
    console.log("action:", action);
    return next(action);
  };

  