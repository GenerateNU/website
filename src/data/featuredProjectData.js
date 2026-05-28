import EarnzMockUp from "../assets/images/landingpage-v2/Earnz_Mock_Up.png";
import SmartyPillMockup from "../assets/images/landingpage-v2/SmartyPill Mock Up.png";

function Project(
  name,
  type,
  clientName,
  clientSchool,
  clientQuote,
  description,
  image
) {
  this.name = name;
  this.type = type;
  this.clientName = clientName;
  this.clientSchool = clientSchool;
  this.clientQuote = clientQuote;
  this.description = description;
  this.image = image;
}

const projects = [
  new Project(
    "Earnz",
    "software",
    "Max Thalheimer",
    "Northeastern Alumnus ‘20",
    "Generate was great as a learning experience for me, as someone who hadn’t built a tech company before. The team of experienced Generate engineers knew what it takes to build a product like earnz, how to package it all together, and ultimately how to come together as a team.",
    "A unique, two-sided promotional and loyalty platform built to level the playing field for independent bars and restaurants by allowing them to utilize an app to acquire and retain customers as easily and cost effectively as currently only chains can.",
    EarnzMockUp
  ),
  new Project(
    "SmartyPill",
    "software + hardware",
    "Matthew Swenson",
    "Northeastern Alumnus ‘20",
    "The biggest benefit that Generate provided for me was just the amount of work that was put into SmartyPill, and the knowledge gained from prototyping and writing software for it.",
    "SmartyPill is an automatic pill and water dispenser that ensures you’re taking the right pills at the right time. With customizable alerts and a connected app, SmartyPill is the perfect in-home companion for any medication adherent lifestyle.",
    SmartyPillMockup
  ),
];

export default projects;
