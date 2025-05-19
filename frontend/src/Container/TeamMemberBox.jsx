import React from "react";

const TeamMemberBox = ({ prod }) => {
  console.log("prod",prod)
let employeeList =   prod.map((item, i) => {
    return (
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
  
          <div className="team-item bg-light rounded overflow-hidden">
            <div className="team-img position-relative overflow-hidden">
              <img className="img-fluid w-100 employeeimg" src={`http://localhost:5001/${item.Photo}`} alt=""/>
              <div className="team-social">
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href="">
                  <i className="fab fa-twitter fw-normal"></i>
                </a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href="">
                  <i className="fab fa-facebook-f fw-normal"></i>
                </a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href="">
                  <i className="fab fa-instagram fw-normal"></i>
                </a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href="">
                  <i className="fab fa-linkedin-in fw-normal"></i>
                </a>
              </div>
            </div>
            <div className="text-center py-4 employeedesc">
              <h4 className="text-primary">{item.FirstName}</h4>
              <p className="text-uppercase m-0">{item.Technology}</p>
            </div>
          </div>
        </div>
    );
  });
  return (
    <>
      {employeeList}
    </>
  );
};

export default TeamMemberBox;
