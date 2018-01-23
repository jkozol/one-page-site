import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar'
import { setColorActive, setColorText, setColorHover } from '../modules/actions/colors';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class Home extends React.Component {
  render() {

    const StyledDiv = styled.div`
      outline-style: solid;
      outline-color: ${props => props.colorActive};
      background-color: white;
      box-shadow: 5px 5px 7px #888888;
    `;

    return (
      <div>
        <Link activeClass="active" spy={true} smooth={true} duration={500} to={'about'}><h1>Jacob Kozol</h1></Link>
        <h2>Web-Engineer&-Designer</h2>
      </div>
    );
  }
};

const makeMapStateToProps = (state, props) => {
  const mapStateToProps = (state, props) => {
    return {
      colorText: state.colors.colorText,
      colorActive: state.colors.colorActive,
      colorHover: state.colors.colorHover,
    }
  };
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch) => ({
  setColorActive: color => {
    dispatch(setColorActive(color));
  },
  setColorText: color => {
    dispatch(setColorText(color));
  },
  setColorHover: color => {
    dispatch(setColorHover(color));
  },
});

export default connect(makeMapStateToProps, mapDispatchToProps)(Home);
