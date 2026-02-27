/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getDoctors } from "@/app/(commonLayout)/consultation/_actions";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const DoctorsList = () => {
  const { data } = useQuery({
    queryKey: ["doctors"],
    queryFn: () => getDoctors(),
  });

  console.log(data.data.data);
  return (
    <div>
      doctor list
      {data?.data?.data.map((doctor: any) => {
        return <div key={doctor.id}>{doctor.name}</div>;
      })}
    </div>
  );
};

export default DoctorsList;
