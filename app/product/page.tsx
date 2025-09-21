"use client";

import React from "react";
import Footer from "@/components/footer";
import { Iphone15Pro } from "@/components/ui/iphone-15-pro";
import { CheckCircle, Users, FileText, Activity } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

function Page() {
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
                <span className="text-green-500">Doctor Pro</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#C0C0C0] mb-8 leading-relaxed">
                Manage patients, appointments, prescriptions, and reports
                effortlessly. Doctor Pro is the all-in-one digital solution to
                keep your clinic organized, save time, and enhance patient care.
              </p>

              {/* Buttons */}
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
                  Trusted by hundreds of clinics across India
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
              <div className="w-64 sm:w-72 md:w-80">
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
            Key Features of Doctor Pro
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

export default Page;
