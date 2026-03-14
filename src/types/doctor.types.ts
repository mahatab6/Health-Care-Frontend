enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export interface IDoctor {
  id: number;
  name: string;
  email: string;
  profilePhoto?: string;
  contactNumber?: string;
  address?: string;
  registrationNumber: string;
  experience: number;
  gender: Gender;
  appointmentFee: number;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  Specialties: Array<{
    doctorId: string;
    specialtyId: string;
    specialty: {
      id: string;
      title: string;
      icon: string;
    };
  }>;
}
