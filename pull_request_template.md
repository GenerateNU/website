# What was the ticket?

 WT-28/WT-68 - Worked on abstracting the code duplication for desktop vs mobile view of pages.
 [Link to Ticket](https://generatenu.atlassian.net/browse/WT-68)

# What did I do?

This is a React component called "DesktopMobileScrollAndBackgroundHandler" that handles rendering content differently based on the device type. The component has three props: "children", "desktopBGColor", and "mobileBGColor". The desktop view uses horizontal scrolling to display its contents and has a background color specified by the "desktopBGColor" prop, while the mobile view uses vertical scrolling and has a background color specified by the "mobileBGColor" prop. The content in both views is wrapped in a React-Bootstrap Row or Column component to ensure proper layout.

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

- This code is only applicable to pages that have a background color and use horizontal scrolling on desktop and vertical scrolling on mobile. If we want to use this component for pages that don't have a background color and don't required changes in scrolling behavior, we would have to modify the code or, more likely, write a whole new component.

# Additional comments for the reviewers

 None
