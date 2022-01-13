import LaunchDarkly from "launchdarkly-node-server-sdk";

const LAUNCH_DARKLY_SDK_KEY = "PUT-A-VALID-KEY-HERE";
let launchDarklyClient;

export const initLaunchDarkly = () => {
  if (LAUNCH_DARKLY_SDK_KEY) {
    launchDarklyClient = LaunchDarkly.init(LAUNCH_DARKLY_SDK_KEY);
    return launchDarklyClient;
  }
};

export function getLaunchDarklyClient() {
  if (!launchDarklyClient) {
    launchDarklyClient = initLaunchDarkly();
  }

  return launchDarklyClient;
}

export const getFlag = async () => {
  await launchDarklyClient.waitForInitialization();
  let value = await launchDarklyClient.variation(
    "test-feature",
    { key: "user@test.com" },
    false
  );
  return value;
};
