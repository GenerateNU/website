# What was the ticket?
 WT-48 and 54: Ensuring that resizing on the "Values" page does not cause isues with the bold text or hover text
 https://generatenu.atlassian.net/jira/software/projects/WT/boards/2?selectedIssue=WT-48
 https://generatenu.atlassian.net/jira/software/projects/WT/boards/2?selectedIssue=WT-54
​
 
 # What did I do?
 
I added CSS min() functions to font sizes, line widths, and card heights, as well as increasing the width of the card-space div.
 
 # How did I test it?
 
Describe in detail steps you used to test the changes you have made.
 Key Parts
 - I checked the integrity of the page on my fullscreen monitor at up to 170% zoom and down to 30%
 - Narrow, tall windows and wide, short windows on the monitor
 
​
 # What could go wrong in the future? What parts of your code should the reviewer pay the most attention to?
The specific design of the Figma is hard to nail with flex: a row of boxes which streches much farther than the viewport. I chose not to sacrifice 
card size so that the text remained easily readable, but this means that under extremely short windows bleeding does occur. If this is a poor tradeoff, the card size can easily be reduced in future.
 
 # Additional comments for the reviewers
 
 # Screenshots
 FIGMA
 ![alt text](public/images/PRImages/Featured_projects_mobile.png?raw=true "FIGMA") 
​
 MY VERSION
![alt text](public/images/PRImages/Screenshot 2023-02-28 at 6.48.39 AM.png)
![alt text](public/images/PRImages/Screenshot 2023-02-28 at 6.48.51 AM.png)
![alt text](public/images/PRImages/Screenshot 2023-02-28 at 6.49.03 AM.png)
![alt text](public/images/PRImages/Screenshot 2023-02-28 at 6.49.22 AM.png)