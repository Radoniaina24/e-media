type Files = {
  _id: string;
  url: string;
  publicId: string;
};
type Class = {
  _id: string;
  level: string;
};

export default interface Student {
  _id: string;
  last_name: string;
  first_name: string;
  date_of_birth: string;
  current_address: string;
  phone_number: string;
  email: string;
  classe: any | Class;
  course: any | Class;
  profilePhoto: any; //Files | string;
  last_degree: any; // Files | string;
  residence_certificate: any; // Files | string;
  transcript: any; // Files | string;
}
