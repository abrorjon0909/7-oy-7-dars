import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function Api() {
  const [data, setData] = useState([]);
  const [loadin, setloadin] = useState(true);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((json) => {
        const pul = Object.entries(json.rates).slice(0, 10).map(([nom, qiymat]) => ({
          nom,
          qiymat,
        }));
        setData(pul);
        setloadin(false);
      })
      .catch(() => setloadin(false));
  }, []);

  return (
    <div className="container">
      <h2>Valyuta Kurslari</h2>
      {loadin ? <p>Yuklanmoqda...</p> : 
        <LineChart className="barchart" width={400} height={300} data={data}>
          <XAxis dataKey="nom" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="qiymat" stroke="blue" />
        </LineChart>
      }
    </div>
  );
}
