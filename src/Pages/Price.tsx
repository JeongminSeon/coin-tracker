import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";
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

interface PriceProps {
  coinId: string;
  coinName: string;
}

export default function Price() {
  const { isDarkMode } = useContext(ThemeContext);
  const { coinId, coinName } = useOutletContext<PriceProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["price", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading Price ..."
      ) : (
        <ApexCharts
          type="area"
          series={[
            {
              name: `${coinName}`,
              data: data?.map((item) => parseFloat(item.close)) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: isDarkMode ? "dark" : "light",
            },
            chart: {
              height: 900,
              toolbar: {
                show: false,
              },
              zoom: {
                enabled: false,
              },
              background: "transparent",
            },
            stroke: {
              curve: "straight",
            },
            grid: { show: false },
            title: {
              text: `Price high of ${coinName}`,
              align: "left",
            },
            dataLabels: {
              enabled: false,
            },
            labels: data?.map((item) => {
              const date = new Date(item.time_close * 1000);
              const formatter = new Intl.DateTimeFormat("en", {
                month: "short",
                day: "2-digit",
              });
              return formatter.format(date);
            }),
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              opposite: true,
            },
            legend: {
              horizontalAlign: "left",
            },
          }}
        />
      )}
    </div>
  );
}
