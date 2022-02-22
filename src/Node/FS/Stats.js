"use strict";

import util from "util";

export const showStatsObj = util.inspect;

export function statsMethod(m, s) {
  return s[m]();
}
