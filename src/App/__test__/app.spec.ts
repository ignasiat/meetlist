import ReactDOM from 'react-dom';
import App from '..';

describe('test ReactDOM.render', () => {
  const originalRender = ReactDOM.render;
  const originalGetElement = global.document.getElementById;
  beforeEach(() => {
    global.document.getElementById = () => null;
    ReactDOM.render = jest.fn();
  });
  afterAll(() => {
    global.document.getElementById = originalGetElement;
    ReactDOM.render = originalRender;
  });
  it('should call ReactDOM.render', () => {
    App();
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});
