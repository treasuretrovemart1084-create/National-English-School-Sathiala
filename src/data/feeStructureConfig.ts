/**
 * National English School Sathiala - Fee Structure Configuration
 * 
 * NOTE: These figures were transcribed from an official school document photograph
 * and must be confirmed by the school administrator before being finalized.
 * All amounts are in Pakistani Rupees (PKR).
 * 
 * Config is structured clearly so amounts, applicable classes, and notes
 * can be updated easily by administration.
 */

export interface SchoolFeeItem {
  id: string;
  feeType: string;
  applicableClasses: string;
  amountPKR: number;
  formattedAmount: string;
  paymentFrequency: string;
  notes: string;
  isConfirmedFrequency: boolean;
  isNonRefundable: boolean;
  category: 'monthly' | 'admission' | 'annual' | 'transport' | 'prospectus';
  accentColor: 'blue' | 'green' | 'yellow' | 'red';
}

export const SCHOOL_CONTACT_INFO = {
  schoolName: "National English School Sathiala",
  shortName: "NES Sathiala",
  motto: "Your Future Begins Here",
  principalName: "Sir Abdul Salam",
  principalTitle: "Principal",
  email: "infones.scl@gmail.com",
  phonePrimary: "0346-6206624",
  phoneSecondary: "0310-7777265",
  address: "Sathiala, District Narowal, Punjab, Pakistan",
  fullAddress: "National English School, Sathiala, District Narowal, Punjab, Pakistan",
  statusNotice: "These fee figures were transcribed from an official school document photograph and must be confirmed by the school administrator before being displayed publicly."
};

export const SCHOOL_FEE_STRUCTURE: SchoolFeeItem[] = [
  {
    id: "monthly-pg-class-2",
    feeType: "Monthly Tuition Fee",
    applicableClasses: "Playgroup to Class Two",
    amountPKR: 1400,
    formattedAmount: "PKR 1,400",
    paymentFrequency: "Monthly",
    notes: "Regular tuition fee for early childhood & lower primary grades (Playgroup, Nursery, Prep, Class 1, Class 2)",
    isConfirmedFrequency: true,
    isNonRefundable: false,
    category: "monthly",
    accentColor: "green"
  },
  {
    id: "monthly-class-3-to-6",
    feeType: "Monthly Tuition Fee",
    applicableClasses: "Classes Three to Six",
    amountPKR: 1600,
    formattedAmount: "PKR 1,600",
    paymentFrequency: "Monthly",
    notes: "Regular tuition fee for primary & lower middle grades (Class 3, Class 4, Class 5, Class 6)",
    isConfirmedFrequency: true,
    isNonRefundable: false,
    category: "monthly",
    accentColor: "green"
  },
  {
    id: "monthly-class-7-to-10",
    feeType: "Monthly Tuition Fee",
    applicableClasses: "Classes Seven to Ten",
    amountPKR: 2000,
    formattedAmount: "PKR 2,000",
    paymentFrequency: "Monthly",
    notes: "Regular tuition fee for middle & secondary matric grades (Class 7, Class 8, Class 9, Class 10)",
    isConfirmedFrequency: true,
    isNonRefundable: false,
    category: "monthly",
    accentColor: "green"
  },
  {
    id: "admission-fee",
    feeType: "Admission Fee",
    applicableClasses: "All New Admissions",
    amountPKR: 2000,
    formattedAmount: "PKR 2,000",
    paymentFrequency: "One time",
    notes: "One time and non-refundable",
    isConfirmedFrequency: true,
    isNonRefundable: true,
    category: "admission",
    accentColor: "red"
  },
  {
    id: "annual-subscription",
    feeType: "Annual Subscription Charges",
    applicableClasses: "All Classes",
    amountPKR: 2000,
    formattedAmount: "PKR 2,000",
    paymentFrequency: "Annual",
    notes: "Non-refundable annual charges",
    isConfirmedFrequency: true,
    isNonRefundable: true,
    category: "annual",
    accentColor: "red"
  },
  {
    id: "transport-fee",
    feeType: "Transport Fee",
    applicableClasses: "Students using school transport",
    amountPKR: 1600,
    formattedAmount: "PKR 1,600",
    paymentFrequency: "To be confirmed by administration",
    notes: "Billing frequency (monthly or per term) is awaiting confirmation from school administrator",
    isConfirmedFrequency: false,
    isNonRefundable: false,
    category: "transport",
    accentColor: "yellow"
  },
  {
    id: "prospectus-fee",
    feeType: "Prospectus Fee",
    applicableClasses: "Prospective Students & New Applicants",
    amountPKR: 200,
    formattedAmount: "PKR 200",
    paymentFrequency: "One time",
    notes: "Payable upon receiving the official admission prospectus",
    isConfirmedFrequency: true,
    isNonRefundable: true,
    category: "prospectus",
    accentColor: "blue"
  }
];
