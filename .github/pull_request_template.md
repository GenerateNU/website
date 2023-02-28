# What was the ticket?
 WT-2 - I worked on element resizing on the Landing page to ensure that elements remain visible and do not bleed into each other.
 Link to Ticket: https://generatenu.atlassian.net/jira/software/projects/WT/boards/2?selectedIssue=WT-2
 This PR also resolves WT-63 (https://generatenu.atlassian.net/jira/software/projects/WT/boards/2?selectedIssue=WT-63), aligning the elements
 in the nav bar and giving it better sizing. 
​
 
 # What did I do?
 
I changed the CSS units for width, height, line-height, font-size, and other attributes to make them fit better on the page.
In some cases, I utilized CSS functions such as min() to ensure that a sizing which looked good at normal resolutions did not cause issues at
extreme window sizes and shapes. I created rotated copies of the Product Development wheel instead of rotating a single image, and split the
 Ideation, Prototype, and Production components into two main elements enclosed by JSX fragments. I also reduced the padding on the NavBar component and added a row-flex to one of its divs to align the image, text, and menu icon within. I also added CSS styling for the mobile version of the landing page through the Product Development Lifecycle section to match it with the Figma and prevent bleeding.
 
 # How did I test it?
 
Describe in detail steps you used to test the changes you have made.
I viewed the window on a monitor to check for large viewport width and heights, shrank viewport width to its minimum while testing different viewport heights to test for extreme width-height ratios, and zoomed the page up to 200% to ensure that spacing remained consistent at high magnification.
​
 # What could go wrong in the future? What parts of your code should the reviewer pay the most attention to?

 I have documented the changes I have worked on, but this branch also contains fixes Andy worked on, some of which should be in a separate PR which he posted last Thursday. Note that this is on branch bug-fix/window resizing; Andy had done work on that branch and successfully merged my work from bug-fix/landing-window-resizing into it. 


 
  # Additional comments for the reviewers
 
 This is a large commit. It contains work from both Andy and I, and also other small fixes which were necessary while achieveing the main ticket goal (making sure that the CSS does not break on mobile, getting the navbar to look good on the About page, etc) for which there were no tickets.
 Thanks for handling this big PR right before all hands!
 # Screenshots

 MY VERSION
![alt text](../public/images/PRImages/what_we_offer.png)
![alt text](../public/images/PRImages/intro_wide.png? "LOCAL")
![alt text](../public/images/PRImages/intro_tall.png?"LOCAL")
![alt text](../public/images/PRImages/whoweare_wide.png "LOCAL")
![alt text](../public/images/PRImages/whoweare_tall.png "LOCAL")
![alt text](../public/images/PRImages/cycle_1.png? "LOCAL")
![alt text](../public/images/PRImages/cycle_2.png "LOCAL")