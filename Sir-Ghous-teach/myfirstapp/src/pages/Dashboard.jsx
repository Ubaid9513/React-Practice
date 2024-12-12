import React from 'react'
import AppLayout from "../components/AppLayout";
import AppCard from "../components/Card.jsx";

const Dashboard = () => {
  return (
    <AppLayout title = {"SMIT"}>
        <div>
            <AppCard/>
        </div>
    </AppLayout>
  )
}

export default Dashboard;