"use client";

import AppointmentBarChart from "@/components/shared/AppointmentBarChart";
import AppointmentPieChart from "@/components/shared/AppointmentPieChart";
import StatsCard from "@/components/shared/StatsCard";
import { getDashboardData } from "@/services/dashboard.services";
import { useQuery } from "@tanstack/react-query";

const AdminDashboardContent = () => {
  const { data: adminDashboardData } = useQuery({
    queryKey: ["admin-dashboard-data"],
    queryFn: getDashboardData,
    refetchOnWindowFocus: true,
  });

  const stats = adminDashboardData?.data;
  console.log(stats?.piChartData)
  console.log(stats?.barChartData)
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back, here is what is happening today.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <StatsCard
          title="Revenue"
          value={`$${stats?.totalRevenue?.toLocaleString() || 0}`}
          iconName="DollarSign" // Fixed spelling
          description="+12% from last month"
          className="border-l-4 border-l-green-500"
        />

        <StatsCard
          title="Appointments"
          value={stats?.appointmentCount || 0}
          iconName="CalendarDays"
          description="Total active bookings"
        />

        <StatsCard
          title="Doctors"
          value={stats?.doctorCount || 0}
          iconName="UserSquare"
          description="Verified professionals"
        />

        <StatsCard
          title="Patients"
          value={stats?.patientCount || 0}
          iconName="Users"
          description="Registered users"
        />

        <StatsCard
          title="Total Amin"
          value={stats?.adminCount || 0}
          iconName="User"
          description="Number of total admin"
        />

        <StatsCard
          title="Total Super Admin"
          value={stats?.superAdminCount || 0}
          iconName="User"
          description="Number of total super Admin"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 mt-6">
        <div className="lg:col-span-4">
          <AppointmentBarChart
            data={stats?.barChartData || []}
            title="Appointment Overview"
            description="Monthly appointment volume for the current year"
          />
        </div>
        <div className="lg:col-span-3">
          <AppointmentPieChart
            data={stats?.piChartData || []}
            title="Distribution"
            description="Status breakdown"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardContent;
