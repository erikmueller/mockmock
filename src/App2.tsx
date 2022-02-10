import { useQuery } from "react-query";
import { getPeople3, getPeople4 } from "./api/getPeople";

const App = (): JSX.Element => {
  const { data } = useQuery("people1", () => getPeople3(1));

  return (
    <div>
      Name: {data?.name}
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
};

export default App;
