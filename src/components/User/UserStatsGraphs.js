import { useEffect, useState } from "react";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

import styles from "./UserStatsGraphs.module.css";

const UserStatsGraphs = ({ data }) => {
  const [graphic, setGraphic] = useState([]);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setTotalHits(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    );

    setGraphic(graphData);
  }, [data]);

  return (
    <section className={`${styles.graphic} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p className={styles.total}>Acessos: {totalHits}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={graphic}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graphic}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
