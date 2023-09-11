# Tracking Plan for Core Events

## Set of core events for the product

## 1. Logged In

This event should be sent when an user signed in to use the product dashboard. This event supports the following semantic properties:

- user_id
- event_id
- timestamp
- type
- url

## 2. Explored Feature

Tracking users interaction with specific features can help in understanding feature User friendlyness, usage patterns, and identifying areas for improvement.

The product dashboard can have possible features to be tracked included:

- Export reports
- Filter things
- Export data
- Save data files

This even can have properties

- feature_id
- type
- version
- User Segmentation: associating user segmentation properties with feature usage events can help analyze feature adoption and engagement across different user segments. This allows you to identify which user groups are utilizing specific features more effectively and address any disparities.

## 3. Feature Action Taken

Tracking when users click on specific click button, can help measure engagement and evaluate the dashboard UI,
user frindlyness etc. For exmaple Click button (User expeience thumbs up & Thumbs down). Moreover, User Feedback can also be tracked via email recived, meeting disscussions and via feedback button in the dashboard. This feature can have possible properties:

- user_id
- click_id
- feedback_id
- type
- timesatmp

**We can track the onboarding of users with these events**

Tracking onboarding is crucial for understanding how users interact with your product during the initial stages and optimizing their experience. Here are some key events that can track to monitor and analyse the onboarding process:

## 4. Account Added User

This event should be sent when a user is created. Properties:

- user_id
- timestamp
- company

## 5. Credentials Sent

This event should be sent when credentials are sent to the users for the dashboard use. Properties:

- user_email
- user_name
- company
- role
- timestamp

## 6. Toturial Shared

This event should be sent when a toturail/user guide has shared with users. Properties:

- user_id
- toturial_id
- timestamp
- type

## 7. Provided Feedback

This event should sent when a users provided the feedback during the onboarding process. Process

- user_id
- feedback_id
- type

## 8. Engaged with Feature

This event sent when user actively engages with specific features. For example A users is shows interstes in a specific feature. It can be be any feature

- user_id
- feature_id
- type

## 9. Discovered Feature

This event is send when a user discover a possibe fearture for our product & request for its implementation. This ecent can be uder feedback, but here we will keep it specifically for the fearture develeopment.

- user_id
- feature_id
- type

## 10. Onboarding Completed

Track when a user successfully completes the onboarding process. This event signifies that a user has finished the necessary steps to begin using our product independently.

- user_id
- type
- timestampe

May be we van add Onboarding Started event as well.

## Set of Core events for Marketing

## 11. Requested Contact

This event is sent when a user submit a contact request or give feedback. It's also a conversion event if user a
submit a contact request. Properties

- user_id
- timestamp
- email
- type

## 12. Navigated Page

This event is sent when a user visits the company website. We can track a specific area of intrest. Properties

- user_id
- frequency_visit
- timestamp
- url
- type

## 13. Explored Queries

We can track this event with a user search querries. Properties

- user_id
- search_id
- timestamp
- type
