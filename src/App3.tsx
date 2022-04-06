import { useQuery } from "react-query";
import { client } from "./api/client";

const getPeople = async (id: number) => {
  try {
    const response = await client.get(`/people/${id}`);

    return response.data;
  } catch (error) {
    return error;
  }
};

const getPeople2 = async (id: number) => {
  try {
    const response = await client({
      method: "GET",
      url: `/people/${id}`,
    });

    return response.data;
  } catch (error) {
    return error;
  }
};

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
  const { data } = useQuery("people1", () => getPeople(1));

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
