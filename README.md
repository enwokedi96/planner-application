# planner-application

This is a schedule planner which has current dates  on which users can log their itinerary easily and edit them if need be.

The entire page is designed using BootStrap while the logic uses JQuery. The page grid is designed to remain consistent
for all viewports. 

## Installation

Visit the live website [here](https://enwokedi96.github.io/planner-application/).

## Usage

The planner displays the current date at the top of page, and is set between 09:00am and 05:00pm. The user simply needs to
click in schedule sections (at center) to edit schedule corresponding to adjacent time. On first use ever, all schedules are blank until
user enters text.

The schedule is set to dynamically align with one of 3 different periods:

 * the past which are times behind the current time. Schedule here cannot be edited and is populated with text "This event has already passed!".
 * the present, which is the current time. Text of schedule here is set to "Current event".
 * the future, which are times ahead of current time. Schedule here can be edited as seen fit.
 
 Besides dynamically overwritten schedule from past and present times, schedule storage is persistent and displays irrespective of page reload.
 
 A screenshot of the page is shown below:
 
 <img src = "./assets/images/127.0.0.1_5500_index.html.png" alt="schedule-planner-screenshot">
 
 
 ## License
 
 Link to license can be found [here](LICENSE.md).

