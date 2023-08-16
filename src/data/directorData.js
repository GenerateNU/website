// Directors' profile pictures
import Ryan from '../assets/images/aboutpage/ryan.png';
import Shannon from '../assets/images/aboutpage/shannon.png';
import Alix from '../assets/images/aboutpage/alix.png';
import Sam from '../assets/images/aboutpage/sam.png';
import JoJo from '../assets/images/aboutpage/jojo.png';

// Team icons
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

const directorData = [
  {
    title: "Executive Director",
    team: "Management",
    color: "#187DFF",
    activeIcon: ManagementActiveIcon,
    inactiveIcon: ManagementInactiveIcon,
    name: "Ryan Lonkart",
    image: Ryan,
    bio: "Hi! I'm Ryan Lonkart, Generate's Executive Director! I am a 4th year Computer Engineering major, minoring in Business Administration, originally from Narragansett, RI. In my free time I love to ski, explore the outdoors, and try out new restaurants/coffee shops around Boston. In my role I help drive forward Generate's organizational vision, while exploring new opportunities for growth amongst our members and our overall organization.",
    emailUsername: "lonkart.r",
  },
  {
    title: "Engagement Director",
    team: "Engagement",
    color: "#A559EC",
    activeIcon: OperationsActiveIcon,
    inactiveIcon: OperationsInactiveIcon,
    name: "Shannon Murphy",
    image: Shannon,
    bio: "I'm Shannon Murphy, and I'm the Engagement Director. I am a 5th year studying International Affairs and Environmental studies from Salem, MA. I love to play piano, try new local restaurants, and spend time with my six nieces and nephews. My incredible Engagement team covers a wide range of topics - from branding and creating merch, to hosting events for hundreds of attendees, to presenting about Generate to other organizations.",
    emailUsername: "murphy.shanno",
  },
  {
    title: "Software Director",
    team: "Software",
    color: '#FFBF3C',
    activeIcon: SoftwareActiveIcon,
    inactiveIcon: SoftwareInactiveIcon,

    name: "Alix Heudebourg",
    image: Alix,
    bio: "Hellooo, I'm Alix, the Software Director :) I'm a fifth year CS and Design major from France. When I'm not running around the sherm or on co-op you can find me playing guitar with friends at home, organizing a very last minute firepit night or cross stiching. As the SD I get to oversee all the projects we take on this semester and make sure our members are learning, growing and having fun!",
    emailUsername: "heudebourg.a",
  },
  {
    title: "Hardware Director",
    team: "Hardware",
    color: "#FF6660",
    activeIcon: HardwareActiveIcon,
    inactiveIcon: HardwareInactiveIcon,

    name: "JoJo D'Amato",
    image: JoJo,
    bio: "My name is JoJo, and I am the Hardware Director this year! I am a 4th year majoring in Mechanical Engineering and Experience Design, and I am from Scituate, MA. In my free time I love to cook, swim, bike, make ceramics, and enjoy live music! Generate Hardware works to create quality products for four clients each semester and expand our technical abilities with electromechanical projects, with a focus on growth and learning of our members.",
    emailUsername: "damato.j",
  },
  {
    title: "Operations Director",
    team: "Operations",
    color: "#6FCF97",
    activeIcon: CommunityActiveIcon,
    inactiveIcon: CommunityInactiveIcon,

    name: "Sam Yip",
    image: Sam,
    bio: "Hi! I'm Sam Yip, Generate's current Operations Director. I'm a fourth year Industrial Engineering major with a minor in Data Science and I'm originally from Fanwood, NJ. Outside of Generate I love bike riding, running, baking and arts & crafts! I love working with the Operations Team because they work to improve Generate's day-to-day like managing spaces, finances, internal data and collaborations with external partners.",
    emailUsername: "yip.sa",
  },
];

export default directorData;
