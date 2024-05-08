export default function SearchSection() {
  return (
    <section data-scroll-index="1" className="background bg-img bg-fixed section-padding" data-overlay-dark="5" style={{ backgroundColor: "#222" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-15">
            <div className="section-subtitle">Rent Now</div>
            <div className="section-title">Book Auto Rental</div>
          </div>
        </div>

        <div className="booking-inner clearfix">
          <form action="#0" className="form1 brdr clearfix">
            <div className="col2 c3">
              <div className="select1_wrapper">
                <label>Choose Car Type</label>
                <div className="select1_inner">
                  <select className="select2 select select2-hidden-accessible" style={{ width: "100%" }} data-select2-id="1" tabindex="-1" aria-hidden="true">
                    <option value="0" data-select2-id="3">Choose Car Type</option>
                    <option value="1">All</option>
                    <option value="2">Luxury Cars</option>
                    <option value="3">Sport Cars</option>
                    <option value="4">SUVs</option>
                    <option value="5">Convertible</option>
                  </select>

                  {/* <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style={{ width: "100%" }}>
                    <span className="selection">
                      <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-60dm-container">
                        <span className="select2-selection__rendered" id="select2-60dm-container" role="textbox" aria-readonly="true" title="Choose Car Type">Choose Car Type</span>
                        <span className="select2-selection__arrow" role="presentation">
                          <b role="presentation"></b>
                        </span>
                      </span>
                    </span>

                    <span className="dropdown-wrapper" aria-hidden="true"></span>
                  </span> */}
                </div>
              </div>
            </div>

            <div className="col2 c4">
              <div className="select1_wrapper">
                <label>Pick Up Location</label>

                <div className="select1_inner">
                  <select className="select2 select select2-hidden-accessible" style={{ width: "100%" }} data-select2-id="4" tabindex="-1" aria-hidden="true">
                    <option value="0" data-select2-id="6">Pick Up Location</option>
                    <option value="1">Dubai</option>
                    <option value="2">Abu Dhabi</option>
                    <option value="3">Sharjah</option>
                    <option value="4">Alain</option>
                  </select>

                  {/* <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="5" style={{ width: "100%" }}>
                    <span className="selection">
                      <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-zk82-container">
                        <span className="select2-selection__rendered" id="select2-zk82-container" role="textbox" aria-readonly="true" title="Pick Up Location">Pick Up Location</span>
                        <span className="select2-selection__arrow" role="presentation">
                          <b role="presentation"></b>
                        </span>
                      </span>
                    </span>

                    <span className="dropdown-wrapper" aria-hidden="true"></span>
                  </span> */}
                </div>
              </div>
            </div>

            <div className="col1 c1">
              <div className="input1_wrapper">
                <label>Pick Up Date</label>
                <div className="input1_inner">
                  <input type="text" className="form-control input datepicker hasDatepicker" placeholder="Pick Up Date" required="" id="dp1715192780061" />
                </div>
              </div>
            </div>

            <div className="col2 c5">
              <div className="select1_wrapper">
                <label>Drop Off Location</label>
                <div className="select1_inner">
                  <select className="select2 select select2-hidden-accessible" style={{ width: "100%" }} data-select2-id="7" tabindex="-1" aria-hidden="true">
                    <option value="0" data-select2-id="9">Drop Off Location</option>
                    <option value="1">Alain</option>
                    <option value="2">Sharjah</option>
                    <option value="3">Abu Dhabi</option>
                    <option value="4">Dubai</option>
                  </select>

                  {/* <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="8" style={{ width: "100%" }}>
                    <span className="selection">
                      <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-fh19-container">
                        <span className="select2-selection__rendered" id="select2-fh19-container" role="textbox" aria-readonly="true" title="Drop Off Location">Drop Off Location</span>
                        <span className="select2-selection__arrow" role="presentation">
                          <b role="presentation"></b>
                        </span>
                      </span>
                    </span>
                    
                    <span className="dropdown-wrapper" aria-hidden="true"></span>
                  </span> */}
                </div>
              </div>
            </div>

            <div className="col1 c2">
              <div className="input1_wrapper">
                <label>Return Date</label>
                <div className="input1_inner">
                  <input type="text" className="form-control input datepicker hasDatepicker" placeholder="Return Date" id="dp1715192780062" />
                </div>
              </div>
            </div>

            <div className="col3 c6">
              <button type="submit" className="booking-button">Rent Now</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
