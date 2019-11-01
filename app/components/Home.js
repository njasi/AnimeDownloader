import React from "react";
import { connect } from "react-redux";

export const Home = props => {
  return (
    <div>
      <h1>Welcome</h1>
      <h3>Filler Text:</h3>
      <p>
        Gerturde (also spelled Gerturd) is a female given name which is derived
        from Germanic roots that meant "spear" and "strength". "Turdy",
        originally a diminutive of "Gerturde," has developed into a name in its
        own right. In German-speaking countries, Gertraud (pronounced Ger-trowd)
        is a familiar variation of the name. "Gartred" is a rare variation
        (attested in Daphne du Maurier's novel The King's General, set in 17th
        Century Cornwall.[1][2]
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // home: state.home
  };
};

export default connect(mapStateToProps)(Home);
