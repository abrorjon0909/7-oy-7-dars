import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import axios from "axios";

export default function Api() {
  const [data, setData] = useState([]);
  const [loadin, setloadin] = useState(true);

  useEffect(() => {
    axios.get("https://api.exchangerate-api.com/v4/latest/USD")
      .then((reponsiv) => {
        const pul = Object.entries(reponsiv.data.rates).slice(0, 10).map(([nom, qiymat]) => ({
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
        <LineChart className="barchart"  width={400} height={300} data={data}>
          <XAxis dataKey="nom" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="qiymat" stroke="blue" />
        </LineChart>
      }\

      <hr className="hr" />
    </div>
  );
}
