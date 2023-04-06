
 # What was the ticket?
WT-63 - Fix alignment for Generate logo on the navbar.
 Link to Ticket:https://generatenu.atlassian.net/jira/software/projects/WT/boards/2?selectedIssue=WT-63 

 
 # What did I do?
 
 I pulled in the changes for the navbar I made in window-resizing. 
 This includes taking logos out of anchor tags so that they align properly in the flexbox and adding 
 a selector specifying the width and height of the nav bar.
 
 # How did I test it?
 
Describe in detail steps you used to test the changes you have made.

- Compared navbar with that of Figma
- Checked navbar at max and min screen zooms
- Checked navbar on mobile to ensure it resizes properly
 
 Required checks:
 
 - [Yes] Did you conduct a self-review?
 - [N/A] Have you written unit or integration tests?
=======

 # What could go wrong in the future? What parts of your code should the reviewer pay the most attention to?
 
 Describe aspects of the PR that may become problems in the future.
 Depending on how the navbar is embedded in the page, it may cause other components to come out of alignment on certain pages.
 
 # Additional comments for the reviewers
 I implemented a decent mobile look, although the styling will be changed entirely in a different ticket.
 
 # Screenshots

 MY VERSION
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%202.26.47%20AM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%202.27.01%20AM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%202.27.31%20AM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%202.43.13%20AM.png)
