import { instance } from "./client";

export const getPeople = async (id: number) => {
  try {
    const response = await instance.get(`/people/${id}`);

    return response.data;
  } catch (error) {
    return error;
  }
};
export const getPeople2 = async (id: number) => {
  try {
    const response = await instance({
      url: `/people/${id}`,
    });

    return response.data;
  } catch (error) {
    return error;
  }
};

export const getPeople3 = async (id: number) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);

    return await response.json();
  } catch (error) {
    return error;
  }
};

export const getPeople4 = async (id: number) => {
  try {
    const response = await fetch(`https://swapi.dev/people/${id}`);

    return await response.json();
  } catch (error) {
    return error;
  }
};
