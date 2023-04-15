# What was the ticket?
WT-63 - Fix alignment for Generate logo on the navbar.
 Link to Ticket:https://generatenu.atlassian.net/jira/software/projects/WT/boards/2?selectedIssue=WT-63 
 I also updated the menu icon to match the size of the text and be spaced slightly out from the menu text.

 
 # What did I do?
 
 I pulled in the changes for the navbar I made in window-resizing. 
 This includes taking logos out of anchor tags so that they align properly in the flexbox and adding 
 a selector specifying the width and height of the nav bar.
 I also changed the menu icon to scale with viewport height and added margins around menu text.
 
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
 ![alt text](../public/images/PRImages/Screenshot%202023-04-12%20at%2011.18.45%20PM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-12%20at%2011.18.51%20PM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-12%20at%2011.19.03%20PM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-12%20at%2011.19.10%20PM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-12%20at%2011.19.43%20PM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-12%20at%2011.19.51%20PM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-12%20at%2011.19.58%20PM.png)