---
id: 'Working with flags'
title: 'Working with flags'
---
The creation and editing of feature flags occurs via the webpage running at `http://localhost:3000`. 

## Creating a new flag
<div style={{textAlign: 'center'}}>
  <img src={require('./assets/create_flag.gif').default} alt='Gif of Pioneer UI creating new flag' />
</div>

New flags are created by clicking the 'Create New Flag' button. New flags require a title and have an optional description and rollout percentage. By default, the rollout percentage will be 0% and the flag will be toggled "off". 

## Toggling a flag
<div style={{textAlign: 'center'}}>
  <img src={require('./assets/toggle_flag.gif').default} alt='Gif of toggling an individual flag' />
</div>

A flag can be toggled on or off directly from the dashboard, or when viewing the flag's detailed information. 

## Editing a flag
<div style={{textAlign: 'center'}}>
  <img src={require('./assets/update_flag.gif').default} alt='Gif of editing an individual flag' />
</div>

Clicking on an individual flag enables you to access further information on the flag and edit flag details. You can adjust the name of the flag, the description, and the percentage value to be used for rollout. Remember to be careful when editing the name fo a flag; *if the name change is not reflected in your application code, problems can arise!*

## Deleting a flag
<div style={{textAlign: 'center'}}>
  <img src={require('./assets/delete_flag.gif').default} alt='Gif of deleting an individual flag' />
</div>

Clciking on an individual flag will provide access to a button that can be used to delete the flag. **Be careful here!** *If you delete a flag that is still being used within your application, there may be unexpected consequences!*