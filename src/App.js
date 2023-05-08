import Header from './componentes/Header';
import Search from './componentes/Search';
import Lancamentos from './componentes/Lancamentos';

import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52, #326589);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <Lancamentos />
    </AppContainer>
  );
}

export default App;
