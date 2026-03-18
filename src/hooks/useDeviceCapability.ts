"use client";

import { useEffect, useState } from "react";

export type DeviceCapability = "high" | "medium" | "low";

export function useDeviceCapability(): DeviceCapability {
  const [capability, setCapability] = useState<DeviceCapability>("high");

  useEffect(() => {
    const cores = navigator.hardwareConcurrency || 2;
    const memory = (navigator as { deviceMemory?: number }).deviceMemory || 4;

    if (cores <= 2 || memory <= 2) {
      setCapability("low");
    } else if (cores <= 4 || memory <= 4) {
      setCapability("medium");
    } else {
      setCapability("high");
    }
  }, []);

  return capability;
}
