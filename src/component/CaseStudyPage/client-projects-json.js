import SmartyPillImage from './Case-Study-Images/SmartyPill/SmartyPillMockUp.svg'
import EarnzImage from './Case-Study-Images/Earnz/EarnzMockUp.svg'
import BrandIdentityImage from './Case-Study-Images/SmartyPill/BrandIdentity.png'
import SmartyPillHighLight1Image from './Case-Study-Images/SmartyPill/Highlight1.png'
import SmartyPillHighlight2Image1 from './Case-Study-Images/SmartyPill/Highlight2v1.png'
import SmartyPillHighlight2Image2 from './Case-Study-Images/SmartyPill/Highlight2v2.png'
import TeamStock from './Case-Study-Images/SmartyPill/TeamStock.svg'
import SoftwareTeam from './Case-Study-Images/software.svg'
import HardwareTeam from './Case-Study-Images/hardware.svg'

const ClientProjectsJSON = {
  smartypill: {
    title: 'SmartyPill',
    teams: [SoftwareTeam, HardwareTeam],
    image: SmartyPillImage,
    companyDescription:
      'SmartyPill is an automatic pill and water dispenser that ensures youre taking the right pills at the right time.' +
      ' With customizable alerts and a connected app, SmartyPill is the perfect in-home companion for any medication' +
      ' adherent lifestyle.',
    client: {
      name: 'Matthew Swenson',
      title: "Northeastern Alumnus '20"
    },
    teamMembers: [
      { name: 'Matthew Swenson', title: 'Project Lead', color: '#FFBF3C' },
      { name: 'Matthew Swenson', title: 'Project Lead', color: '#6FCF97' },
      { name: 'Matthew Swenson', title: 'Project Lead', color: '#187DFF' },
      { name: 'Matthew Swenson', title: 'Project Lead', color: '#FF6660' },
      { name: 'Matthew Swenson', title: 'Project Lead', color: '#A559EC' },
      { name: 'Matthew Swenson', title: 'Project Lead', color: '#FFBF3C' },
      { name: 'Matthew Swenson', title: 'Project Lead', color: '#6FCF97' },
      { name: 'Matthew Swenson', title: 'Project Lead', color: '#187DFF' },
      { name: 'Matthew Swenson', title: 'Project Lead', color: '#FF6660' },
      { name: 'Matthew Swenson', title: 'Project Lead', color: '#A559EC' },
      { name: 'Matthew Swenson', title: 'Project Lead', color: '#56CCF2' }
    ],
    teamImage: { image: TeamStock, bgColor: '#187DFF' },
    companyLogo: null,
    brandIdentityTitle: '',
    brandIdentity:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed elit id velit congue pellentesque.' +
      'Ut at tincidunt enim. Vivamus gravida, velit sit amet imperdiet suscipit, erat nulla faucibus turpis,' +
      'eget rutrum magna odio ut tortor. Maecenas pretiu',
    brandIdentityImage: BrandIdentityImage,
    palette: ['FFBF3C', '6FCF97', '187DFF', 'FF6660'],
    highlights: [
      {
        title: '',
        image: [SmartyPillHighLight1Image],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed elit id velit congue pellentesque.' +
          'Ut at tincidunt enim. Vivamus gravida, velit sit amet imperdiet suscipit, erat nulla faucibus turpis,' +
          'eget rutrum magna odio ut tortor. Maecenas pretiu'
      },
      {
        title: '',
        image: [SmartyPillHighlight2Image1, SmartyPillHighlight2Image2],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed elit id velit congue pellentesque.' +
          'Ut at tincidunt enim. Vivamus gravida, velit sit amet imperdiet suscipit, erat nulla faucibus turpis,' +
          'eget rutrum magna odio ut tortor. Maecenas pretiu'
      },
      {
        title: '',
        image: [SmartyPillHighlight2Image1, SmartyPillHighlight2Image2],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed elit id velit congue pellentesque.' +
          'Ut at tincidunt enim. Vivamus gravida, velit sit amet imperdiet suscipit, erat nulla faucibus turpis,' +
          'eget rutrum magna odio ut tortor. Maecenas pretiu'
      }
    ],
    clientQuote:
      'The biggest benefit that Generate provided for me was just the amount of work that was put into SmartyPill,' +
      'and the knowledge gained from prototyping and writing software for it.'
  },
  earnz: {
    title: 'Earnz',
    teams: [SoftwareTeam],
    image: EarnzImage,
    companyDescription:
      'A unique, two-sided promotional and loyalty platform built to level the playing field for independent bars' +
      ' and restaurants by allowing them to utilize an app to acquire and retain customers as easily and cost' +
      'effectively as currently only chains can.',
    client: {
      name: 'Max Thalheimer',
      title: "Northeastern Alumnus '20"
    }
  }
}

export default ClientProjectsJSON
