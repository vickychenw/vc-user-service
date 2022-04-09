## What does this MR do?

<!-- Briefly describe what this MR is about -->

## Related issues

<!-- Mention the Jira Task(s) this MR closes or is related to -->

## Code Coverage/Unit Test

```
--------------------------------|----------|----------|----------|----------|-------------------|
File                            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------------------------|----------|----------|----------|----------|-------------------|
All files                       |      100 |      100 |      100 |      100 |                   |
 src                            |      100 |      100 |      100 |      100 |                   |
  app.js                        |      100 |      100 |      100 |      100 |                   |
 src/configuration/configserver |      100 |      100 |      100 |      100 |                   |
  load.js                       |      100 |      100 |      100 |      100 |                   |
  value.js                      |      100 |      100 |      100 |      100 |                   |
 src/controllers/axios          |      100 |      100 |      100 |      100 |                   |
  serviceworker.js              |      100 |      100 |      100 |      100 |                   |
--------------------------------|----------|----------|----------|----------|-------------------|

Test Suites: 18 passed, 18 total
Tests:       92 passed, 92 total
Snapshots:   0 total
Time:        3.83s
```

## Snyk Report

```
Please copy and paste your local Snyk Scan report here
```

## Sonar Result

Provide Sonar Qube Result

## Developer Checklist

- [ ] Make sure you include the Code Coverage/Unit Test and it is up to date (min 85% to 95%)
- [ ] Make sure SonarQube result is posted in the discussion
- [ ] Make sure SonarQube has no Major issue and only several acceptable minor
- [ ] Ensure SNYK has been executed with no threats
- [ ] Ensure there is no error in Develop Console
- [ ] If you make use of ConfigServer, make sure you also update the settings from ap-configserver
- [ ] Have you completed testing code change with IE, Safari, Chrome, Firefox and Mobile
- [ ] Readme – make sure it is updated to include basic installation and running instructions, testing instructions and links to any relevant confluence page
- [ ] Make sure you assign this Pull Request to someone
- [ ] Notify someone to review the Pull Request

## Merge Approval Checklist

- [ ] Make sure all SonarQube Major issue has been address
- [ ] Review all SonarQube minor issue and has been address
- [ ] Make sure all discussion has been resolved
- [ ] Make sure review code coverage and unit test result is acceptable
- [ ] Password and Secrets are not checked in
