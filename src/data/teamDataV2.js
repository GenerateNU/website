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

const teamDataV2 = [
    {
        name: "Management",
        color: "#FFBF3C",
        activeIcon: ManagementActiveIcon,
        inactiveIcon: ManagementInactiveIcon,
    },
    {
        name: "Operations",
        color: "#A559EC",
        activeIcon: CommunityActiveIcon,
        inactiveIcon: CommunityInactiveIcon,
    },
    {
        name: "Software",
        color: "#187DFF",
        activeIcon: SoftwareActiveIcon,
        inactiveIcon: SoftwareInactiveIcon,
    },
    {
        name: "Hardware",
        color: "#FF5751",
        activeIcon: HardwareActiveIcon,
        inactiveIcon: HardwareInactiveIcon,
    },
    {
        name: "Engagement",
        color: "#6FCF97",
        activeIcon: OperationsActiveIcon,
        inactiveIcon: OperationsInactiveIcon,
    }
]

export default teamDataV2;