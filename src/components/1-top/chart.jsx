import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import './chart.css';

export default function Chart() {
  const [data, setData] = useState([
    { oy: "Yanvar", savdo: 900 },
    { oy: "Fevral", savdo: 300 },
  ]);
  const [oy, setOy] = useState("");
  const [savdo, setSavdo] = useState("");
  const [xato, setXato] = useState("");

  useEffect(() => {
    setXato(""); 
  }, [oy, savdo]);

  const qoshish = () => {
    if (!oy || !savdo || isNaN(savdo) || savdo <= 0) {
      setXato("Input maydonlari bosh malumot kiriting! 😊");
      return;
    }
    setData([...data, { oy, savdo: Number(savdo) }]);
    setOy("");
    setSavdo("");
  };

  return (
    <div className="container">
      <h2>1-topshiriq</h2>
      <input
        className="input"
        type="text"
        placeholder="Oy"
        value={oy}
        onChange={(e) => setOy(e.target.value)}
      />
      <input
        className="input"
        type="number"
        placeholder="Savdo"
        value={savdo}
        onChange={(e) => setSavdo(e.target.value)}
      />
      <button className="button" onClick={qoshish}>Qo‘shish</button>

      {xato && <p className="error">{xato}</p>}

      <BarChart className="barchart" width={400} height={300} data={data}>
        <XAxis dataKey="oy" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="savdo" fill="black" />
      </BarChart>
      <hr className="hr" />
    </div>
  );
}
