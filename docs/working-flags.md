---
id: 'Working with flags'
title: 'Working with flags'
---
The creation and editing of feature flags occurs via the webpage running at `http://localhost:3000`. 

## Creating a new flag
<div style={{textAlign: 'center'}}>
  <img src={require('./assets/create_flag.gif').default} alt='Gif of Pioneer UI creating new flag' />
</div>

New flags are created by clicking the 'Create New Flag' button. New flags require a title and have an optional description and rollout percentage. By default, the rollout percentage will be 0% and the flag will be toggled "off". A flag can be toggled on or off directly from the dashboard, or when editing a flag. 

## Editing a flag
<div style={{textAlign: 'center'}}>
  <img src={require('./assets/update_flag.gif').default} alt='Gif of editing an individual flag' />
</div>

Clicking on an individual flag enables you to access further information on the flag and edit flag details. Flags can also be deleted.