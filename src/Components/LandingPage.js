import React from "react";
import AboutSection from './AboutSection'
import MainPageSection from './MainPageSection'
import Contact from './Contact'
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

class LandingPage extends React.Component {

  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }

  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
                <div className="section">
                    <AboutSection className="section" />
                </div>
                <div className="section">
                    <MainPageSection />
                </div>
                <div className="section">
                    <Contact />
                </div>
            </div>
          );
        }}
      />
    );
  }
}

export default LandingPage;
