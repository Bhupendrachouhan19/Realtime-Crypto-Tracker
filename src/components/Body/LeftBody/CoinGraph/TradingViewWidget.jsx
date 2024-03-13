// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

class TradingViewWidget extends React.PureComponent {
  constructor(props) {
    super(props);

    this.container = React.createRef();
  }

  script = document.createElement("script");

  componentDidMount() {
    this.script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    this.script.type = "text/javascript";
    this.script.async = true;
    this.script.innerHTML = `
          {
            "symbols": [
              [
                "BITSTAMP:BTCUSD|7D"
              ]
            ],
            "chartOnly": false,
            "locale": "en",
            "colorTheme": "light",
            "autosize": true,
            "showVolume": false,
            "showMA": false,
            "hideDateRanges": false,
            "hideMarketStatus": true,
            "hideSymbolLogo": false,
            "scalePosition": "left",
            "scaleMode": "Normal",
            "fontFamily": "Arial, sans-serif",
            "fontSize": "10",
            "noTimeScale": false,
            "valuesTracking": "1",
            "changeMode": "price-and-percent",
            "chartType": "area",
            "maLineColor": "#2962FF",
            "maLineWidth": 1,
            "maLength": 9,
            "gridLineColor": "rgba(91, 156, 246, 0.14)",
            "lineWidth": 2,
            "lineType": 0,
            "dateRanges": [
              "1d|3",
              "1w|1D",
              "1m|1D",
              "3m|1D",
              "6m|1D",
              "12m|1M",
              "all|12M"
            ],
            "lineColor": "rgba(91, 156, 246, 1)",
            "topColor": "rgba(187, 217, 251, 0.2)",
            "bottomColor": "rgba(255, 255, 255, 0.39)",
            "dateFormat": "dd MMM",
            "timeHoursFormat": "24-hours"
          }`;

    this.container.current.appendChild(this.script);
    // console.log("Component is mounted");
  }

  render() {
    return (
      <div
        className="tradingview-widget-container flex items-center mt-3 mx-auto min-w-[93vw] md:min-h-[60vh] lg:min-w-[65vw] lg:min-h-[70vh] border-4 border-red-500"
        ref={this.container}
      >
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          ></a>
        </div>
      </div>
    );
  }
}

export default memo(TradingViewWidget);
