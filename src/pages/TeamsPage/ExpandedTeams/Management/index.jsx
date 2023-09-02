import React from "react";
import "./style.css";
import MngmtPH from "../../../../assets/images/TeamsPageImages/TeamsPagePH1.png";
import useWebsite from "../../../../shared/useMobile";
import TextRow from "../CommonTeam/textRow";
import RoleContainer from "../CommonTeam/RoleContainer";
import TeamPageFooter from "../CommonTeam/TeamPageFooter";

function WebHeader() {
  return (
    <div className="header-wrapper">
      <div className="management-header">
        <div className="header-title">
          <div className="header-text">
            <div style={{ marginTop: "-10%", marginBottom: "-10%" }}>
              MNGMNT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileHeader() {
  return (
    <div className="mobile-header-wrapper">
      <div className="mobile-management-header">
        <div className="mobile-header-title">
          <div className="mobile-header-text">
            <div style={{ marginTop: "-10%", marginBottom: "-10%" }}>
              MNGMNT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Roles() {
  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia("(max-device-width: 650px)").matches;
  const mobile = !isBigScreen || !isWebsite;
  return (
    <div className="roles-section">
      <div className="roles-title paragraph-title">OUR ROLES</div>
      <div className="roles-container">
        <RoleContainer color="#187DFF">
          <div
            className={`role-name ${
              mobile ? "paragraph-subtitle-mobile" : "paragraph-subtitle"
            }`}
          >
            Executive Director
          </div>
          <div
            className={`role-desc ${
              mobile ? "paragraph-text-mobile" : "paragraph-text"
            }`}
          >
            The executive director oversees all internal and external operations
            of Generate. They are responsible for ensuring each of their
            directors and teams have the resources they need to be successful
            and for strategically positioning the organization within the larger
            Northeastern community. They work internationally with their
            directors to execute their vision and support the growth of each
            member in the organization. They collaborate with other Mosaic
            organizations and others in the global network to lift up
            entrepreneurs and increase the impact of Generate.
          </div>
        </RoleContainer>

        <RoleContainer color="#FF5751">
          <div
            className={`role-name ${
              mobile ? "paragraph-subtitle-mobile" : "paragraph-subtitle"
            }`}
          >
            Hardware Director
          </div>
          <div
            className={`role-desc ${
              mobile ? "paragraph-text-mobile" : "paragraph-text"
            }`}
          >
            The hardware director is responsible for overseeing the hardware
            projects, the hardware chief team, and the hardware clients. As the
            hardware director you work closely with the Project leads, guiding
            them through the hiring, scoping, and product development process.
            You will work with the chiefs to support the projects and produce
            educational content through workshops and our wiki. You will work
            with clients to provide resources and ensure they have a successful
            Generate experience. You will also work with the management team to
            cultivate close connections within the organization and uphold
            Generates values.
          </div>
        </RoleContainer>

        <RoleContainer color="#FFBF3C">
          <div
            className={`role-name ${
              mobile ? "paragraph-subtitle-mobile" : "paragraph-subtitle"
            }`}
          >
            Software Director
          </div>
          <div
            className={`role-desc ${
              mobile ? "paragraph-text-mobile" : "paragraph-text"
            }`}
          >
            The software director is responsible for overseeing the software
            projects, the software chief team, and the software clients. As the
            software director you work closely with the Project leads, guiding
            them through the hiring, scoping, and product development process.
            You will work with the leads to support the projects and prodive
            educational content through workshops and our wiki. You will work
            with clients to provide resources and ensure they have a successful
            Generate experience. You will also work with the management team to
            cultivate close connections within the organization and uphold
            Generates values.
          </div>
        </RoleContainer>

        <RoleContainer color="#6FCF97">
          <div
            className={`role-name ${
              mobile ? "paragraph-subtitle-mobile" : "paragraph-subtitle"
            }`}
          >
            Operations Director
          </div>
          <div
            className={`role-desc ${
              mobile ? "paragraph-text-mobile" : "paragraph-text"
            }`}
          >
            The operations director is responsible for the day to day operations
            of the organization, ensuring teams are supported and have the
            resources they need. As operations director, you work closely with
            your team to provide resources for the build studio and seek out
            ways to improve the organization on all fronts. You help manage the
            budget for the year and work with your team to plan the logistics of
            events like showcases and our speaker series. You work with your
            team to develop growth strategies for Generate.
          </div>
        </RoleContainer>

        <RoleContainer color="#A559EC">
          <div
            className={`role-name ${
              mobile ? "paragraph-subtitle-mobile" : "paragraph-subtitle"
            }`}
          >
            Engagement Director
          </div>
          <div
            className={`role-desc ${
              mobile ? "paragraph-text-mobile" : "paragraph-text"
            }`}
          >
            The engagement director is responsible for managing student
            involvement in Generate. They oversee events, recruitment for both
            students and clients and our branding/marketing content. As
            engagement director, you will work with your team to create an
            inclusive culture where students can build lasting connections. You
            will oversee major events, manage outreach within the Northeastern
            community, and work internally to build a thriving culture.
          </div>
        </RoleContainer>
      </div>
    </div>
  );
}
function Content() {
  return (
    <>
      <TextRow
        title={"WHAT WE DO"}
        description={
          "Our management team is the driving force behind Generate, empowering each member to grow and build innovative products. They work directly with members and clients to support their growth and the team's vision. They build our professional image and position the organization strategically within the Northeastern ecosystem, bridging our internal operations with the larger community."
        }
        picture={MngmtPH}
        reverse={false}
      />
      <TextRow
        title={"HOW WE WORK"}
        description={
          "Generate is entirely student-led. Our management team offers a unique opportunity for students to gain leadership experience in a fast-paced, innovative culture. The team is united through the yearly vision set by the executive director and builds initiatives around those goals. Each member leaves their own mark on Generate, continuously improving for the future."
        }
        picture={MngmtPH}
        reverse={true}
      />
      <Roles />
    </>
  );
}
const Management = () => {
  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia("(max-device-width: 650px)").matches;
  const mobile = !isBigScreen || !isWebsite;
  console.log("is it desktop?", !mobile);
  return !mobile ? (
    <div>
      <WebHeader />

      <div id="management">
        <Content />
      </div>
      <TeamPageFooter color={"#187DFF"} page={"MNGMNT"}/>
    </div>
  ) : (
    <div>
      <MobileHeader />
      <div id="mobile-management">
        <Content />
      </div>
      <TeamPageFooter color={"#187DFF"} page={"MNGMNT"}/>
    </div>
  );
  //<div id="management"></div>;
};

export default Management;
