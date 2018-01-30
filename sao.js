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
    private: {
      type: 'confirm',
      message: 'Should this package be private?',
      default: false,
    },
    public: {
      type: 'confirm',
      message: 'Should this package public on npm?',
      default: true,
      when: a => !a.private,
    },
  },
  gitInit: false,
  installDependencies: false,
};
