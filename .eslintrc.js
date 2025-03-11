module.exports = {
  extends: [
    'next/core-web-vitals',
    // other extends...
  ],
  rules: {
    // Disable comma-dangle rule (or set it to how you prefer)
    'comma-dangle': 'off',
    
    // Or make trailing commas optional instead of required
    // 'comma-dangle': ['error', 'only-multiline'],
    
    // Add other rules you want to customize
  }
};
