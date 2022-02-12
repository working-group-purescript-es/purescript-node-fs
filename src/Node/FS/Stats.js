"use strict";

import { inspect } from "util";
export const showStatsObj = inspect;

export function statsMethod(m, s) {
  return s[m]();
}
