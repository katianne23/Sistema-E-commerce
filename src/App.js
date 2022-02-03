import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './componets/store';
import Routes from './routes';
import { Container } from '@material-ui/core/';
import Header from './componets/Header';


const App = () => {
  
  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))
  
  if(localCart !== null) {
    store.dispatch({type: 'CHANGE_CART', localCart})
  }
  
  return(
    <Provider store={store}>
      <Container maxWidth="x2" min-width="800px">
        <Router>
          <Header />
          <Routes />
        </Router>
      </Container> 
    </Provider>
  )
}

export default App;