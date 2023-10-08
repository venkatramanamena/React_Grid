import React from "react";
import "./Comp.css";
function CardSection() {
  const arr = [
    {
      img: "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png",
      heading: "Introduction To A Machine Learning Online Course",
      head3: "EDYODA",
      head4: "| 24 Aug 2019",
      description:
        "If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to assess technology demand in the industry and also to evaluate available talent pool for the demand. Our consulting and technology training assignments for our corporate partners enlightened us on the technology skill in demand. We discovered - What, Where and which technologies are increasingly being adopted by the Industry.",
    },
    {
      img: "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
      heading:
        "Fresh Graduate or IT professional Looking for a job ? - 7 reasons to learn Python NOW!",
      head3: "Arman Ahmed",
      head4: " | 05 Jul 2019",
      description:
        "If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to assess technology demand in the industry and also to evaluate available talent pool for the demand. Our consulting and technology training assignments for our corporate partners enlightened us on the technology skill in demand. We discovered - What, Where and which technologies are increasingly being adopted by the Industry.",
    },
    {
      img: "https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg",
      heading:
        "From identity crisis to the Success Story - The DevOps revolution!",
      head3: "EDYODA",
      head4: "| 24 Aug 2019",
      description:
        "So What is DevOps all about DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the de-facto component in Software Development Lifecycle (SDLC) process in most of the organizations.But what is this all about. Here, I am exploring how DevOps can be compared to some of the similar revolutions of the past and how it is impacting the work culture in the organizations.But before I dig deeper, lets understand what DevOps truly is - DevOps can simply be defined as the combination of cultural philosophies, practices, and tools that increases an organizations ability to deliver applications and services at high velocity",
    },
    {
      img: "https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png",
      heading: "What is Income Share Agreement?",
      head3: "EDYODA",
      head4: "| 24 Aug 2019",
      description:
        "The term Income Share Agreement has been around for a long time since 1955 to be precise. Surprised, eh? It was first introduced by Milton Friedman, an American economist, and statistician who strongly believed in “free-market capitalism”. In the last few months, there has been a lot of buzz around it, particularly among college graduates.So, what is this Income Share Agreement?As defined in Wikipedia:“An  income share agreement  (or  ISA) is a financial structure in which an individual or organization provides something of value (often a fixed amount of money) to a recipient who, in exchange, agrees to pay back a percentage of their income for a fixed number of years.",
    },
    {
      img: "https://edyoda.s3.amazonaws.com/media/blog-images/cloud-computing-an-umbrella-term-that-enables-digital-transformation.jpg",
      heading:
        "Cloud Computing- An Umbrella Term that enables Digital Transformation",
      head3: "EDYODA",
      head4: "| 24 Aug 2019",
      description:
        "Starting a career as a software developer obviously requires one to undertake a programming languages course that can cover everything from the basics to even the minute details. To learn a programming language though, one needs to also understand which one is suitable for you. Once your journey as a developer starts you will soon understand which language will be the most suited to you, your interests and career goals.",
    },
    {
      img: "https://edyoda.s3.amazonaws.com/media/blog-images/MicrosoftTeams-image_1.png",
      heading:
        "All about AITEST and how to avail rewards up to INR 1 Crore",
      head3: "EDYODA",
      head4: "| 24 Aug 2019",
      description:
        "Ever since 2019, after a solid hit from the falling rate of economic growth, the job market seems to be challenging. With the technology-enabled disruption continuing to play its part, companies are becoming far more discerning in terms of hiring. Their focus has now shifted towards making the best use of the available human resources. More and more companies are preferring to hire skilled employees. This helps them save critical time and costs during and after the hiring process. They are interested in hiring professionals with core skill sets in technological areas. This calls for upskilling and reskilling. However, good quality training programs are mostly expensive. ",
    },
  ];
  return (
    <div className="middle1">
      {
      arr.map((item, i) => {
       return (
        <div key={i} className="cont">
          <img alt="no" className="blog-img" src={item.img} />
          <div className="text-area">
            <h2 className="over1">{item.heading}</h2>
            <div>
              <div className="flex">
                <h3 style={{ color: "#009df7" }}>{item.head3} </h3>
                <p
                  style={{
                    color: "(0,0,0,0.5)",
                    fontSize: "20px",
                    fontWeight: "300",
                  }}
                >
                  {" "}
                  {item.head4}
                </p>
              </div>
              <p
                className="p"
                style={{whiteSpace: "wrap",fontFamily:"Raleway",opacity: "0.6",width: "100%", margin: "20px 0",}}
              >{item.description}
              </p>
            </div>
          </div>
        </div>)
      })}
    </div>
  );
}

export default CardSection;
