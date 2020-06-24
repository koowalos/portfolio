import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, index) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href={`#item-${index}`}>
                          <img
                            src={`${item.imgurl_t}`}
                            className="item-img"
                            alt="portfolio screenshot"
                          />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                        <div
                          id={`item-${index}`}
                          className="white-popup mfp-hide"
                          style={{ textAlign: 'center' }}
                        >
                          <img
                            src={`${item.imgurl}`}
                            className="item-img"
                            alt="portfolio screenshot"
                          />
                          {item.itemurl ? (
                            <div
                              style={{ cursor: 'pointer' }}
                              onClick={() => {
                                window.open(item.itemurl, '_blank');
                              }}
                            >
                              Click here for demo
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
