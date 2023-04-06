
 # What was the ticket?
 WT-2 - No specific ticket, but pulled in resizing changes for WeAreResponse section.
 Link to Ticket:https://generatenu.atlassian.net/jira/software/projects/WT/boards/2?selectedIssue=WT-2 
 
 # What did I do?
 
 I pulled in changes from window-resizing, and used a span tag to implement the outline for "Some Say" in the green rectangle.
 I also updated the text to match the Figma.
 Also pulled in relevant changes for mobile.
 
 # How did I test it?
 
Describe in detail steps you used to test the changes you have made.
 
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
 - Had to make specific changes at various screen dimensions. May need to make changes in the future to make it more generalizable.
 
 # Additional comments for the reviewers
 
 # Screenshots
 FIGMA
 ![alt text](public/images/PRImages/Figma_Earnz.png?raw=true "FIGMA") 

 MY VERSION
 ![alt text](public/images/PRImages/Earnz_SS_1.png?raw=true "LOCAL 1")
 ![alt text](public/images/PRImages/Earnz_SS_2.png?raw=true "LOCAL 2")
