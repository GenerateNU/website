
 # What was the ticket?
 WT-101 - Fixing Product Dev Lifecycle resizing
 Link to Ticket:https://generatenu.atlassian.net/jira/software/projects/WT/boards/2?selectedIssue=WT-101 
 
 # What did I do?
 
 Pulled changes from window-resizing branch into new branch
 Had to redo mobile CSS, since it was not compatible with the new JSX and CSS styling
 
 # How did I test it?
 
Describe in detail steps you used to test the changes you have made.

Compared against performance on window-resizing branch
Checked whether any text/circles bled at minimum viewport width and max height, as well as at low and high zooms
Checked mobile version against live mobile version, and tested on multiple phone resolutions
 
 Required checks:
 
 - [Yes] Did you conduct a self-review?
 - [N/A] Have you written unit or integration tests?
=======

 # What could go wrong in the future? What parts of your code should the reviewer pay the most attention to?
 
 Describe aspects of the PR that may become problems in the future.
 - Current wheel SVG's are dealt with individually, since each wheel takes up a _different amount of space_ on each SVG. In the future, the SVGs should be standardized.
 
 # Additional comments for the reviewers
 
 # Screenshots

 MY VERSION
 ![alt text](public/images/PRImages/Screen
 ![alt text](public/images/PRImages/TeamsScreenshot2.png.png?raw=true "SS 2")
