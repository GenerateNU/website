
 # What was the ticket?
 WT-48, WT-78, and WT-54: Properly resizing the WeAreSection and its cards, and implementing it properly on mobile.
 URLs: https://generatenu.atlassian.net/jira/software/projects/WT/boards/2?selectedIssue=WT-54
 https://generatenu.atlassian.net/jira/software/projects/WT/boards/2?selectedIssue=WT-78
 https://generatenu.atlassian.net/jira/software/projects/WT/boards/2?selectedIssue=WT-48


 
 # What did I do?
 
Increased the blank div off the right side of Teams
Added min calculations to card sizes, font sizes, and reduced overall sizes

For mobile, I simply had to make a few changes to the existing mobile implementation by tweaking card and font sizes to fit properly
on the mobile screen.
 
 # How did I test it?
 
 I tested the screen matching the Figma at the default resolution, tested for no bleeding at narrow and tall viewport resolutions, and 
 checked for bleeding at my laptop's minimum and maximum zoom. I also checked whether the mobile version displayed properly and matched the Figma for different phones.

 
 Required checks:
 
 - [Yes] Did you conduct a self-review?
 - [N/A] Have you written unit or integration tests?
=======

 # What could go wrong in the future? What parts of your code should the reviewer pay the most attention to?
 Changing the Teams section could cause it to extend off to the left and overlap with the Values section.
 
 
 # Additional comments for the reviewers
 
 The navbar currently bleeds over some of the text, but that will be fixed in the resizing-navbar-fix PR.
 # Screenshots

 MY VERSION
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%209.48.52%20AM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%209.49.17%20AM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%209.49.34%20AM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%209.49.59%20AM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-06%20at%209.50.21%20AM.png)
