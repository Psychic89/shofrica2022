import React from 'react';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const About = () => (
  <Root>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
  Cleaning D.I.Y for Brass
              </h2>
              <h4 className="font-size-subheader mb-4">
  Mix lemon juice and baking soda into a paste, rub onto surface with a cloth, then gently rinse off and buff dry to a shine.
</h4>
  <div className="mt-3">
</div>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/cleaning.jpg" alt="Commerce.js illustration"/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/polish.jpg" alt="Polish illustration"/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
  Cleaning D.I.Y. for Gold
            </h3>
            <h4 className="font-size-subheader mb-4">
  Put a few drops of liquid dish detergent in a bowl of lukewarm water. Mix gently and soak the gold jewelry in the solution for 15-30 minutes. Gently scrub the jewelry with a soft-bristled toothbrush. Rinse with warm water and blot dry with a soft cloth.

<p>*For wood, use tung oil or linseed oil as needed. *For ceramic wipe with a damp cloth </p> </h4>
            <div className="mt-3">
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
  Treat It With Love
</h3>
            <h4 className="font-size-subheader mb-4">
  Remove jewelry before rigorous physical activity or going to bed.
            </h4>
<h3 className="font-size-header mb-4">
  Prolong Its Life
</h3>
<h4 className="font-size-subheader mb-4">
  Store your jewelry in a cloth bag away from natural sunlight and heat.
</h4>
<h3 className="font-size-header mb-4">
  Keep It Shiny
</h3>
<h4 className="font-size-subheader mb-4">
  Use a gentle metal polisher for brass and gold and a soft cloth to remove tarnish and restore luster. For beads, wipe gently with warm water and a cloth.
</h4>
<div className="mt-3">
</div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/prolong.jpg" alt="GitHub illustration"/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 4 */}

    </div>
    <Footer />
  </Root>
);

export default About;
