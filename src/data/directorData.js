// Directors' profile pictures
import KathrynMinor from '../assets/images/landingpage/directorscarousel/KathrynMinor.jpg';
import AvitalBrodski from '../assets/images/landingpage/directorscarousel/AvitalBrodski.jpg';
import AndrewCataldo from '../assets/images/landingpage/directorscarousel/AndrewCataldo.jpg';
import ThomasKeith from '../assets/images/landingpage/directorscarousel/ThomasKeith.jpg';
import JoshBatra from '../assets/images/landingpage/directorscarousel/JoshBatra.jpg';
import KyleJanko from '../assets/images/landingpage/directorscarousel/KyleJanko.jpg';
import Liza from '../assets/images/landingpage/directorscarousel/Liza.png';
import BenFrothingham from '../assets/images/landingpage/directorscarousel/Benjamin-Frothingham.jpeg';
import Victoria from '../assets/images/landingpage/directorscarousel/Victoria.jpeg';


// Team icons
import ManagementActiveIcon from '../assets/icons/teams/colored/Management.png';
import OutreachActiveIcon from '../assets/icons/teams/colored/Outreach.png';
import OperationsActiveIcon from '../assets/icons/teams/colored/Operations.png';
import SoftwareActiveIcon from '../assets/icons/teams/colored/Software.png';
import HardwareActiveIcon from '../assets/icons/teams/colored/Hardware.png';
import CommunityActiveIcon from '../assets/icons/teams/colored/Community.png';
import ManagementInactiveIcon from '../assets/icons/teams/gray/Management.png';
import OutreachInactiveIcon from '../assets/icons/teams/gray/Outreach.png';
import OperationsInactiveIcon from '../assets/icons/teams/gray/Operations.png';
import SoftwareInactiveIcon from '../assets/icons/teams/gray/Software.png';
import HardwareInactiveIcon from '../assets/icons/teams/gray/Hardware.png';
import CommunityInactiveIcon from '../assets/icons/teams/gray/Community.png';

const directorData = [
    {
        'title': 'Executive Director',
        'team': 'Management',
        'color': '#FFBF3C',
        'activeIcon': ManagementActiveIcon,
        'inactiveIcon': ManagementInactiveIcon,
        'name': 'Josh Batra',
        'image': JoshBatra,
        'bio': 'The Management Team is responsible for leading all teams and ensuring the development of all in the organization. Led by the Executive Director, our management team is a group of people who know their stuff and use it to push the organization forward.',
        'emailUsername': 'batra.j',
    },
    // {
    //     'title': 'Outreach Director',
    //     'team': 'Outreach',
    //     'color': '#56CCF2',
    //     'activeIcon': OutreachActiveIcon,
    //     'inactiveIcon': OutreachInactiveIcon,
    //     'name': 'Avital Brodski',
    //     'image': AvitalBrodski,
    //     'bio': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //     'emailUsername': '???',
    // },
    {
        'title': 'Engagement Director',
        'team': 'Engagement',
        'color': '#6FCF97',
        'activeIcon': OperationsActiveIcon,
        'inactiveIcon': OperationsInactiveIcon,
        'name': 'Ben Frothingham',
        'image': BenFrothingham,
        'bio': 'The Operations team is made up of people from many different disciplines, working together to make sure Generate is able to function efficiently. The Operations team is responsible for a wide range of roles including supporting the build studio, gathering, analyzing, reporting on, and utilizing data to better understand our organization, and organizing documentation and tracking the history and archives of Generate.',
        'emailUsername': 'frothingham.b',
    },
    {
        'title': 'Software Director',
        'team': 'Software',
        'color': '#187DFF',
        'activeIcon': SoftwareActiveIcon,
        'inactiveIcon': SoftwareInactiveIcon,

        'name': 'Victoria',
        'image': Victoria,
        'bio': 'The Build Studio Software team is focused on completing real product development work for professional software clients. You will work on a team of engineers and designers to further the products of Northeastern University affiliated businesses.',
        'emailUsername': 'brennick.v',
    },
    {
        'title': 'Hardware Director',
        'team': 'Hardware',
        'color': '#FF5751',
        'activeIcon': HardwareActiveIcon,
        'inactiveIcon': HardwareInactiveIcon,

        'name': 'Liza',
        'image': Liza,
        'bio': 'The Build Studio Hardware team is focused on completing real product development work for professional hardware clients. You will work on a team of engineers and designers to further the products of Northeastern University affiliated businesses.',
        'emailUsername': 'russell.li',
    },
    {
        'title': 'Operations Director',
        'team': 'Operations',
        'color': '#A559EC',
        'activeIcon': CommunityActiveIcon,
        'inactiveIcon': CommunityInactiveIcon,

        'name': 'Kyle Janko',
        'image': KyleJanko,
        'bio': 'The Engagement Team is responsible for student involvement in Generate. The team manages Generate’s brand image and external relations. They host events to build a tight-knit community and work with our alumni network to maintain connections post-graduation.',
        'emailUsername': 'janko.k',
    },
];

export default directorData;