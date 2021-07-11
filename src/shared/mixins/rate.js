export default {
  methods: {
    $rate(base, asset, buySell) {
      let basePrice = 0;
      let assetPrice = 0;

      if (buySell) {
        if (base.iso === "IRR") {
          /* USER WANTS TO BUY */
          if (buySell === "buy") {
            basePrice = base?.price;
            assetPrice = asset.buy_price;

            /* USER WANTS TO SELL */
          } else if (buySell === "sell") {
            basePrice = base.price;
            assetPrice = asset?.sell_price;
          }

          /* USER WANTS TO CHANGE */
        } else {
          if (buySell === "buy") {
            basePrice = base?.price;
            assetPrice = asset.change_price;
          } else if (buySell === "sell") {
            basePrice = base.change_price;
            assetPrice = asset?.price;
          }
        }
      } else {
        /* USER WANTS TO BUY */
        if (base.iso === "IRR") {
          basePrice = base?.price;
          assetPrice = asset.buy_price;

          /* USER WANTS TO SELL */
        } else if (asset.iso === "IRR") {
          basePrice = base.price;
          assetPrice = asset?.sell_price;

          /* USER WANTS TO CHANGE */
        } else {
          basePrice = base?.price;
          assetPrice = asset.change_price;
        }
      }

      return assetPrice / basePrice;
    }
  }
};
