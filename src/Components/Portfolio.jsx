/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/last.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Azure technology certifications 🎉",
    description:
      "I have certifications in Azure AI and Azure Fundamentals. I will get Azure Developer Associate and Azure AI Engineer Associate certifications in this year.",
    url: "https://www.linkedin.com/in/minjinpark001122334455/details/certifications/",
  },
  {
    title: "OpenSource experience",
    description:
      "I did opensource contribution since 2023. I started with Korean government project. And lately I participated .NET opensource project of GitHub Education. ",
    url: "https://github.com/education/codespaces-project-template-dotnet/tree/main/translations/ko-kr",
  },
  {
    title: "Career",
    description:
      "In 2023, I built AI service for logistic hub of Samsung in Thiland and 3D Vision AI for Incheon Airport. And in 2024, I got internship program in LG Electronics Research center. ",
    url: "https://www.linkedin.com/in/minjinpark001122334455/",
  },
  {
    title: "IT Event delivery",
    description:
      "I love to share my knowledge and experience to grow with others. So, I host many events such as Global AI Bootcamp, IT booth.",
    url: "https://www.linkedin.com/in/minjinpark001122334455/details/featured/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
