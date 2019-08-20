import React, { useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlanet } from '../../services/planet-service';

function Planet(props) {
  const [planet, setPlanet] = useState({});
  const [keys, setKey] = useState([]);

  useEffect(() => {
    let url = props.location.search.split('url=');
    getPlanet(url[1])
      .then(res => {
        setPlanet(res);
        setKey(Object.keys(res));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Link to="/">Back</Link>
      <ul className="list-group">
        {keys.map(key => <li key={key} className="list-group-item"><p><i>{key.toUpperCase()}</i><span>{planet[key]}</span></p></li>)}
      </ul>
    </Fragment>
  );
}

export default Planet;