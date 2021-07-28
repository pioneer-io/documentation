---
id: 'Working with flags'
title: 'Working with flags'
---

<div style={{textAlign: 'center'}}>
  <img src={require('./assets/flag_dashboard.png').default} alt='Screenshot of Pioneer UI dashboard' />
</div>

The creation and editing of feature flags occurs via the webpage running at `http://localhost:3000`. 

## Creating a new flag
New flags are created by clicking the 'Create New Flag' button. New flags require a title and have an optional description and rollout percentage. By default, the rollout percentage will be 0% and the flag will be toggled "off".