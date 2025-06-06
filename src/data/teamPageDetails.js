import ManagementActiveIcon from "../assets/icons/teams/colored/Management.png";
import OperationsActiveIcon from "../assets/icons/teams/colored/Operations.png";
import SoftwareActiveIcon from "../assets/icons/teams/colored/Software.png";
import HardwareActiveIcon from "../assets/icons/teams/colored/Hardware.png";
import CommunityActiveIcon from "../assets/icons/teams/colored/Community.png";

import ManagementInactiveIcon from "../assets/icons/teams/gray/Management.png";
import OperationsInactiveIcon from "../assets/icons/teams/gray/Operations.png";
import SoftwareInactiveIcon from "../assets/icons/teams/gray/Software.png";
import HardwareInactiveIcon from "../assets/icons/teams/gray/Hardware.png";
import CommunityInactiveIcon from "../assets/icons/teams/gray/Community.png";

import ManagementLargePicture from "../assets/images/TeamsPageImages/TeamsPagePH1.png"
import OperationsLargePicture from "../assets/images/TeamsPageImages/TeamsPagePH2.png"
import SoftwareLargePicture from "../assets/images/TeamsPageImages/TeamsPagePH3.png"
import HardwareLargePicture from "../assets/images/TeamsPageImages/TeamsPagePH4.png"
import EngagementLargePicture from "../assets/images/TeamsPageImages/TeamsPagePH5.png"

// yellow - "#FFBF3C"
const TeamPageDetails = [{
        name: "Management",
        color: "#187DFF",
        activeIcon: ManagementActiveIcon,
        inactiveIcon: ManagementInactiveIcon,
        largePic: ManagementLargePicture,
    },
    {
        name: "Hardware",
        color: "#FF5751",
        activeIcon: HardwareActiveIcon,
        inactiveIcon: HardwareInactiveIcon,
        largePic: HardwareLargePicture,
    },
    {
        name: "Software",
        color: "#FFBF3C",
        activeIcon: SoftwareActiveIcon,
        inactiveIcon: SoftwareInactiveIcon,
        largePic: SoftwareLargePicture,
    },
    {
        name: "Operations",
        color: "#6FCF97",
        activeIcon: CommunityActiveIcon,
        inactiveIcon: CommunityInactiveIcon,
        largePic: OperationsLargePicture,
    },
    {
        name: "Engagement",
        color: "#A559EC",
        activeIcon: OperationsActiveIcon,
        inactiveIcon: OperationsInactiveIcon,
        largePic: EngagementLargePicture,
    }
]

export default TeamPageDetails;