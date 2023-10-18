import SmartyPillImage from './Case-Study-Images/SmartyPill/SmartyPillMockUp.svg'
import EarnzImage from './Case-Study-Images/Earnz/EarnzMockUp.svg'
import BrandIdentityImage from './Case-Study-Images/SmartyPill/BrandIdentity.svg'
import SmartyPillHighLight1Image from './Case-Study-Images/SmartyPill/Highlight1.svg'
import SmartyPillHighlight2Image1 from './Case-Study-Images/SmartyPill/Highlight2v1.svg'
import SmartyPillHighlight2Image2 from './Case-Study-Images/SmartyPill/Highlight2v2.svg'
import CompanyLogoStock from './Case-Study-Images/CompanyLogoStock.svg'
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
      { name: 'Matt McCoy', title: 'Project Lead', color: '#FFBF3C' },
      { name: 'Matt McCoy', title: 'Project Lead', color: '#6FCF97' },
      { name: 'Matt McCoy', title: 'Project Lead', color: '#187DFF' },
      { name: 'Matt McCoy', title: 'Project Lead', color: '#FF6660' },
      { name: 'Matt McCoy', title: 'Project Lead', color: '#A559EC' },
      { name: 'Matt McCoy', title: 'Project Lead', color: '#FFBF3C' },
      { name: 'Matt McCoy', title: 'Project Lead', color: '#6FCF97' },
      { name: 'Matt McCoy', title: 'Project Lead', color: '#187DFF' },
      { name: 'Matt McCoy', title: 'Project Lead', color: '#FF6660' },
      { name: 'Matt McCoy', title: 'Project Lead', color: '#A559EC' },
      { name: 'Matt McCoy', title: 'Project Lead', color: '#56CCF2' }
    ],
    teamImage: { image: TeamStock, bgColor: '#187DFF' },
    companyLogo: { image: CompanyLogoStock, bgColor: '#22B0A5' },
    brandIdentity: {
      title: 'Brand Identity',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed elit id velit congue pellentesque. Ut at tincidunt enim. Vivamus gravida, velit sit amet imperdiet suscipit, erat nulla faucibus turpis, eget rutrum magna odio ut tortor. Maecenas pretium tellus nec nisi rhoncus scelerisque. In hac habitasse platea dictumst. Donec sodales, libero id congue sagittis, mauris arcu consequat purus, vitae laoreet lorem risus vel risus. Duis at orci quis justo convallis congue.',
      image: { image: BrandIdentityImage, bgColor: '#22B0A5' }
    },
    palette: [
      '#FFBF3C',
      '#6FCF97',
      '#187DFF',
      '#FF6660',
      '#FF6660',
      '#FF6660',
      '#FF6660',
      '#FF6660',
      '#FF6660'
    ],
    highlights: [
      {
        title: 'Highlight 1',
        images: [SmartyPillHighLight1Image],
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed elit id velit congue pellentesque. Ut at tincidunt enim. Vivamus gravida, velit sit amet imperdiet suscipit, erat nulla faucibus turpis, eget rutrum magna odio ut tortor. Maecenas pretium tellus nec nisi rhoncus scelerisque. In hac habitasse platea dictumst. Donec sodales, libero id congue sagittis, mauris arcu consequat purus, vitae laoreet lorem risus vel risus. Duis at orci quis justo convallis congue.'
      },
      {
        title: 'Highlight 2',
        images: [SmartyPillHighlight2Image1, SmartyPillHighlight2Image2],
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed elit id velit congue pellentesque. Ut at tincidunt enim. Vivamus gravida, velit sit amet imperdiet suscipit, erat nulla faucibus turpis, eget rutrum magna odio ut tortor. Maecenas pretium tellus nec nisi rhoncus scelerisque. In hac habitasse platea dictumst. Donec sodales, libero id congue sagittis, mauris arcu consequat purus, vitae laoreet lorem risus vel risus. Duis at orci quis justo convallis congue.'
      },
      {
        title: 'Highlight 3',
        images: [SmartyPillHighlight2Image1, SmartyPillHighlight2Image2],
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed elit id velit congue pellentesque. Ut at tincidunt enim. Vivamus gravida, velit sit amet imperdiet suscipit, erat nulla faucibus turpis, eget rutrum magna odio ut tortor. Maecenas pretium tellus nec nisi rhoncus scelerisque. In hac habitasse platea dictumst. Donec sodales, libero id congue sagittis, mauris arcu consequat purus, vitae laoreet lorem risus vel risus. Duis at orci quis justo convallis congue.'
      }
    ],
    clientQuote:
      'The biggest benefit that Generate provided for me was just the amount of work that was put into SmartyPill, and the knowledge gained from prototyping and writing software for it.',
    next: { project: 'earnz', date: 2021 }
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
    },
    teamMembers: [
      { name: 'Matt McCoy', title: 'Project Lead', color: '#FFBF3C' },
      { name: 'Matt McCoy', title: 'Project Lead', color: '#6FCF97' }
    ],
    teamImage: { image: TeamStock, bgColor: '#187DFF' },
    companyLogo: { image: CompanyLogoStock, bgColor: '#22B0A5' },
    brandIdentity: {
      title: 'Brand Identity',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed elit id velit congue pellentesque. Ut at tincidunt enim. Vivamus gravida, velit sit amet imperdiet suscipit, erat nulla faucibus turpis, eget rutrum magna odio ut tortor. Maecenas pretium tellus nec nisi rhoncus scelerisque. In hac habitasse platea dictumst. Donec sodales, libero id congue sagittis, mauris arcu consequat purus, vitae laoreet lorem risus vel risus. Duis at orci quis justo convallis congue.',
      image: { image: BrandIdentityImage, bgColor: '#22B0A5' }
    },
    palette: ['#FFBF3C', '#6FCF97', '#187DFF', '#FF6660'],
    highlights: [
      {
        title: 'Highlight 1',
        images: [SmartyPillHighLight1Image],
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed elit id velit congue pellentesque. Ut at tincidunt enim. Vivamus gravida, velit sit amet imperdiet suscipit, erat nulla faucibus turpis, eget rutrum magna odio ut tortor. Maecenas pretium tellus nec nisi rhoncus scelerisque. In hac habitasse platea dictumst. Donec sodales, libero id congue sagittis, mauris arcu consequat purus, vitae laoreet lorem risus vel risus. Duis at orci quis justo convallis congue.'
      },
      {
        title: 'Highlight 2',
        images: [SmartyPillHighlight2Image1, SmartyPillHighlight2Image2],
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed elit id velit congue pellentesque. Ut at tincidunt enim. Vivamus gravida, velit sit amet imperdiet suscipit, erat nulla faucibus turpis, eget rutrum magna odio ut tortor. Maecenas pretium tellus nec nisi rhoncus scelerisque. In hac habitasse platea dictumst. Donec sodales, libero id congue sagittis, mauris arcu consequat purus, vitae laoreet lorem risus vel risus. Duis at orci quis justo convallis congue.'
      },
      {
        title: 'Highlight 3',
        images: [SmartyPillHighlight2Image1, SmartyPillHighlight2Image2],
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed elit id velit congue pellentesque. Ut at tincidunt enim. Vivamus gravida, velit sit amet imperdiet suscipit, erat nulla faucibus turpis, eget rutrum magna odio ut tortor. Maecenas pretium tellus nec nisi rhoncus scelerisque. In hac habitasse platea dictumst. Donec sodales, libero id congue sagittis, mauris arcu consequat purus, vitae laoreet lorem risus vel risus. Duis at orci quis justo convallis congue.'
      }
    ],
    clientQuote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed elit id velit congue pellentesque. Ut at tincidunt enim. Vivamus gravida, velit sit amet imperdiet suscipit, erat nulla faucibus turpis, eget rutrum magna odio ut tortor. Maecenas pretium tellus nec nisi rhoncus scelerisque. In hac habitasse platea dictumst. Donec sodales, libero id congue sagittis, mauris arcu consequat purus, vitae laoreet lorem risus vel risus. Duis at orci quis justo convallis congue.',
    next: { project: 'smartypill', date: 2021 }
  }
}

export default ClientProjectsJSON
