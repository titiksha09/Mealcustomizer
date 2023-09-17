import React from 'react'
import Navbar from '../components/Navbar'

export default function Profile() {
  return (
    <div>
      <div><Navbar/></div>
        <section className ="abc" style={{backgroundColor: "#eee"}}>
  <div className="container py-5">

    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              className="rounded-circle img-fluid" style={{width: "150px"}}/>
            <h5 className="my-3">Suryanshu Jha</h5>
            <p className="text-muted mb-1">Male</p>
            <p className="text-muted mb-4">Age : 23</p>
            <div className="d-flex justify-content-center mb-2">
              <button type="button" className="btn btn-primary">User</button>
              <button type="button" className="btn btn-outline-primary ms-1">Dietitian</button>
            </div>
          </div>
        </div>
        <div className="card mb-4 mb-lg-0">
          <div className="card-body p-0">
            <ul className="list-group list-group-flush rounded-3">
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i className="fas fa-globe fa-lg text-warning"></i>
                <p className="mb-0">Current BMI : 28</p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i className="fab fa-github fa-lg" style={{color: "#333333"}}></i>
                <p className="mb-0">Ideal BMI : 19-25</p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i className="fab fa-twitter fa-lg" style={{color: "#55acee"}}></i>
                <p className="mb-0">Ideal Weight : 80-90 kg</p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i className="fab fa-instagram fa-lg" style={{color: "#ac2bac"}}></i>
                <p className="mb-0">Exercise Type : Moderately Active</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Suryanshu Jha</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">jhasuryanshu18@gmail.com</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Wieght</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">100 kg</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Height</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">190.5 cm</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Mobile</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">8797736284</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-md-6">
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                </p>
                <p className="mb-1" style={{fontSize: ".77rem"}}>Web Design</p>
                <div className="progress rounded" style={{height: "5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>Website Markup</p>
                <div className="progress rounded" style={{height: "5px"}}>
                <div className="progress-bar" role="progressbar" style={{width: "72%"}} aria-valuenow="72"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>One Page</p>
                <div className="progress rounded" style={{height: "5px"}}>
                 <div className="progress-bar" role="progressbar" style={{width: "89%"}} aria-valuenow="89"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>Mobile Template</p>
                <div className="progress rounded" style={{height: "5px"}}>
                 <div className="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow="55"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>Backend API</p>
                <div className="progress rounded mb-2" style={{height: "5px"}}>
                 <div className="progress-bar" role="progressbar" style={{width: "66%"}} aria-valuenow="66"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-md-12">
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <p className="mb-4"><span className="text-primary font-italic me-1">Daily</span> Nutrition Requirement
                </p>
                <p className="mb-1" style={{fontSize: ".77rem"}}>Calorie : 2500 cal</p>
                <div className="progress rounded" style={{height: "5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>Protein : 130.0g</p>
                <div className="progress rounded" style={{height: "5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "72%"}} aria-valuenow="72"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>Carbs : 150g</p>
                <div className="progress rounded" style={{height: "5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "89%"}} aria-valuenow="89"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>Fiber : 38g</p>
                <div className="progress rounded" style={{height: "5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow="55"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>Fats : 80g</p>
                <div className="progress rounded mb-2" style={{height: "5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "66%"}} aria-valuenow="66"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        
    </div>
  )
}
