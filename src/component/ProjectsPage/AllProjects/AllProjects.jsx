import './style.css'
import Project from './Project/Project'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import Alia from '../../../assets/images/projectspage/alia.svg'
import Arctic from '../../../assets/images/projectspage/arctic.svg'
import Jurni from '../../../assets/images/projectspage/jurni.svg'
import ShowNxt from '../../../assets/images/projectspage/shownxt.svg'
import HotDate from '../../../assets/images/projectspage/hotdate.svg'
import AutoPasser from '../../../assets/images/projectspage/autopasser.svg'
import { InputAdornment } from '@material-ui/core'

const SearchBar = ({ setSearchQuery }) => (
  <form>
    <TextField
      onInput={(e) => {
        setSearchQuery(e.target.value)
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon
              style={{
                marginTop: '40px',
                fill: 'grey',
                width: '50px',
                height: '50px'
              }}
            />
          </InputAdornment>
        ),
        inputProps: {
          style: { fontSize: '3em', marginTop: '40px' }
        },
        style: {
          height: '140px',
          width: '75vw',

          justifyContent: 'center'
        }
      }}
      variant='outlined'
    />
  </form>
)

const filterData = (query, data) => {
  if (!query) {
    return data
  } else {
    return data.filter((d) => d.toLowerCase().includes(query))
  }
}

const projects = [
  {
    name: 'Jurni',
    image: Jurni,
    teams: ['software']
  },
  {
    name: 'Alia',
    image: Alia,
    teams: ['software']
  },
  {
    name: 'Arctic Vision',
    image: Arctic,
    teams: ['software', 'hardware']
  },
  {
    name: 'ShowNxt',
    image: ShowNxt,
    teams: ['software']
  },
  {
    name: 'Hot Date',
    image: HotDate,
    teams: ['hardware']
  },
  {
    name: 'Autopasser',
    image: AutoPasser,
    teams: ['hardware']
  }
]

export default function AllProjects() {
  const [searchQuery, setSearchQuery] = useState('')
  const dataFiltered = filterData(
    searchQuery,
    projects.map((p) => p.name)
  )

  const generateGrid = () => {
    const grid = []
    const filteredProjects = projects.filter((p) =>
      dataFiltered.includes(p.name)
    )
    for (let i = 0; i < filteredProjects.length; i += 2) {
      grid.push(
        <div className='project-col'>
          <Project
            name={filteredProjects[i].name}
            image={filteredProjects[i].image}
            teams={filteredProjects[i].teams}
          />
          {i + 1 < filteredProjects.length ? (
            <Project
              name={filteredProjects[i + 1].name}
              image={filteredProjects[i + 1].image}
              teams={filteredProjects[i + 1].teams}
            />
          ) : (
            <div></div>
          )}
        </div>
      )
    }

    return grid
  }

  return (
    <div
      className='all-projects-container'
      style={{ width: Math.ceil(projects.length / 2) * 500 + 200 }}
    >
      <div className='all-projects-header'>
        <h1 className='projects-title'>All Projects</h1>
      </div>
      <div className='search-bar'>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className='all-projects'>{generateGrid()}</div>
    </div>
  )
}
