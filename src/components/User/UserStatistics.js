import { Suspense, lazy, useEffect } from "react";
import { useFetch } from "../../hooks";
import { Error, Head, Loading } from "../Helper";
import { STATS_GET } from "../../api/api";

const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"));

const UserStatistics = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const getData = async () => {
      const { url, options } = STATS_GET();
      await request(url, options);
    };
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  else return null;
};

export default UserStatistics;
