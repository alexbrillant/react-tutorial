import { normalize, denormalize } from 'normalizr';

export const getPullRequests = ({ page = 0 } = {}) => (dispatch, getState, { api, schema }) => {
  const state = getState();
  const owner = Repo.selectOwner(state);
  const repo = Repo.selectRepo(state);
  return api.pullRequests
    .getAll({
      owner,
      repo
    })
    .then((response) => {
      const data = normalize(response, [schema.pullRequest]);
      dispatch(addEntities(data.entities));
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getCommits = ({ page = 0 } = {}) => (dispatch, getState, { api, schema }) => {
  const state = getState();
  const owner = Repo.selectOwner(state);
  const repo = Repo.selectRepo(state);
  return api.repos
    .getCommits({
      owner,
      repo
    })
    .then((response) => {
      const data = normalize(response, [schema.commit]);
      dispatch(addEntities(data.entities));
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getIssues = ({ page = 0 } = {}) => (dispatch, getState, { api, schema }) => {
  const state = getState();
  const owner = Repo.selectOwner(state);
  const repo = Repo.selectRepo(state);
  return api.issues
    .getForRepo({
      owner,
      repo
    })
    .then((response) => {
      const data = normalize(response, [schema.issue]);
      dispatch(addEntities(data.entities));
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getLabels = ({ page = 0 } = {}) => (dispatch, getState, { api, schema }) => {
  const state = getState();
  const owner = Repo.selectOwner(state);
  const repo = Repo.selectRepo(state);
  return api.issues
    .getLabels({
      owner,
      repo
    })
    .then((response) => {
      const data = normalize(response, [schema.label]);
      dispatch(addEntities(data.entities));
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getMilestones = ({ page = 0 } = {}) => (dispatch, getState, { api, schema }) => {
  const state = getState();
  const owner = Repo.selectOwner(state);
  const repo = Repo.selectRepo(state);
  return api.issues
    .getMilestones({
      owner,
      repo
    })
    .then((response) => {
      const data = normalize(response, [schema.milestone]);
      dispatch(addEntities(data.entities));
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const selectHydrated = (state, id) => denormalize(id, schema, state);