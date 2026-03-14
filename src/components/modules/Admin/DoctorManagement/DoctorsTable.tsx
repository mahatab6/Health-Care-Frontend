"use client";

import DataTable from "@/components/shared/table/DataTable";
import { getDoctors } from "@/services/doctor.services";
import { IDoctor } from "@/types/doctor.types";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
} from "@tanstack/react-table";

const DoctorsTable = () => {
  const doctorsColumns : ColumnDef<IDoctor>[] = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "specialization", header: "Specialization" },
    { accessorKey: "experience", header: "Experience" },
    { accessorKey: "rating", header: "Rating" },
    { accessorKey: "earing", header: "Earing" },
  ];

  const { data: doctorResponse, isLoading } = useQuery({
  queryKey: ["doctors"],
  queryFn: getDoctors,
});

  const doctors = doctorResponse?.data || [];
  
  const handleView = (doctor : IDoctor) => {
    console.log("Doctor view", doctor)
  }
  const handleEdit = (doctor : IDoctor) => {
    console.log("Doctor edit", doctor)
  }
  const handleDetele = (doctor : IDoctor) => {
    console.log("Doctor delete", doctor)
  }

  return (
    <DataTable 
      data={doctors}
      columns={doctorsColumns}
    isLoading={isLoading}
    actions={
      {
        onView: handleView,
        onEdit: handleEdit,
        onDelete: handleDetele
      }
    }
    />
  )
};

export default DoctorsTable;
