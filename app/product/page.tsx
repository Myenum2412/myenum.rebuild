import type { Metadata } from "next";
import React from "react";
import Footer from "@/components/footer";
import { Iphone15Pro } from "@/components/ui/iphone-15-pro";
import { CheckCircle, Users, FileText, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "The Doctor Pro - Best Clinic Management Software in India",
  description:
    "The Doctor Pro helps clinics manage patients, appointments, prescriptions, and reports efficiently. All-in-one clinic management software trusted across India.",
  keywords: [
    "doctorpro",
  "doctor software",
  "doctor management system",
  "doctor appointment system",
  "doctors near me",
  "doctor appointment",
  "clinic management software",
  "medical software companies",
  "EMR software",
  "telehealth doctor",
  "doctor booking online",
  "hospital management system",
  "primary doctor",
  "best doctor near me",
  "doctor clinic near me",
  "general physician near me",
  "specialist doctor near me",
  "doctor appointment near me",
  "skin specialist doctor near me",
  "ENT doctor near me",
  "pediatrician near me",
  "cardiologist near me",
  "orthopedic doctor near me",
  "doctor appointment app",
  "doctor consultation booking software",
  
  // Brand
  "Doctor Pro",
  "Doctor Pro software India",
  "Doctor Pro hospital software",
  "Doctor Pro clinic management system",

  // General India-wide keywords
  "doctor management software India",
  "patient management system India",
  "hospital management software India",
  "clinic management software India",
  "healthcare management system India",
  "medical software India",
  "doctor appointment software India",
  "hospital billing software India",
  "patient records management India",
  "electronic medical records software India",
  "best doctor software India",
  "best hospital ERP software India",
  "top hospital software India",
  "AI hospital management software India",
  "cloud-based clinic management software",
  "online patient booking system India",
  "digital healthcare platform India",
  "telemedicine software India",
  "multi-speciality hospital management software",

  // State Specific
  "best doctor software in Tamil Nadu",
  "best hospital software in Kerala",
  "healthcare management system Karnataka",
  "medical software Maharashtra",
  "doctor appointment software Delhi",
  "hospital billing software Gujarat",
  "patient records management Rajasthan",
  "clinic management Punjab",
  "hospital system West Bengal",
  "doctor software Uttar Pradesh",
  "hospital management software Andhra Pradesh",
  "clinic management Telangana",
  "doctor software Madhya Pradesh",
  "medical billing software Bihar",
  "patient management Odisha",
  "healthcare software Haryana",
  "doctor appointment system Assam",
  "hospital billing Jharkhand",
  "clinic software Chhattisgarh",
  "doctor management Himachal Pradesh",
  "hospital software Uttarakhand",
  "best healthcare system Goa",
  "medical records software Tripura",
  "doctor management software Manipur",
  "hospital system Meghalaya",
  "clinic software Mizoram",
  "healthcare solution Nagaland",
  "doctor appointment Arunachal Pradesh",
  "hospital billing software Sikkim",
  "doctor software Chandigarh",
  "clinic management Delhi NCR",
  "hospital management Puducherry",

  // City-Level Keywords (high traffic)
  "hospital management software Chennai",
  "clinic management Bangalore",
  "doctor software Hyderabad",
  "best hospital software Mumbai",
  "patient management system Pune",
  "doctor appointment software Kolkata",
  "hospital billing software Ahmedabad",
  "medical software Jaipur",
  "doctor management Lucknow",
  "clinic management system Bhopal",
  "hospital ERP software Coimbatore",
  "healthcare software Kochi",
  "doctor management software Patna",
  "patient management Ranchi",
  "clinic software Surat",
  "hospital system Indore",
  "doctor appointment software Noida",
  "hospital billing software Chandigarh",
  "best clinic software Trivandrum",
  "doctor ERP software Nagpur",

  // Specialty Keywords
  "dental clinic management software India",
  "gynecology hospital software India",
  "orthopedic doctor software India",
  "pediatric clinic software India",
  "eye hospital management software India",
  "ENT clinic management system India",
  "cardiology hospital software India",
  "dermatology clinic software India",
  "urology hospital management software India",
  "neuro hospital software India",
  "ayurveda hospital management software India",
  "homeopathy clinic software India",
  "physiotherapy clinic management software India",
  "multi-speciality doctor software India",
  "oncology hospital management software India",

  // Feature-specific Keywords
  "doctor billing software India",
  "hospital pharmacy management software India",
  "doctor software with telemedicine support",
  "hospital lab management software India",
  "patient appointment booking software India",
  "doctor reporting software India",
  "cloud doctor software India",
  "secure patient data software India",
  "multi-branch hospital software India",
  "integrated healthcare management software India",
  "hospital accounting software India",
  "AI-powered clinic management India",
  "doctor-patient communication software India",
  "hospital workflow automation India",
  "doctor scheduling software India",
  "hospital staff management software India",
  "doctor dashboard software India",
  "patient follow-up system India",
  "hospital discharge summary software India",

  // Generic High-Search Keywords
  "best hospital software providers India",
  "top clinic management system India",
  "affordable doctor software India",
  "custom hospital software India",
  "enterprise healthcare management software India",
  "all-in-one doctor software India",
  "paperless hospital system India",
  "secure healthcare software India",
  "modern hospital ERP India",
  "future-ready healthcare management software India",

  // 🔹 Tamil Nadu – General
  "hospital management software Tamil Nadu",
  "clinic management system Tamil Nadu",
  "doctor management software Tamil Nadu",
  "patient management system Tamil Nadu",
  "best hospital software Tamil Nadu",
  "doctor appointment software Tamil Nadu",
  "hospital billing software Tamil Nadu",
  "healthcare software Tamil Nadu",
  "medical records software Tamil Nadu",
  "digital healthcare platform Tamil Nadu",

  // 🔹 Tamil Nadu – City Specific
  "hospital management software Chennai",
  "clinic management system Chennai",
  "doctor software Chennai",
  "best hospital ERP software Chennai",
  "patient management software Chennai",
  "hospital billing software Coimbatore",
  "doctor appointment booking Coimbatore",
  "clinic management software Madurai",
  "hospital ERP software Tiruchirappalli",
  "doctor management Salem",
  "clinic management Tirunelveli",
  "best hospital software Erode",
  "doctor software Vellore",
  "hospital management Kanchipuram",
  "clinic software Thanjavur",
  "doctor appointment system Tuticorin",
  "patient management system Dindigul",

  // 🔹 Kerala – General
  "hospital management software Kerala",
  "clinic management system Kerala",
  "doctor software Kerala",
  "best hospital ERP software Kerala",
  "healthcare software Kerala",
  "medical records system Kerala",
  "hospital billing software Kerala",
  "patient management software Kerala",
  "digital doctor software Kerala",
  "AI hospital software Kerala",

  // 🔹 Kerala – City Specific
  "hospital management software Kochi",
  "clinic management system Kochi",
  "doctor appointment booking Kochi",
  "hospital billing software Trivandrum",
  "clinic management software Thiruvananthapuram",
  "doctor software Kozhikode",
  "hospital ERP software Thrissur",
  "patient management system Kollam",
  "best hospital software Kannur",
  "clinic software Kottayam",
  "doctor appointment software Alappuzha",
  "hospital billing software Palakkad",
  "healthcare management software Malappuram",
  "doctor ERP software Pathanamthitta",
  "clinic management system Wayanad",
  "hospital management software Idukki",
  "patient records system Kasaragod",

  // 🔹 Tamil Nadu + Kerala Specialty (high intent)
  "dental clinic software Tamil Nadu",
  "dental clinic software Kerala",
  "gynecology hospital software Tamil Nadu",
  "gynecology hospital software Kerala",
  "orthopedic hospital software Tamil Nadu",
  "orthopedic hospital software Kerala",
  "eye hospital software Tamil Nadu",
  "eye hospital software Kerala",
  "ayurveda hospital software Kerala",
  "homeopathy clinic software Tamil Nadu",
  "multi-speciality hospital software Tamil Nadu",
  "multi-speciality hospital software Kerala",

    "doctor management software USA",
  "hospital management system USA",
  "clinic management software USA",
  "best doctor software New York",
  "doctor appointment booking software USA",
  "medical practice management software USA",

  "doctor software Canada",
  "hospital management software Canada",
  "clinic management software Toronto",
  "patient management system Canada",
  "doctor appointment booking software Canada",
  "best doctor software Vancouver",

  "doctor software UK",
  "hospital management software UK",
  "clinic management software London",
  "doctor appointment booking software UK",
  "medical practice management software UK",
  "best hospital management system Manchester",

  "doctor software Australia",
  "hospital management software Australia",
  "clinic management software Sydney",
  "best doctor software Melbourne",
  "patient management system Australia",
  "doctor appointment software Brisbane",

  "doctor software UAE",
  "hospital management system Dubai",
  "clinic management software UAE",
  "doctor appointment booking software UAE",
  "medical practice software Abu Dhabi",

  "doctor software Saudi Arabia",
  "hospital management system Riyadh",
  "clinic management software Jeddah",
  "doctor appointment booking software Saudi Arabia",
  "best doctor software Dammam",

  "doctor software Qatar",
  "hospital management system Doha",
  "clinic management software Qatar",
  "doctor appointment booking software Qatar",

  "doctor software Singapore",
  "hospital management software Singapore",
  "clinic management software Singapore",
  "doctor appointment booking software Singapore",

  "doctor software Malaysia",
  "hospital management system Malaysia",
  "clinic management software Kuala Lumpur",
  "doctor appointment booking software Malaysia",

  "doctor software South Africa",
  "hospital management software South Africa",
  "clinic management software Cape Town",
  "doctor appointment booking software Johannesburg",

  "doctor software Nigeria",
  "hospital management system Lagos",
  "clinic management software Abuja",
  "doctor appointment booking software Nigeria",

  "doctor software Kenya",
  "hospital management system Nairobi",
  "clinic management software Kenya",
  "doctor appointment booking software Kenya",

  "doctor software Germany",
  "hospital management software Germany",
  "clinic management software Berlin",
  "doctor appointment booking software Germany",

  "doctor software France",
  "hospital management system France",
  "clinic management software Paris",
  "doctor appointment booking software France",

  "doctor software Italy",
  "hospital management system Italy",
  "clinic management software Rome",
  "doctor appointment booking software Italy",

  "doctor software Spain",
  "hospital management system Spain",
  "clinic management software Madrid",
  "doctor appointment booking software Spain",

  "doctor software Philippines",
  "hospital management system Philippines",
  "clinic management software Manila",
  "doctor appointment booking software Philippines",

  "doctor software Indonesia",
  "hospital management system Indonesia",
  "clinic management software Jakarta",
  "doctor appointment booking software Indonesia",

  "doctor software Bangladesh",
  "hospital management software Bangladesh",
  "clinic management software Dhaka",
  "doctor appointment booking software Bangladesh",

  "doctor software Sri Lanka",
  "hospital management software Colombo",
  "clinic management software Sri Lanka",
  "doctor appointment booking software Sri Lanka",

  "doctor software Pakistan",
  "hospital management system Karachi",
  "clinic management software Lahore",
  "doctor appointment booking software Pakistan",

  "doctor software Brazil",
  "hospital management software Brazil",
  "clinic management software São Paulo",
  "doctor appointment booking software Rio de Janeiro",

  "doctor software Mexico",
  "hospital management system Mexico",
  "clinic management software Mexico City",
  "doctor appointment booking software Mexico",

  "doctor software Turkey",
  "hospital management system Turkey",
  "clinic management software Istanbul",
  "doctor appointment booking software Turkey",

  "doctor software Egypt",
  "hospital management system Egypt",
  "clinic management software Cairo",
  "doctor appointment booking software Egypt",

  // perpexlity pro 
  "doctor project management",
"medical project management",
"healthcare project system",
"doctor appointment management",
"doctor scheduling software",
"hospital project management",
"clinic management system",
"doctor task manager",
"medical staff scheduling",
"doctor patient management",
"healthcare project tracking",
"doctor workflow management",
"medical project planner",
"doctor project tracking",
"doctor office management",
"doctor practice management",
"doctor appointment scheduler",
"doctor time management",
"medical project coordination",
"doctor patient scheduling",
"doctor resource management",
"doctor project software",
"doctor workflow software",
"clinic appointment system",
"doctor patient tracker",
"medical appointment manager",
"doctor project dashboard",
"doctor clinic management",
"medical project tools",
"doctor work planner",
"healthcare project tools",
"doctor project planner",
"doctor scheduling system",
"doctor appointment booking",
"medical practice management",
"doctor project organizer",
"doctor task scheduler",
"doctor appointment tracking",
"doctor patient system",
"healthcare appointment system",
"doctor clinic software",
"doctor time tracker",
"doctor appointment system",
"doctor availability manager",
"medical appointment booking",
"doctor workflow tools",
"medical project organizer",
  ],
  openGraph: {
    title: "The Doctor Pro - Best Clinic Management Software",
    description:
      "Manage patients, appointments, prescriptions, and reports effortlessly with The Doctor Pro.",
    url: "https://www.thedoctorpro.com/og-image.jpg",
    siteName: "The Doctor Pro",
    images: [
      {
        url: "https://www.thedoctorpro.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Doctor Pro - Clinic Management Software",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Doctor Pro - Clinic Management Software",
    description:
      "The Doctor Pro helps clinics manage patients, appointments, prescriptions, and reports efficiently.",
    images: ["https://www.thedoctorpro.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.thedoctorpro.com/",
  },
};

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto pt-30">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
            
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
                Revolutionize Your Clinic with{" "}
                <span className="text-green-500">The Doctor Pro</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#C0C0C0] mb-8 leading-relaxed">
                Manage patients, appointments, prescriptions, and reports effortlessly.
                The Doctor Pro is the all-in-one digital solution to keep your clinic organized,
                save time, and enhance patient care.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="https://www.thedoctorpro.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1E88E5] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#1565C0] transition duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <CheckCircle size={20} /> Get Started Free
                </a>

                <a
                  href="https://calendly.com/myenumam/myenum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-[#1E88E5] text-[#1E88E5] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#1E88E5] hover:text-white transition duration-300 flex items-center justify-center gap-2 shadow-md"
                >
                  <Activity size={20} /> Book a Demo
                </a>
              </div>

              {/* Trusted Companies */}
              <div>
                <p className="text-sm font-medium text-[#C0C0C0] mb-4">
                  Loading...
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
                  {["MyEnum"].map((company, index) => (
                    <span
                      key={index}
                      className="text-sm font-semibold text-black bg-white px-3 py-1 rounded-lg"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* iPhone Component */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <div className="w-64 sm:w-72 md:w-80 relative">
                <Iphone15Pro className="w-full auto" url="https://thedoctorpro.com/" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Key Features of The Doctor Pro
          </h2>
          <p className="text-[#C0C0C0] text-lg sm:text-xl mb-6">
            Everything you need to manage your clinic efficiently in one place.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
          
          <div className="flex flex-col items-center text-center p-8 bg-[#1C1E26] rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg">
            <Users size={40} className="mb-4 text-[#1E88E5]" />
            <h3 className="text-2xl font-bold mb-3 text-white">Patient Management</h3>
            <p className="text-[#C0C0C0]">
              Quickly add, edit, and track patient details. Keep your clinic
              data organized and accessible.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-[#1C1E26] rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg">
            <FileText size={40} className="mb-4 text-[#1E88E5]" />
            <h3 className="text-2xl font-bold mb-3 text-white">Prescription & Medicine</h3>
            <p className="text-[#C0C0C0]">
              Save frequently used prescriptions, manage medicine lists, and
              streamline patient treatment.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-8 bg-[#1C1E26] rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg">
            <Activity size={40} className="mb-4 text-[#1E88E5]" />
            <h3 className="text-2xl font-bold mb-3 text-white">Reports & Analytics</h3>
            <p className="text-[#C0C0C0]">
              Monitor clinic performance with smart dashboards, generate
              reports, and make data-driven decisions.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
