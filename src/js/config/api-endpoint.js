import Config from './config';

const ApiEndpoint = {
  REGISTER: `/register`,
  LOGIN: `/login`,
  ADD_NEW_STORY: `${Config.BASE_URL}/stories`,
  ADD_NEW_STORY_WITHOUT_AUTH: `${Config.BASE_URL}/stories/guest`,
  GET_ALL_STORIES: `/stories`,
};

export default ApiEndpoint;