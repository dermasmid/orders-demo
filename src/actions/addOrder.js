const orderAction = (data) => {
    return {
        type: 'ADD_ORDERS',
        payload: data
    };
};

export default orderAction;
