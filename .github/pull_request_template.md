# What was the ticket?
 WT-41 - I worked on mobile responsiveness by attempting to code the mobile Featured Projects page panel to match the mobile UI in Figma.
 Link to Ticket: https://generatenu.atlassian.net/browse/WT-41?atlOrigin=eyJpIjoiMjY1ODFmZTRkMDVmNGY1N2ExZjc4MjJiYThlODNlMDUiLCJwIjoiaiJ9


 # What did I do?

I changed some of the CSS properties of the text components on the Featured Projects panel when the display is switched to mobile via using selectors to specifically change properties such as DOM layout (padding, margins) and text font-size.

 # How did I test it?

Describe in detail steps you used to test the changes you have made.
 Key Parts
 - I checked the behavior of the page at various page lengths (desktop size, border between desktop and mobile, and mobile size)
 - Made sure text remained clearly visible and as close as possible to the mobile UI.

 Required checks:

 - [ ] Did you conduct a self-review?
 - [ ] Have you written unit or integration tests?

 # What could go wrong in the future? What parts of your code should the reviewer pay the most attention to?

 Describe aspects of the PR that may become problems in the future.
 Key Questions
 - There is a black line running down the left side of the mobile page of the Landing, needs to be looked into.

 # Additional comments for the reviewers

 # Screenshots
 FIGMA
 ![alt text](public/images/PRImages/Featured_projects_mobile.png?raw=true "FIGMA") 

 MY VERSION
![alt text](public/images/PRImages/Featured_projects_mobile_UI_local.png?raw=true "LOCAL")