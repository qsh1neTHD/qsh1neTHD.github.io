/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global Office */

console.log("Taskpane.js loaded");

document.getElementById("placeholder_feature_button").onclick = () => {
  console.log("Feature Placeholder button clicked");
  window.location.href = "feature_placeholder/feature_placeholder.html";
}

document.getElementById("pieChart_feature_button").onclick = () => {
  console.log("Feature Pie Chart button clicked");
  window.location.href = "feature_pieChart/feature_pieChart.html";
}

Office.onReady((info) => {
  if (info.host === Office.HostType.Excel) {
    console.log("Excel is ready");
    document.getElementById("app-body").style.display = "flex";

  }
});
