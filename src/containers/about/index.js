import React from 'react';

const About = () => (<div className="card-inner animated active" id="about-card">
  <div className="card-wrap">

    <div className="content about">

      <div className="title">About Me</div>

      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="text-box">
            <p>
                            Playing with Javascript - React - Angular - Node - Typescript - HTML - CSS - Bootstrap - Material - PHP - SQL - DevOps - Agile ... and their friends...


            </p>
          </div>
          <div className="info-list">
            <ul>
              <li><strong>Age . . . . .</strong> 28</li>
              <li><strong>Residence . . . . .</strong> India</li>
              <li><strong>Freelance . . . . .</strong> Available</li>
              <li><strong>Address . . . . .</strong> Bangalore, India</li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>

    </div>


    <div className="content services">

      <div className="title">My Services</div>

      <div className="row service-items border-line-v">

        <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
          <div className="service-item">
            <div className="icon"><span className="ion ion-code" /></div>
            <div className="name">Web Development</div>
            <p>
                            Modern and mobile-ready website that will help you
                            reach all of your marketing.
            </p>
          </div>
        </div>

        <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
          <div className="service-item">
            <div className="icon"><span className="ion ion-music-note" /></div>
            <div className="name">Music Writing</div>
            <p>
                            Music copying, transcription, arranging and composition services.
            </p>
          </div>
        </div>

        <div className="col col-d-6 col-t-6 col-m-12">
          <div className="service-item">
            <div className="icon"><span className="ion ion-speakerphone" /></div>
            <div className="name">Advetising</div>
            <p>
                            Advertising services include television, radio, print, mail and web.
            </p>
          </div>
        </div>

        <div className="col col-d-6 col-t-6 col-m-12">
          <div className="service-item">
            <div className="icon"><span className="ion ion-ios-game-controller-b" /></div>
            <div className="name">Game Development</div>
            <p>
                            Developing memorable and unique mobile android, ios games.
            </p>
          </div>
        </div>

        <div className="clear" />
      </div>

    </div>

    <div className="content pricing">

      <div className="title">Pricing</div>

      <div className="row pricing-items">

        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="pricing-item">
            <div className="icon"><i className="ion ion-speedometer speed-basic" /></div>
            <div className="name">Basic</div>
            <div className="amount">
              <span className="dollar">$</span>
              <span className="number">22</span>
              <span className="period">hour</span>
            </div>
            <div className="feature-list">
              <ul>
                <li>Web Development</li>
                <li>Advetising</li>
                <li>Game Development</li>
                <li className="disable">Music Writing</li>
                <li className="disable">Photography <strong>new</strong></li>
              </ul>
            </div>
            <div className="lnks">
              <a href="#" className="lnk">
                <span className="text">Buy Basic</span>
                <i className="ion ion-speedometer speed-basic" />
              </a>
            </div>
          </div>
        </div>

        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="pricing-item">
            <div className="icon"><i className="ion ion-speedometer" /></div>
            <div className="name">Pro</div>
            <div className="amount">
              <span className="dollar">$</span>
              <span className="number">48</span>
              <span className="period">hour</span>
            </div>
            <div className="feature-list">
              <ul>
                <li>Web Development</li>
                <li>Advetising</li>
                <li>Game Development</li>
                <li>Music Writing</li>
                <li>Photography <strong>new</strong></li>
              </ul>
            </div>
            <div className="lnks">
              <a href="#" className="lnk">
                <span className="text">Buy Pro</span>
                <i className="ion ion-speedometer" />
              </a>
            </div>
          </div>
        </div>

        <div className="clear" />
      </div>

    </div>

    <div className="content fuct">

      <div className="title">Fun Fact</div>

      <div className="row fuct-items">

        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="fuct-item">
            <div className="icon"><span className="ion ion-disc" /></div>
            <div className="name">80 Albumes Listened</div>
          </div>
        </div>

        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="fuct-item">
            <div className="icon"><span className="ion ion-trophy" /></div>
            <div className="name">15 Awards Won</div>
          </div>
        </div>

        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="fuct-item">
            <div className="icon"><span className="ion ion-coffee" /></div>
            <div className="name">1 000 Cups of coffee</div>
          </div>
        </div>

        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="fuct-item">
            <div className="icon"><span className="ion ion-flag" /></div>
            <div className="name">10 Countries Visited</div>
          </div>
        </div>

        <div className="clear" />
      </div>

    </div>


    <div className="content clients">

      <div className="title">Clients</div>

      <div className="row client-items">

        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="client-item">
            <div className="image">
              <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
                <img src="assets/images/clients/client_1.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="client-item">
            <div className="image">
              <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
                <img src="assets/images/clients/client_2.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="client-item">
            <div className="image">
              <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
                <img src="assets/images/clients/client_3.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="client-item">
            <div className="image">
              <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
                <img src="assets/images/clients/client_4.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="clear" />
      </div>

    </div>

  </div>
                     </div>);

export default About;
