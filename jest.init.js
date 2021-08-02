import 'regenerator-runtime/runtime'
import ReactDOM from "react-dom";

ReactDOM.createPortal = node => node;
const { testing } = process.env;
const TESTING_STORYBOOK = testing === "storybook";

if (TESTING_STORYBOOK) {
  jest.mock('react-transition-group', () => {
    const FakeTransition = jest.fn(({children}) => children)
    const FakeCSSTransition = jest.fn(props =>
      props.in ? <FakeTransition>{props.children}</FakeTransition> : null,
    )
    return {CSSTransition: FakeCSSTransition, Transition: FakeTransition, SwitchTransition: FakeTransition}
  })
}
