
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
 New CSS selector added for Some Say text, used in the span
 
 # Additional comments for the reviewers
 The intro text bleeds over in one of the screenshots, but this is fixed on a different branch.
 
 # Screenshots

 MY VERSION
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%202.01.53%20AM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%202.02.03%20AM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%202.02.11%20AM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%202.02.27%20AM.png)