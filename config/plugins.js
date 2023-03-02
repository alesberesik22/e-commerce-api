module.exports = ({ env }) => ({
  // ...
  plugins: {
    documentation: {
      enabled: true,
      layout: {
        "/documentation/v1.0.0": {
          // Change this to match the prefix of your API
          title: "My STORE API",
          description: "API documentation",
          version: "1.0.0",
        },
      },
    },
    // ...
  },
  // ...
});
