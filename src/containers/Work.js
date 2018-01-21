import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar'
import { setColorActive, setColorText, setColorHover } from '../modules/actions/colors';


class Work extends React.Component {
  render() {
    const StyledDiv = styled.div`
      outline-style: solid;
      outline-color: ${props => props.colorActive};
      background-color: white;
      box-shadow: 5px 5px 7px #888888;
    `;

    const StyledHeader = styled.h1`
      color: ${props => props.colorActive};
    `;
    return (
      <StyledDiv>
        <StyledHeader>Work</StyledHeader>
        <p> The Korean movement Dansaekhwa ("monochrome painting") emerged in the 1970s among painters whose
        works result from meditative, often spirtual and deeply personal methods. "Anyone can draw lines,"
        says painter Park Seo-bo, "but my lines are the edemic phonomenon which takes place only in me...It
        is similar to cultivating the religous spirit."
        </p>
      </StyledDiv>
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

export default connect(makeMapStateToProps, mapDispatchToProps)(Work);
