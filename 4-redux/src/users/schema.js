import { schema } from '../../../../src';

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