import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function experience() {
  return (
    <div id="experience" className="h-fit bg-slate-100">
      <h1 className="p-10 font-bold mt-10 text-4xl text-center">
        Work Experience
      </h1>
      <VerticalTimeline className="max-w-fit lg:max-w-[1000px]">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(253, 224, 71)", color: "#1F2937" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(253, 224, 71)" }}
          date="May 2023 - present"
          iconStyle={{ background: "rgb(253, 224, 71)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Intership IT Departement
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            PT Cladtek Bi-Metal Manufacturing
          </h4>
          <p>Programmer</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(253, 224, 71)", color: "#1F2937" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(253, 224, 71)" }}
          date="Februari - June 2023"
          iconStyle={{ background: "rgb(253, 224, 71)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Internship Web Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Infinite Learning Indonesia
          </h4>
          <p>Project Manager, Designer, Front-end Programmer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <h1 className=" text-center font-bold mt-20 text-4xl">Education</h1>
      <VerticalTimeline className="max-w-fit lg:max-w-[1000px]">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(253, 224, 71)", color: "#1F2937" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(253, 224, 71)" }}
          date="2021 - present"
          iconStyle={{ background: "rgb(253, 224, 71)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Informatics Engineering
          </h3>
          <p>Batam State Polytechnic</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(253, 224, 71)", color: "#1F2937" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(253, 224, 71)" }}
          date="2018 - 2021"
          iconStyle={{ background: "rgb(253, 224, 71)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">MIPA</h3>
          <p>SMAN 8 Batam</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <h1 className=" text-center font-bold mt-20 text-4xl">
        Comitte Experience
      </h1>
      <VerticalTimeline className="max-w-fit lg:max-w-[1000px]">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(253, 224, 71)", color: "#1F2937" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(253, 224, 71)" }}
          date="May - June 2023"
          iconStyle={{ background: "rgb(253, 224, 71)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Comitte</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Design Division
          </h4>
          <p>Developer Festival 2023 Infinite Learning</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(253, 224, 71)", color: "#1F2937" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(253, 224, 71)" }}
          date="Agustus 2022"
          iconStyle={{ background: "rgb(253, 224, 71)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Comitte</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Liaison Officer
          </h4>
          <p>KMIPN 2022</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(253, 224, 71)", color: "#1F2937" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(253, 224, 71)" }}
          date="2010 - 2011"
          iconStyle={{ background: "rgb(253, 224, 71)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(253, 224, 71)", color: "#1F2937" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(253, 224, 71)" }}
          date="2010 - 2011"
          iconStyle={{ background: "rgb(253, 224, 71)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default experience;
