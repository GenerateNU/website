# What was the ticket?

 WT-57 - Bug fix + resizing dynamics: Fix text layout issues on "Stats" panel of About page when resizing page.
 [Ticket Link]([htttps://put_the_ticket_link_here.com](https://generatenu.atlassian.net/browse/WT-57?atlOrigin=eyJpIjoiOWEzYWVhZTYxOTBmNGVjNDgzN2U0OGQwYjY0MWM1MzkiLCJwIjoiaiJ9))

# What did I do?

Cleaned up the code and fixed the text layout issues on the "Stats" panel of the About page when resizing the page. Additionally implemented a NumberTickerAnimation component that animates the numbers on the "Stats" panel to tick up as depicted in the Figma design. This feature is currently disabled until I can get the go ahead from design that the animation is what they intended.

# How did I test it?

Describe in detail steps you used to test the changes you have made.

Tested on a variety of screen sizes within inspect to ensure that the text bleeding and overlapping issues were fixed.

Required checks:

- [Y] Did you conduct a self-review?
- [N/A] Have you written unit or integration tests?

# What could go wrong in the future? What parts of your code should the reviewer pay the most attention to?

Describe aspects of the PR that may become problems in the future.

Black bars between timeline and stats section are not in the Figma. Unsure how to fix this.
# Additional Comments for the Reviewers

# Screenshots
