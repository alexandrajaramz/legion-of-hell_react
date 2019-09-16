import React from 'react';
import PropTypes from 'prop-types';


class Filters extends React.Component {
    render() {
        return (
            <form className="app__main-form">
                <label htmlFor="email" className="form__label">
                    Introduce tu email para comprobar si estás en la base de datos:
                </label>
                <input 
                    type="text" 
                    id="email" 
                    name="email" 
                    className="form__input"
                    onChange={this.props.getInputValue}
                />
            </form>
        );
    }
}

Filters.propTypes = {
    getInputValue: PropTypes.func.isRequired
}

export default Filters;