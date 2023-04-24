import "./App.css";
import { Col } from "antd";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Searcher from "./components/Searcher";
import PokeList from "./components/PokeList";
import { getPokemons } from "./api";
import { setPokemons } from "./actions";
import logo from "./statics/logo.svg";

const mapStateToProps = (state) => ({ pokemons: state.pokemons });

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemons(value)),
});

function App({ pokemons, setPokemons }) {
  console.log(pokemons);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      setPokemons(pokemonsRes);
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
      <PokeList pokemons={pokemons} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
