import { useEffect, useState } from "react";
import styled from "styled-components";
import Searchresults from "./assets/components/Searchresults";
import SearchResults from "./assets/components/Searchresults";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);
        const json_data = await response.json();
        console.log("i am base_url data" + JSON.stringify(json_data));
        setData(json_data);
        setLoading(false);
      } catch (error) {
        setError("unable to fetch data...");
      }
    };

    fetchData();
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading.....</div>;

  return (
    <Container>
      <TopContainer>
        <img src="./images/logo.svg" />
        <input type="search" placeholder="Search Food" />
      </TopContainer>

      <FilterConatiner>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterConatiner>

    <SearchResults data={data}></SearchResults>
      
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: green; */
`;

const TopContainer = styled.section`
  height: 100px;
  margin: 30px 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    all: unset;
    background-color: transparent;
    border: 1px solid red;
    color: white;
    border-radius: 5px;
  }
`;

const FilterConatiner = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 24px;
`;
export const Button = styled.section`
  all: unset;
  background-color: red;
  color: white;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 6px 12px;
  cursor: pointer;
`;


