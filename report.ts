import * as reporter from "multiple-cucumber-html-reporter";

reporter.generate({
  jsonDir: "./reports/cucumber-report",

  reportPath: "./reports/html-report",

  pageTitle: "Automation Report",

  reportName: "Playwright Cucumber Report",

  displayDuration: true,

  metadata: {
    browser: {
      name: "chrome",
      version: "latest"
    },

    device: "Local Machine",

    platform: {
      name: "Windows",
      version: "10"
    }
  }, 
   
    customData: {
    title: "Execution Info",
    data: [
      { label: "Project", value: "Playwright + Cucumber" },
      { label: "Environment", value: "QA" },
      { label: "Execution time", value: new Date().toLocaleString() }

    ]
  }
});