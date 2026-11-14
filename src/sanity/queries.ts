import { defineQuery } from 'groq';

// Schema fields are all optional, so projections `coalesce` the ones the UI always needs to keep result types non-null.

export const generateLinksQuery = defineQuery(`*[_type == "generateLink" && defined(slug.current) && defined(url)]{
  "slug": coalesce(slug.current, ""),
  "url": coalesce(url, "")
}`);

export const allCopyQuery = defineQuery(`*[_type == "copy"]{
  "key": coalesce(key, ""),
  "header": coalesce(header, ""),
  "content": coalesce(content, [])
}`);

export const showcasesQuery = defineQuery(`*[_type == "showcase" && defined(image.asset)]{
  "year": coalesce(year, ""),
  "semester": coalesce(semester, ""),
  image
} | order(year asc)`);

export const directorsQuery = defineQuery(`*[_type == "director" && defined(image.asset)]{
  "team": coalesce(team, ""),
  "title": coalesce(title, ""),
  "name": coalesce(name, ""),
  "email": coalesce(email, ""),
  color{hex},
  image,
  "zIndex": coalesce(zIndex, 0)
} | order(zIndex)`);

export const branchesQuery = defineQuery(`*[_type == "team"]{
  "team": coalesce(team, ""),
  "teamAbbreviation": coalesce(team_abbreviation, ""),
  color{hex},
  "zIndex": coalesce(zIndex, 0)
} | order(zIndex)`);

export const structuredTeamsQuery = defineQuery(`*[_type == "team" && team != "Clients" && defined(image.asset)]{
  "team": coalesce(team, ""),
  image,
  "teamDescription": coalesce(teamDescription, ""),
  "zIndex": coalesce(zIndex, 0),
  color{hex}
} | order(zIndex)`);

export const valuesQuery = defineQuery(`*[_type == "value"]{
  "value": coalesce(value, ""),
  "index": coalesce(index, 0)
} | order(index asc)`);

export const applyTeamsQuery = defineQuery(`*[_type == "team"]{
  "team": coalesce(team, ""),
  color{hex},
  tags,
  teamDescription,
  contributorDescription,
  leadDescription,
  chiefDescription,
  externalLink,
  "contributorRoles": contributorRoles[]->{"role": coalesce(role, ""), applicationLink, activeApplication},
  "leadRoles": leadRoles[]->{"role": coalesce(role, ""), applicationLink, activeApplication},
  "chiefRoles": chiefRoles[]->{"role": coalesce(role, ""), applicationLink, activeApplication}
} | order(zIndex desc)`);
