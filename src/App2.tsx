import { useQuery } from "react-query";

const getPeople3 = async (id: number) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);

    return await response.json();
  } catch (error) {
    return error;
  }
};

const getPeople4 = async (id: number) => {
  try {
    const response = await fetch(`https://swapi.dev/people/${id}`);

    return await response.json();
  } catch (error) {
    return error;
  }
};

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
