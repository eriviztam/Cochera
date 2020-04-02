import React from 'react'
	import { Calendarizacion } from './Components/Calendarizacion'
	import './App.css'
	 
	function App() {
	  return (
	    <div className="App">
	      <div className="members">
	        <h1>Proyecto: <b> Creación de Sotfware para controlar el acceso a la cochera desde un móvil
 </b></h1>
	        <span>Product Owner: <b>Erika Vizcarra</b></span>
	        <span>Scrum Master: <b>Armando Lara</b></span>
	        <span>Desarrollador: <b>Erika Vizcarra</b></span>
	        <span className="taskStatus">
	          <div className="completedStatus"></div>
	          <span>Completado</span>
	        </span>
	        <span className="taskStatus">
	          <div className="uncompletedStatus"></div>
	          <span>Incompleto</span>
	        </span>
	      </div>
	      <Calendarizacion />
	    </div>
	  )
	}


export default App;
