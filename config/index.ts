export function getEnvConfig(env: Recordable): ViteEnv {
  let envConfig: any = {};
  for (const envName of Object.keys(env)) {
    let envValue = env[envName].replace(/\\n/g, '\n');
    envValue = envValue === "true" ? true : envValue === "false" ? false : envValue;
    if (envName === "VITE_CONFIG_PORT") {
      envValue = Number(envValue);
    }
    if (envName === "VITE_CONFIG_PROXY:") {
      try {
        envValue = JSON.parse(envValue);
      } catch (e) {
        console.log("VITE_CONFIG_PROXY error");
      }
    }
    envConfig[envName] = envValue;
  }
  return envConfig;
}