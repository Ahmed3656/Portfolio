module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'git add'
  ],
  '**/*.{md,json}': [
    'prettier --write',
    'git add'
  ]
};
