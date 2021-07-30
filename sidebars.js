module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Pioneer',
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          items: ['intro', 'install', 'Working with flags', 'rollout', 'logs', 'sdk-key']
        },
        {
          type: 'category',
          label: 'Integrating SDKs',
          items: ['sdk-intro','javascript-sdk-doc','ruby-sdk-doc','go-sdk-doc']
        },
        {
          type: 'category',
          label: 'Customization',
          items: ['docker', 'env-variables']
        },
        {
          type: 'doc',
          label: 'Architecture',
          id: 'architecture'
        },
        {
          type: 'category',
          label: 'Additional Documentation',
          items: ['doc-description', 'compass', 'scout']
        }
      ],
    },
    
  ],
};