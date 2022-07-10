import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Bootstrap",
    content: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
    icon: "icon-globe",
    
  },
  {
    id: 2,
    name: "React",
    content: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. ",
    icon: "icon-chemistry",
  },
  {
    id: 3,
    name: "Typescript",
    content: "TypeScript is a programming language designed for the development of large applications and transpiles to JavaScript.",
    icon: "icon-directions",
  },
  {
    id: 4,
    name: "JAVASCRIPT",
    content: "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web.",
    icon: "icon-rocket",
  },
  {
    id: 5,
    name: "CSS",
    content: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. ",
    icon: "icon-note",
  },
  {
    id: 6,
    name: "HTML",
    content: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. ",
    icon: "icon-bubbles",
  },
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
