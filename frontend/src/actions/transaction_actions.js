export const TRADE_STOCK = 'TRADE_STOCK';

export const tradeStock = transaction => {
    return ({
        type: TRADE_STOCK,
        transaction
    });
};


