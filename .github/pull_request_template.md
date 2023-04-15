# What was the ticket?
WT-63 - Fix alignment for Generate logo on the navbar.
 Link to Ticket:https://generatenu.atlassian.net/jira/software/projects/WT/boards/2?selectedIssue=WT-63 
 I also updated the menu icon to match the size of the text and be spaced slightly out from the menu text.
 
 # What did I do?
 
 I removed the list of cards from their containing div and placed them directly under the JSX fragment, and added a container flex div around each card.
 I also tweaked the mobile CSS to maintain its look.
 
 # How did I test it?
 
 I resized the screen to narrow viewport heights and widths, zoomed in and out to the max values, and checked using mobile inspect.

 # What could go wrong in the future? What parts of your code should the reviewer pay the most attention to?

 Whether the relative positioning of the header texts and the cards is appropriate
 
 # Additional comments for the reviewers
 I implemented a decent mobile look, although the styling will be changed entirely in a different ticket.
 
 # Screenshots

 MY VERSION

 ![alt text](../public/images/PRImages/Screenshot%202023-04-12%20at%2010.44.30%20PM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-12%20at%2010.44.43%20PM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-12%20at%2010.45.02%20PM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-12%20at%2010.45.17%20PM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-12%20at%2010.45.33%20PM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-12%20at%2010.45.41%20PM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-12%20at%2010.46.05%20PM.png)
