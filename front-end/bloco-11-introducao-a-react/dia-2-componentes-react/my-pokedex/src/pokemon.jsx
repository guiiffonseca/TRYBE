import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const {pokemon: {name, type, averageWeight, image}} = this.props;
    return (
      <div className="pokecard">
        <div className="data">
          <p>name : {name}</p>
	  <p>type : {type}</p>
	  <p>
	  {`AverageWeight : ${averageWeight.value} ${averageWeight.measurementUnit}`}
	  </p>
	</div>
	<img src={image} alt=""></img>
      </div>
    )
  }
}









Pokemon.propTypes = {
	pokemon: PropTypes.shape({
	  name: PropTypes.string,
	  type: PropTypes.string,
	  averageWeight: PropTypes.shape({
	    measurementUnit: PropTypes.string,
	    value: PropTypes.number,
	  }),
	  image: PropTypes.string,
	}).isRequired,
      };

export default Pokemon;