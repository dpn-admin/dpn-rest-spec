## Git Workflow

The master branch of our Git repos should always contain stable, release-ready code, with all tests passing.

The dev branch is for development. All tests should pass in the dev branch, though the code is not assumed to be production-ready. You should pull the dev branch before you start adding or changing code, so that you know you are working with the latest commits.

New features and disruptive changes or refactorings should be done in a branch off of dev, and merged back into dev when they are known to be stable and all tests are passing.

You can merge from dev into master when you meet all the following criteria:

* unit and integration tests are passing
* user acceptance tests are complete for the new features you're merging in
* the other developers and managers have no objections to the merge

After merging into master, tag master with a new release number (e.g. v1.14). We should maintain a change log that shows the date and version number of each new release, along with a list of changes and new features.
