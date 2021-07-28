module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Pioneer',
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          items: ['intro', 'install', 'Working with flags']
        },
        {
          type: 'category',
          label: 'Integrating SDKs',
          collapsed: true,
          items: ['sdk-intro','javascript-sdk-doc','ruby-sdk-doc','go-sdk-doc']
        }
      ],
    },
    
  ],
};