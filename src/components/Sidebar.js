import React from 'react';
import { connect } from 'react-redux';
import { setColorActive, setColorText, setColorHover } from '../modules/actions/colors';
import styled from 'styled-components';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const durationFn = function(deltaTop) {
    return deltaTop;
};

class Sidebar extends React.Component {

  render() {
    const { links } = this.props;
    let navStyle = {outlineColor: this.props.colorActive};
    let linkStyle = {color: this.props.colorText};

    // const StyledLink= styled(NavLink)`
    //   // border: 1px solid ${props => props.colorActive};
    // `;

    const StyledDiv = styled.div`
      outline-style: solid;
      outline-color: ${props => props.colorActive};
      box-shadow: 5px 5px 7px #888888;
    `;
    // if (this.state.hover) {
    //  linkStyle = {backgroundColor: 'red'}
    // } else {
    //  linkStyle = {backgroundColor: 'blue'}
    // }
//     <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></li>
// <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Test 2</Link></li>
// <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link></li>
// <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>Test 4</Link></li>
// <li><Link activeClass="active" className="test5" to="test5" spy={true} smooth={true} duration={500} delay={1000}>Test 5 ( delay )</Link></li>
// <li><Link activeClass="active" className="test6" to="anchor" spy={true} smooth={true} duration={500}>Test 6 (anchor)</Link></li>
// <li><Link activeClass="active" className="test7" to="test7" spy={true} smooth={true} duration={durationFn}>Test 7 (duration and container)</Link></li>
// <li> <a onClick={() => scroll.scrollTo(100)}>Scroll To 100!</a></li>
// <li> <a onClick={() => scroll.scrollToBottom()}>Scroll To Bottom</a></li>
// <li> <a onClick={() => scroll.scrollMore(500)}>Scroll 500 More!</a></li>
// <li> <a onClick={() => scroll.scrollMore(1000, { delay : 1500 })}>Scroll 1000 More! ( delay ) </a></li>
// <li><Link activeClass="active" className="test8" to="same" spy={true} smooth={true} duration={500}>Same target</Link></li>
// <li><Link activeClass="active" className="test9" to="same" spy={true} smooth={true} duration={500}>Same target</Link></li>
// <li><a className="test1" to="test1" onClick={() => this.scrollTo()} >Scroll to element</a></li>
// <li><a className="test1" to="test1" onClick={() => this.scrollToWithContainer()} >Scroll to element within container</a></li>

    return (
      <StyledDiv colorActive={this.props.colorActive}>
        <ul className="nav flex-column text-center">
          {links.map((link) =>
            <li className="nav-item" key={link.name}>
              <Link activeClass="active" spy={true} smooth={true} duration={500} className="nav-link navStyle" to={link.path} onMouseOver={() => this.props.setColorHover(link.color)}  onMouseLeave={() => {this.props.setColorText(this.props.colorActive); this.props.setColorHover('black');}}  onClick={() => this.props.setColorActive(link.color)} style={linkStyle}>{link.name}</Link>
            </li>
          )}
        </ul>
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

export default connect(makeMapStateToProps, mapDispatchToProps)(Sidebar);
