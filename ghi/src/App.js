import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Nav from './Nav';

function App({vehiclemodels, manufacturers, automobiles }) {

  let [appointments, setAppointments] = useState([]);
  let [autosales, setAutosales] = useState([]);

  const updateAppointments = () => {
    fetch('http://localhost:8080/service/appointments/')
      .then(response => response.json())
      .then(response => setAppointments(response.appointments))
  }

  useEffect(updateAppointments, []);

  const updateAutosales = () => {
    fetch('http://localhost:8090/sales/autosales/')
    .then(response => response.json()) 
    .then(response => setAutosales(response.autosales))
  }

  useEffect(updateAutosales, []);

  if (!vehiclemodels || !manufacturers || !automobiles || !appointments || !autosales) {
    return null;
  }

  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />

            <Route path="automobiles/">
              <Route path="" element={<AutomobileList automobiles={automobiles} />} />
              <Route path="new/" element={<AutomobileForm models={vehiclemodels.models} />} />
            </Route>

            <Route path="manufacturers/">
              <Route path="" element={<ManufacturerList manufacturers={manufacturers} />} />
              <Route path="new/" element={<ManufacturerForm />} />
            </Route>

            <Route path="models/">
              <Route path='new/' element={<ModelsForm />} />
              <Route path="" element={<ModelsList vehiclemodels={vehiclemodels} />} />
            </Route>

            <Route path='technicians/'>
              <Route path='new/' element={<TechnicianForm />} />
            </Route>

          <Route path="autosales/">
            <Route path="" element={<ListAutoSales autosales={autosales}/>}/>
            <Route path="new/" element={<AddAutoSale/>}/>
            <Route path='history/' element={<SalesRepHistory updateAutosales={updateAutosales} autosales={autosales}/>} />
          </Route>  

            <Route path="customers/">
              <Route path="new/" element={<NewCustomer />} />
            </Route>

            <Route path="salesreps/">
              <Route path="new/" element={<AddSalesRep />} />
            </Route>

            <Route path='appointments/'>
              <Route path='new/' element={<ServiceAppointmentForm />} />
              <Route path='' element={<ServiceAppointmentList updateAppointments={updateAppointments} appointments={appointments} />} />
              <Route path='history/' element={<ServiceHistoryForm updateAppointments={updateAppointments} appointments={appointments} />} />
            </Route>

          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
