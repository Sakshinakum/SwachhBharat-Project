import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Login from './Login'

import Dashboard from './Dashboard'
import { Routes , Route, Navigate} from 'react-router-dom'
import State from './components/State'
import Language from './components/Language'
import Country from './components/Country'
import User from './User'
import Layout from './Layout'
import AddState from './components/AddState'
import AddLanguage from './components/AddLanguage'
import AddCountry from './components/AddCountry'
import EditState from './components/EditState'
import Editlanguage from './components/Editlanguage'
import Editcountry from './components/Editcountry'

import { useSelector } from 'react-redux'

function App() {
  const [formData, setFormData] = useState([]);
  const { loginStatus } = useSelector((state) => state.login);
  return (
    <>
      <div>
        
        <Routes>
          
          <Route path="/" exact element={<Login />}></Route>
          <Route element={ loginStatus ? <Dashboard/> : <Navigate to={"/"}/>}></Route>
            <Route path='/' exact element={<Layout /> }>
              <Route path="/dashboard" exact element={<Dashboard />}></Route>
              <Route path='/user' exact element={<User />}></Route>
              <Route path='/state' exact element={<State formData={formData} setFormData={setFormData}/>}></Route>
              <Route path='/addstate' exact element={<AddState formData={formData} setFormData={setFormData}/>}></Route>
              <Route path='/editstate' exact element={<EditState formData={formData} setFormData={setFormData}/> }></Route>
              <Route path='/language' exact element={<Language formData={formData} setFormData={setFormData}/>}></Route>
              <Route path='/addlanguage' exact element={<AddLanguage formData={formData} setFormData={setFormData}/>}></Route>
              <Route path='/editlanguage' exact element={<Editlanguage formData={formData} setFormData={setFormData}/>}></Route>
              <Route path='/country' exact element={<Country formData={formData} setFormData={setFormData}/>}></Route>
              <Route path='/addcountry' exact element={<AddCountry formData={formData} setFormData={setFormData}/>}></Route>
              <Route path='/editcountry' exact element={<Editcountry formData={formData} setFormData={setFormData}/>}></Route>  
              
            </Route>
        </Routes> 
       
        
      </div>
      
    </>
  )
}

export default App
