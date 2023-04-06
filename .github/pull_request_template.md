
 # What was the ticket?
 WT-98: Fixed "We are Generate" resizing bugs.
 Link to Ticket:https://generatenu.atlassian.net/jira/software/projects/WT/boards/2?selectedIssue=WT-98 
 
 # What did I do?
 
 I pulled in resizing changes from the window-resizing branch.
 
 # How did I test it?
 
Describe in detail steps you used to test the changes you have made.
 Key Parts
 - I tested the page at low screen sizes, as well as high viewport width and low height/low viewport width and high height.
- Compared default size against Figma
 
 Required checks:
 
 - [Yes] Did you conduct a self-review?
 - [Yes] Have you written unit or integration tests?
=======

 # What could go wrong in the future? What parts of your code should the reviewer pay the most attention to?
 
 Describe aspects of the PR that may become problems in the future.
 
 - Fixing the navbar MAY cause "We Are" text to overlap
 - Intro page still needs to be implemented for mobile, instead of Coming Soon
 # Additional comments for the reviewers
 
 # Screenshots
 MY VERSION
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%201.49.26%20AM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%201.49.32%20AM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%201.49.39%20AM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%201.49.45%20AM.png)
