import { Footer } from 'flowbite-react'
import './App.css'
import AppRoutes from './AppRoutes'
import Nav from './components/layout/nav/Nav'


function App() {




  return (
    <>
      <div>
        <Nav></Nav>
      </div>
      <div id="body">

        <AppRoutes />
      
      </div>
      <Footer ></Footer>
    </>
  )
}



export default App

/**
 * RouterProvider, as novas telas serão sempre carregadas no provider. Só basta definir as rotas e quais componenetes que elas vão chamar
 */