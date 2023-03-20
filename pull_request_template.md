# What was the ticket?

WT-78: Implementing About landing and values mobile pages
 [Link to Ticket](https://generatenu.atlassian.net/jira/software/projects/WT/boards/2?selectedIssue=WT-78)

# What did I do?

I added extra mobile CSS selectors, changed font sizes, heights and widths, and added/changed paddings to make the pages properly dipslay on mobile scales.

# How did I test it?

Describe in detail steps you used to test the changes you have made.
Key Parts

I used the mobile inspect to check proper displaying on multiple phone resolutions.

 Required checks:

- [Y] Did you conduct a self-review?
- [NA] Have you written unit or integration tests?

# What could go wrong in the future? What parts of your code should the reviewer pay the most attention to?

Describe aspects of the PR that may become problems in the future.
Key Questions

The Firefox Mobile inspect was being buggy selecting different phones, so I tested with a diversity of resolutions under the Responsive phone selection. If display issues were to occur on different phones, namely IPhones, this might be why.

# Additional comments for the reviewers


![image](./public/images/PRImages/Screenshot%202023-03-20%20at%206.42.57%20PM.png)
![image](./public/images/PRImages/Screenshot%202023-03-20%20at%206.43.05%20PM.png)