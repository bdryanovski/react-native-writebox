/**
 * WriteBox container and functionality
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
