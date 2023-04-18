
# What was the ticket?
No specific ticket: resizing the Culture page to be of constant size no matter the page size.
 # What did I do?
 
 I replaced percent, vw, and vh units with absolute pixels, added margins to properly position divs, and replaced some instances of Bootstrap and flex.
 
 # How did I test it?
 
 I resized the screen to narrow viewport heights and widths to ensure that there was no bleeding or resizing at different page sizes.

 # What could go wrong in the future? What parts of your code should the reviewer pay the most attention to?

Since this task had no resizing in mind, I sized the elements around slightly smaller than my laptop screen. While the code was also tested on my large monitor, it could be the case that 
the sizes of this page are not suited for certain displays such as projectors.
 
 # Screenshots
 FIGMA
 ![alt text](public/images/PRImages/FigmaMountains.png?raw=true "FIGMA") 

 MY VERSION

 ![alt text](../public/images/PRImages/Screenshot%202023-04-17%20at%205.20.15%20AM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-17%20at%205.20.22%20AM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-17%20at%205.20.31%20AM.png)
 ![alt text](../public/images/PRImages/Screenshot%202023-04-17%20at%205.20.38%20AM.png)

