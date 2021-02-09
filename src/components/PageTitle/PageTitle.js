import Aux from '../../hoc/Aux';

const pageTitle = (props) => (
    <Aux>
        <h1>Hello Friend</h1>
        <button onClick={props.changeMode}>Change Mode</button>
    </Aux>
)

export default pageTitle;