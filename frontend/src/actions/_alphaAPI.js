export const formatAPICall = stockInfo => {
    const rawStocks = stockInfo.stock.data["Global Quote"]
    const symbolData = (rawStocks["01. symbol"]);
    const openData = parseInt(rawStocks["02. open"]);
    const highData = rawStocks["03. high"];
    const lowData = rawStocks["04. low"];
    const priceData = rawStocks["05. price"];
    const volumeData = rawStocks["06. volume"];
    const latestTradingDayData = rawStocks["07. latest trading day"];
    const previousCloseData = rawStocks["08. previous close"];
    const changeData = rawStocks["09. change"];
    const changePercentData = rawStocks["10. change percent"];

    const formatted = {
        symbol: symbolData,
        open: openData,
        high: highData,
        low: lowData,
        price: priceData,
        volume: volumeData,
        latestTradingDay: latestTradingDayData,
        previousClose: previousCloseData,
        change: changeData,
        changePercent: changePercentData
    };
    return formatted;
}