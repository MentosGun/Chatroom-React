/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Chat from 'src/components/Chat';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  logged: state.logged,
});

// Actions
// const mapDispatchToProps = dispatch => ({
//   actions: {
//     switchView: () => {
//       dispatch(switchView());
//     },
//   },
// });


/*
 * Component
 */
const createContainer = connect(mapStateToProps);
const ChatContainer = createContainer(Chat);


/*
 * Export default
 */
export default ChatContainer;
