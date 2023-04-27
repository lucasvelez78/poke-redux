import "./App.css";
import { Col, Spin } from "antd";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Searcher from "./components/Searcher";
import PokeList from "./components/PokeList";
import { getPokemons } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions";
import logo from "./statics/logo.svg";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12} className="spinner">
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokeList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
