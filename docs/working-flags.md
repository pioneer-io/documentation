---
id: 'Working with flags'
title: 'Working with flags'
---
The creating, updating, and deleting of feature flags occurs via the application running at `http://localhost:3000`.

## Creating a new flag
New flags are created by clicking the `Create New Flag` button visible on the main dashboard. New flags require a title and have an optional description and rollout percentage. By default, the rollout percentage will be 0% and the flag will be toggled "off". 

<div style={{textAlign: 'center'}}>
  <img src={require('./assets/create_flag.gif').default} alt='Gif of Pioneer UI creating new flag' />
</div>

## Toggling a flag
A flag can be toggled on or off directly from the dashboard, or when viewing the flag's detailed information. 

<div style={{textAlign: 'center'}}>
  <img src={require('./assets/toggle_flag.gif').default} alt='Gif of toggling an individual flag' />
</div>

## Updating a flag
Clicking on an individual flag enables you to access further information on the flag and edit flag details. You can adjust the name of the flag, the description, and the percentage value to be used for rollout. Remember to be careful when updating the name of a flag; *if the name change is not reflected in your application code, problems can arise!*

<div style={{textAlign: 'center'}}>
  <img src={require('./assets/update_flag.gif').default} alt='Gif of updating an individual flag' />
</div>

## Deleting a flag
Clicking on an individual flag will provide access to a button that can be used to delete the flag. **Be careful here!** *If you delete a flag that is still being used within your application, there may be unexpected consequences!*

<div style={{textAlign: 'center'}}>
  <img src={require('./assets/delete_flag.gif').default} alt='Gif of deleting an individual flag' />
</div>
