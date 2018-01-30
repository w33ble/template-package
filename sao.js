module.exports = {
  enforceNewFolder: true,
  prompts: {
    package: {
      required: true,
      message: 'What is the name of the new package?',
    },
    description: {
      message: 'How would you describe the new package?',
      default: 'Another fine package',
    },
    name: {
      message: 'What is your name?',
      default: ':gitUser:',
      store: true,
    },
    username: {
      message: 'What is your GitHub username?',
      default: ':gitUser:',
      store: true,
    },
    repository: {
      message: 'What repository url/path should be used in package.json?',
    },
    public: {
      type: 'confirm',
      message: 'Is this package public?',
      default: true,
    },
  },
  gitInit: true,
  installDependencies: false,
};
