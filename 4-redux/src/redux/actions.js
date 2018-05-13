export { getCommits } from './commits';
export { getIssues } from './issues';
export { getLabels } from './labels';
export { getMilestones } from './milestones';
export { getPullRequests } from './pull-requests';
export { setRepo } from './repos';

export const ADD_ENTITIES = 'ADD_ENTITIES';
export const addEntities = (entities) => ({
  type: ADD_ENTITIES,
  payload: entities
});
