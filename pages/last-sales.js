import React, { useEffect, useState } from "react";
import useSWR from "swr";

const LastSales = (props) => {
  const [sales, setSales] = useState(props.sales);
  const [isLoading, setIsLoading] = useState(false);

  // const { data, error } = useSWR(
  //   "https://next-udemy-1420a-default-rtdb.firebaseio.com/sales.json"
  // );
  // useEffect(() => {
  //   console.log(data);
  //   if (data) {
  //     const transformSales = [];
  //     for (const key in data) {
  //       transformSales.push({
  //         id: key,
  //         username: data[key].username,
  //         volume: data[key].volume,
  //       });
  //     }
  //     setSales(transformSales);
  //   }
  // }, [data]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://next-udemy-1420a-default-rtdb.firebaseio.com/sales.json")
      .then((res) => res.json())
      .then((data) => {
        const transformSales = [];
        for (const key in data) {
          transformSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(transformSales);
        setIsLoading(false);
      });
  }, []);

  // if (error) {
  //   return <div>ERROR</div>;
  // }
  if (!sales) {
    return <div>No data</div>;
  }
  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.key}>
          <div>{sale.key}</div>
          <div>{sale.username}</div>
          <div>{sale.volume}</div>
        </li>
      ))}
    </ul>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(
    "https://next-udemy-1420a-default-rtdb.firebaseio.com/sales.json"
  );
  const data = response.json();

  const transformSales = [];
  for (const key in data) {
    transformSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  return { props: { sales: transformSales }, revalidate: 10 };
};

export default LastSales;
