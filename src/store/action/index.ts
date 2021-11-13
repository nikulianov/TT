import * as UserActionCreators from './appAction'
import * as PostsActionCreators from './postsAction'

export default {
  ...UserActionCreators,
  ...PostsActionCreators,
}
