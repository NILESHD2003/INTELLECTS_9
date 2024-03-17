import React from "react";
import Header from "../Components/Header";
import Cards from "../Components/Cards";
import { card_first, card_second } from "../Utils/links";
import { NavLink } from "react-router-dom";
const Home = ({ username, handleLogout }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {/* <Header></Header> */}
      <div className="section">
        <div className="slidebar">
          <div className="slidebar-image">
            <img src="https://wallpaperaccess.com/full/3184128.jpg" alt="" />
          </div>
          <div className="slidebar-info">
            <h1>Get a Head Start to Carrer</h1>
            <p>
              Part-Time,Full time and internship opputunities for student at top
              university
            </p>
            <form action="" className="sidebar--form" onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="searchBar"
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className="grid">
          <h3>Why Students Love us</h3>
          <p>
            Our Platform Connects Students from top University with
            Part-Time,Full-Time,abd INternship Opportunity. Campus Jobs helps
            Students earn experience,build their resumes ,and connect with
            industry-leading Companies
          </p>
          <div className="cards">
            {card_first.map((data, index) => {
              return (
                <Cards
                  img={data.img}
                  key={index}
                  heading={data.heading}
                  para={data.para}
                ></Cards>
              );
            })}
          </div>
        </div>
        <div className="find_jobs">
          <h1>Join Top Students and Companies</h1>
          <p>
            Create free account our job board,apply to jobs ,and connect with
            companies
          </p>
          <button className="btn btn--job_student">
            <NavLink to="/applyJobs">Create</NavLink>
          </button>
        </div>
        <div className="grid">
          <h3>Why Companies Love us</h3>
          <p>
            Companies Jobs is a talent market place connecting students with
            part-time.full-time,and internship opportunities.our platform helps
            companies find top student talent,engage with students and manage
            jobs easily
          </p>
          <div className="cards">
            {card_second.map((data, index) => {
              return (
                <Cards
                  img={data.img}
                  key={index}
                  heading={data.heading}
                  para={data.para}
                ></Cards>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
