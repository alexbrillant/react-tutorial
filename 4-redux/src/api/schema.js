import { schema } from 'normalizr';

export const user = new schema.Entity('users');

export const commit = new schema.Entity(
  'commits',
  {
    author: user,
    committer: user
  },
  { idAttribute: 'sha' }
);

export const label = new schema.Entity('labels');

export const milestone = new schema.Entity('milestones', {
  creator: user
});

export const issue = new schema.Entity('issues', {
  assignee: user,
  assignees: [user],
  labels: [label],
  milestone,
  user
});

export const pullRequest = new schema.Entity('pullRequests', {
  assignee: user,
  assignees: [user],
  labels: [label],
  milestone,
  user
});

export const issueOrPullRequest = new schema.Array(
  {
    issues: issue,
    pullRequests: pullRequest
  },
  (entity) => (entity.pull_request ? 'pullRequests' : 'issues')
);
