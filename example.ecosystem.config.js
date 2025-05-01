module.exports = {
  apps: [
    {
      name: "reza.boilerplate.webapp-dev",
      script: "node_modules/next/dist/bin/next",
      instances: 1,
      exec_mode: "cluster",
      max_memory_restart: "1G",
      args: "start -p 3100",
    },
  ],
};
