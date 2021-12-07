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
  About SHOFRICA
              </h2>
              <h4 className="font-size-subheader mb-4">
  At SHOFRICA, it’s our mission to empower artisan entrepreneurship and preserve artisan heritage techniques, while offering our socially-minded customers and partners jewelry that aligns with their values.
              </h4>
<h4 className="font-size-subheader mb-4">
  Each of our singular pieces are handcrafted using traditional techniques by a network of artisan entrepreneurs in Kenya, with an unprecedented 25-35% of revenue going directly to artisans for each wholesale order.
</h4>
<h4 className="font-size-subheader mb-4">
  We don’t stop there — our Artisan Entrepreneurship team works every day to build the capacity of our artisans to manage and grow their businesses and recruit more talented micro-entrepreneurs into our growing network.
</h4>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/most-gifted.jpg" alt="Commerce.js illustration"/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/tribearth-illustration.jpg" alt="Netlify illustration"/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
  Let's Get Started
            </h3>
            <h4 className="font-size-subheader mb-4">
  Whether you’re an emerging or established brand or designer, a high volume retailer or intimate boutique, our platform is built for maximum scalability and flexibility.</h4>
<h4 className="font-size-subheader mb-4">
Partnering with us allows you to leverage our platform and work with our artisans in a capacity that works best for you. From wholesale to private label, SHOFRICA is here to support your business.</h4>
            <div className="mt-3">
              <a className="px-4 py-3 flex-grow-1 font-color-white about-net" href="http://platform.shofrica.com">
                GO TO PLATFORM
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
  Wholesale partnerships
</h3>
            <h4 className="font-size-subheader mb-4">
  Add to your existing assortment with our signature styles from our SHOFRICA branded linesheets.
            </h4>
<h3 className="font-size-header mb-4">
  Private Label Partnerships
</h3>
<h4 className="font-size-subheader mb-4">
  Buy pre-designed pieces to label with your company's logo/name.
</h4>
<h3 className="font-size-header mb-4">
  Manufacturing Partnerships
</h3>
<h4 className="font-size-subheader mb-4">
  Work with us from design to production to create jewelry tailored for your needs.
</h4>
<div className="mt-3">
  <a className="px-4 py-3 flex-grow-1 font-color-white about-net" href="http://platform.shofrica.com">
  GO TO PLATFORM
</a>
</div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/yabo-illustration.jpg" alt="GitHub illustration"/>
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
