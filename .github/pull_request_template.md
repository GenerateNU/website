
 # What was the ticket?
 WT-86 - I worked on adding the mountain image to the Growth Mantra section of the About Page (Landing)
 Link to Ticket: https://generatenu.atlassian.net/jira/software/projects/WT/boards/2?assignee=63c99b32e28ec74364ccacdc&selectedIssue=WT-86
 
 # What did I do?
 
I changed some of the HTML/CSS properties of the GrowthMantra section to add the mountain image and determine proper sizing 
 
 # How did I test it?
 
Describe in detail steps you used to test the changes you have made.
 Key Parts
 - I made sure that the mountain was always in view in the center of the page when resizing.
 
 - I checked that the Figma matched at the default size.
 - I ensured that the page resized well at low viewport width/high height and low height/high widths.
 - I ensured that the page did not bleed at high and low magnifications.
 - I checked the page on various phone sizes.
 Required checks:
 
 - [Yes] Did you conduct a self-review?
 - [Yes] Have you written unit or integration tests?
=======

 # What could go wrong in the future? What parts of your code should the reviewer pay the most attention to?
 
 Describe aspects of the PR that may become problems in the future.
 Key Questions
 - This landing page has its own issues that need to be fixed that may impact the positioning and sizing of the mountain image
 
 # Additional comments for the reviewers
 The intro text bleeds over in one of the screenshots, but this is fixed on a different branch.
 
 # Screenshots
 FIGMA
 ![alt text](public/images/PRImages/FigmaMountains.png?raw=true "FIGMA") 

 MY VERSION
 ![alt text](public/images/PRImages/Mountains1.png?raw=true "LOCAL 1")
 ![alt text](public/images/PRImages/Mountains2.png?raw=true "LOCAL 2")
  ![alt text](public/images/PRImages/Mountains3.png?raw=true "LOCAL 3")
   ![alt text](public/images/PRImages/Mountains4.pngraw=true "LOCAL 4")
