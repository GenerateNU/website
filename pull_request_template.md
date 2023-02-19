# What was the ticket?

 WT-28/WT-68 - Worked on abstracting the code duplication for desktop vs mobile view of pages.
 [Link to Ticket](https://generatenu.atlassian.net/browse/WT-68)

# What did I do?

I implemented a new React component called "DesktopMobilfy" that takes two props: "children" and "bgColor". The JSX code contains two divs with different classes: "vh-100 horizontal-scroll" and "vw-100 mobile vertical-scroll". The first div is displayed on desktop devices and uses horizontal scrolling to display its contents. The second div is displayed on mobile devices and uses vertical scrolling. Both divs have the same background color as specified by the "bgColor" prop.

# How did I test it?

Describe in detail steps you used to test the changes you have made.
 Key Parts

- Using inspect, I tested the code on different screen widths (500, 650, 1000) to make sure that the correct div was being displayed.

 Required checks:

- [Y] Did you conduct a self-review?
- [NA] Have you written unit or integration tests?

# What could go wrong in the future? What parts of your code should the reviewer pay the most attention to?

 Describe aspects of the PR that may become problems in the future.
 Key Questions

- This code is only applicable to pages that have a background color and use horizontal scrolling on desktop and vertical scrolling on mobile. If we want to use this component for pages that don't have a background color and don't required changes in scrolling behavior, we would have to modify the code or write a whole new component.

# Additional comments for the reviewers

 None
