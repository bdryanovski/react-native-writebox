/**
 * WriteBox container and functionality
 *
 * To start the view with keyboard already open - set `autoFocus` to be true
 * When setting `inputLimit` a counter will be visible on the right side of the input field
 *
 * onSubmit callback will return <Object> with value field
 *
 * @NOTE fix width/height as on the design
 * @NOTE export styles as theme options
 * @NOTE Middleware must be implemented
 * @NOTE LeftComponent is empty
 * @NOTE more callback handles like (on submit clear input, etc)
 *
 * Example:
 *
 * <WriteBox
 *  onSubmit={ ({ value }) => { console.log('Input value', value) } }
 *  onFocus={ () => { console.log('Typing ....') } }
 *  onBlur={ () => { console.log('Lost focus ....') } }
 *  submitLabel={ 'Send' }
 *  placeholder={ 'Write comment ...' }
 *  inputLimit={ 120 }
 *  autoFocus={ true }
 *  value={ 'Start with this text' }
 *  clearOnSubmit={ <Boolean> }
 *  >
 *  { main content }
 * </WriteBox>
 */
import WriteBox from './WriteboxLayout'
export default WriteBox