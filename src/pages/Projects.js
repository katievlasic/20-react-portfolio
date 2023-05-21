import React from "react";
import "../styles/Projects.css";
import project1 from "../assets/bonatics.jpg";
import project2 from "../assets/nomad.jpg";

const styles = {
  a: {
    margin: "100px",
  },
};

function projects() {
  return (
    <div style={styles.a} class="bg-success">
      <h2 class="mb-4">Projects</h2>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={project1} alt="Project 1"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={project2} alt="Project 2"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Project 3"></img>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
      </div>
    </div>
  );
}

export default projects;
