
import { getAllProjects } from "@/action/project";
import React from "react";
const DashboardPage = async () => {
    const allProjects = await getAllProjects();
    return <div>Dashboard</div>
}
export default DashboardPage;