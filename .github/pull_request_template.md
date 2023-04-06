
 # What was the ticket?

 WT-99 - I pulled in resizing changes for the Who We Are section.
 Link to Ticket:https://generatenu.atlassian.net/jira/software/projects/WT/boards/2?selectedIssue=WT-99 
 
 # What did I do?
 
 I pulled in changes from the window-resizing branch and added tweaks for mobile support.
 
 # How did I test it?
 
Describe in detail steps you used to test the changes you have made.

 Key Parts
 - I compared the component to the  Figma at default size
 - Tested clean resizing at max viewport width and min viewport height/min viewport width and max height
 - Checked on multiple phone resolutions to ensure consistent resizing

 
 - I checked that the Figma matched at the default size.
 - I ensured that the page resized well at low viewport width/high height and low height/high widths.
 - I ensured that the page did not bleed at high and low magnifications.
 - I checked the page on various phone sizes.
 Required checks:
 
 - [Yes] Did you conduct a self-review?
 - [Yes] Have you written unit or integration tests?
=======

 # What could go wrong in the future? What parts of your code should the reviewer pay the most attention to?
 

 Not much; simple changes made here
 Key Questions
 - Had to make specific changes at various screen dimensions. May need to make changes in the future to make it more generalizable.
 
 # Additional comments for the reviewers

 The screenshots show bleeding from the previous Intro panel, but that is fixed in a different branch and has no bearing
 on the efficacy of this PR.

 
 # Screenshots

 MY VERSION

 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%201.38.08%20AM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%201.38.49%20AM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%201.39.24%20AM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%201.39.36%20AM.png)

