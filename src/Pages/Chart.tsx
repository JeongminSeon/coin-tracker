import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import ThemeContext from "../Context/ThemeContext";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
  coinName?: string;
}

export default function Chart() {
  const { coinId } = useOutletContext<ChartProps>();
  const { isDarkMode } = useContext(ThemeContext);

  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohclv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );

  return (
    <div>
      {isLoading ? (
        "Loading chart... "
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data:
                data?.map((item) => {
                  return {
                    x: new Date(item.time_close * 1000).toUTCString(),
                    y: [item.open, item.high, item.low, item.close].map(
                      (price) => parseFloat(price)
                    ),
                  };
                }) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: isDarkMode ? "dark" : "light",
            },
            chart: {
              height: 500,
              width: 300,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
              },
              type: "datetime",
              categories: data?.map((date) =>
                new Date(date.time_close * 1000).toUTCString()
              ),
            },
            tooltip: {
              y: {
                formatter: (value) => `$ ${value.toFixed(3)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}
