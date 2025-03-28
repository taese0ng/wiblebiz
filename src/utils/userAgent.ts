export type UserAgentType = {
  userAgent: string | Record<string, string | number>;
  mobile: boolean;
};

interface FutureNavigator extends Navigator {
  userAgentData: {
    mobile: boolean;
    getHighEntropyValues(fields: Array<string>): Promise<UserAgentType["userAgent"]>;
  };
}

function getLegacyUserAgent(navigator: FutureNavigator): UserAgentType {
  const { userAgent } = navigator;

  return {
    userAgent,
    mobile: /Mobi/g.test(userAgent),
  };
}

export async function getUserAgent(): Promise<UserAgentType> {
  const { navigator } = window;
  const futureNavigator = navigator as FutureNavigator;

  // navigator.userAgentData 표준 스펙이 나오기전 까지 기존 userAgent 사용을 강제함
  if (navigator?.userAgent) {
    return getLegacyUserAgent(futureNavigator);
  }

  try {
    const { userAgentData } = futureNavigator;
    const data = await userAgentData.getHighEntropyValues([
      "platform",
      "platformVersion",
      "architecture",
      "model",
      "uaFullVersion",
    ]);

    return {
      userAgent: data,
      mobile: userAgentData.mobile,
    };
  } catch {
    return getLegacyUserAgent(futureNavigator);
  }
}
