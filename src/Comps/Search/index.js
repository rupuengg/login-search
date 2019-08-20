import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fontSize } from '../../helpers/font-size';
import { search } from '../../services/planet-service';

function Search(props) {
  let textInput = null;
  const [searchText, setSearchText] = useState('');
  const [planets, setPlanet] = useState(props.planets);

  const onButtonHandle = (searchText) => {
    setSearchText(searchText);
    search(searchText)
      .then(res => {
        setPlanet(res);
        props.search(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <Fragment>
      <div className="search">
        <input
          ref={input => { textInput = input }}
          defaultValue={searchText}
          type="text"
          placeholder="Search..."
          className="form-control"
          name="username"
          onChange={e => onButtonHandle(textInput.value)} />
      </div>
      <ul className="list-group">
        {planets.map(planet => <li key={planet.created} className="list-group-item"><p style={fontSize(planet.population)}><Link to={'/planet/?url=' + planet.url}><i>{planet.name}</i></Link></p></li>)}
      </ul>
    </Fragment>
  );
}

const mapStoreToProps = store => {
  return {
    planets: store.searchPlanent.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: (planets) => dispatch({ type: 'SEARCH', results: planets })
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Search);