import SmartyPillImage from './Case-Study-Images/SmartyPill/SmartyPillMockUp.svg'
import BrandIdentityImage from './Case-Study-Images/SmartyPill/BrandIdentity.png'
import SmartyPillHighLight1Image from './Case-Study-Images/SmartyPill/Highlight1.png'
import SmartyPillHighlight2Image1 from './Case-Study-Images/SmartyPill/Highlight2v1.png'
import SmartyPillHighlight2Image2 from './Case-Study-Images/SmartyPill/Highlight2v2.png'
import SoftwareTeam from './Case-Study-Images/software.svg'
import HardwareTeam from './Case-Study-Images/hardware.svg'

const ClientProjectsJSON = {
  projects: [
    {
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
        { name: 'Matthew Swenson', title: 'Project Lead', image: '' },
        { name: 'Matthew Swenson', title: 'Project Lead', image: '' },
        { name: 'Matthew Swenson', title: 'Project Lead', image: '' },
        { name: 'Matthew Swenson', title: 'Project Lead', image: '' },
        { name: 'Matthew Swenson', title: 'Project Lead', image: '' },
        { name: 'Matthew Swenson', title: 'Project Lead', image: '' }
      ],
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
    }
  ]
}

export default ClientProjectsJSON
