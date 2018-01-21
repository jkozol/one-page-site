import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Home from './Home';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Sidebar from '../components/Sidebar';
import { setColorActive, setColorText, setColorHover } from '../modules/actions/colors';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const durationFn = function(deltaTop) {
    return deltaTop;
};

class App extends React.Component {
  constructor (props){
      super(props);
      this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
        scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
        }));
  }


  render() {
    const links = [
      {
        name: 'about',
        path: 'about',
        color: 'red',
      },
      {
        name: 'work',
        path: 'work',
        color: 'green',
      },
      {
        name: 'skills',
        path: 'skills',
        color: 'pink',
      },
    ];

    const CircleDiv = styled.div`
     box-sizing: border-box;
     border: 1px solid pink;
     border-radius: 100%;
     position: absolute;
    `;

    const StyledDiv = styled.div`
      height: 5px;
      width: 5px;
      outline-style: solid;
      outline-color: ${props => props.colorActive};
      background-color: white;
      box-shadow: 5px 5px 7px #888888;
    `;


    return (
      <div className="container-fluid">
        <div id="home">
          <Home />
        </div>
        <div id="sidebar">
          <Sidebar links={links}/>
        </div>
        <div id="content">
          <Element name="about" className="element" >
            <About />
          </Element>

          <Element name="work" className="element" >
            <Work />
          </Element>

          <Element name="skills" className="element" >
            <Skills />
          </Element>
        </div>
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

export default connect(makeMapStateToProps, mapDispatchToProps)(App);
