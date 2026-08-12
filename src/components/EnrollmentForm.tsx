import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, ArrowRight, UserCheck, School, FileText, Send } from 'lucide-react';

export const EnrollmentForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    studentFirstName: '',
    studentLastName: '',
    dob: '',
    enteringGrade: 'K',
    currentSchool: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    physicalAddress: '',
    isKenaiResident: true,
    hasSiblings: false,
    siblingNames: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-teal-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-amber-500 text-teal-950 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-serif font-bold text-3xl text-amber-300 mb-3">
          Intent to Enroll Received!
        </h3>
        <p className="text-teal-100 mb-6 text-base leading-relaxed">
          Chin'an (Thank you)! We have logged your application for <span className="font-semibold text-white">{formData.studentFirstName} {formData.studentLastName}</span> for Grade {formData.enteringGrade}.
        </p>
        <div className="bg-teal-950/60 rounded-2xl p-6 text-left mb-8 border border-teal-800 text-sm space-y-2 text-teal-200">
          <p><strong className="text-white">Confirmation ID:</strong> TUL-{Math.floor(100000 + Math.random() * 900000)}</p>
          <p><strong className="text-white">Next Step:</strong> Our Registrar will review your submission and contact you via {formData.parentEmail} regarding student lottery placement and paperwork requirements.</p>
          <p><strong className="text-white">Questions?</strong> Call Principal Kimberly Daniels at (907) 335-2829.</p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setStep(1);
          }}
          className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-teal-950 font-bold rounded-xl transition-all shadow-md"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100">
      {/* Wizard Header Progress */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step === 1 ? 'bg-teal-900 text-white' : 'bg-teal-100 text-teal-900'}`}>
              1
            </span>
            <span className="font-medium text-sm text-slate-700 hidden sm:inline">Student Info</span>
          </div>
          <span className="text-slate-300">&rarr;</span>
          <div className="flex items-center gap-2">
            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step === 2 ? 'bg-teal-900 text-white' : 'bg-teal-100 text-teal-900'}`}>
              2
            </span>
            <span className="font-medium text-sm text-slate-700 hidden sm:inline">Parent Contact</span>
          </div>
          <span className="text-slate-300">&rarr;</span>
          <div className="flex items-center gap-2">
            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step === 3 ? 'bg-teal-900 text-white' : 'bg-teal-100 text-teal-900'}`}>
              3
            </span>
            <span className="font-medium text-sm text-slate-700 hidden sm:inline">Review & Submit</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-teal-900 border-l-4 border-amber-500 pl-3">
              Step 1: Student Information
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Student First Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.studentFirstName}
                  onChange={(e) => setFormData({...formData, studentFirstName: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none text-slate-900"
                  placeholder="e.g. Kahtnu"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Student Last Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.studentLastName}
                  onChange={(e) => setFormData({...formData, studentLastName: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none text-slate-900"
                  placeholder="e.g. Miller"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  required
                  value={formData.dob}
                  onChange={(e) => setFormData({...formData, dob: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Entering Grade Level *
                </label>
                <select
                  value={formData.enteringGrade}
                  onChange={(e) => setFormData({...formData, enteringGrade: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none text-slate-900"
                >
                  <option value="K">Kindergarten (Must be 5 by Sept 1)</option>
                  <option value="1">Grade 1</option>
                  <option value="2">Grade 2</option>
                  <option value="3">Grade 3</option>
                  <option value="4">Grade 4</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Previous School or Preschool Attended (Optional)
              </label>
              <input
                type="text"
                value={formData.currentSchool}
                onChange={(e) => setFormData({...formData, currentSchool: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none text-slate-900"
                placeholder="e.g. Kenai Peninsula Early Childhood Center"
              />
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!formData.studentFirstName || !formData.studentLastName}
                className="px-6 py-3 bg-teal-900 hover:bg-teal-800 disabled:opacity-50 text-white font-bold rounded-xl flex items-center gap-2 transition-all"
              >
                Next: Parent Contact &rarr;
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-teal-900 border-l-4 border-amber-500 pl-3">
              Step 2: Parent / Guardian Contact
            </h4>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Parent / Guardian Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.parentName}
                onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-700 outline-none"
                placeholder="e.g. Sarah Miller"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.parentEmail}
                  onChange={(e) => setFormData({...formData, parentEmail: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-700 outline-none"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.parentPhone}
                  onChange={(e) => setFormData({...formData, parentPhone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-700 outline-none"
                  placeholder="(907) 555-0199"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Physical Address *
              </label>
              <input
                type="text"
                required
                value={formData.physicalAddress}
                onChange={(e) => setFormData({...formData, physicalAddress: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-700 outline-none"
                placeholder="123 Kenai River Rd, Kenai, AK 99611"
              />
            </div>

            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.hasSiblings}
                  onChange={(e) => setFormData({...formData, hasSiblings: e.target.checked})}
                  className="w-4 h-4 rounded text-teal-700 focus:ring-teal-700"
                />
                <span className="font-semibold">Student has a sibling currently enrolled at Tułen Charter School</span>
              </label>
              {formData.hasSiblings && (
                <input
                  type="text"
                  placeholder="Enter sibling name(s) & grade level(s)"
                  value={formData.siblingNames}
                  onChange={(e) => setFormData({...formData, siblingNames: e.target.value})}
                  className="w-full mt-2 px-3 py-2 bg-white rounded-lg border border-amber-300 text-slate-900"
                />
              )}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2.5 text-slate-600 hover:text-slate-900 font-semibold text-sm"
              >
                &larr; Back to Step 1
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                disabled={!formData.parentName || !formData.parentEmail || !formData.parentPhone}
                className="px-6 py-3 bg-teal-900 hover:bg-teal-800 disabled:opacity-50 text-white font-bold rounded-xl transition-all"
              >
                Next: Review Application &rarr;
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-teal-900 border-l-4 border-amber-500 pl-3">
              Step 3: Review & Submit Application
            </h4>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 text-sm text-slate-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs uppercase font-bold text-slate-500 block">Student Name</span>
                  <span className="font-bold text-teal-950 text-base">{formData.studentFirstName} {formData.studentLastName}</span>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-slate-500 block">Entering Grade</span>
                  <span className="font-bold text-teal-950 text-base">Grade {formData.enteringGrade}</span>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-slate-500 block">Parent/Guardian</span>
                  <span className="font-medium text-slate-900">{formData.parentName}</span>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-slate-500 block">Contact Email & Phone</span>
                  <span className="font-medium text-slate-900">{formData.parentEmail} | {formData.parentPhone}</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Additional Comments or Educational Needs (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-700 outline-none"
                placeholder="Let us know if your student requires specific speech, reading support, or dietary accommodations..."
              />
            </div>

            <div className="p-4 bg-teal-50 rounded-xl border border-teal-200 text-xs text-teal-900 leading-relaxed">
              <strong>Notice:</strong> As a public charter school in the Kenai Peninsula Borough School District, Tułen Charter School does not charge tuition. Admission is determined by random public lottery if application count exceeds available seats.
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2.5 text-slate-600 hover:text-slate-900 font-semibold text-sm"
              >
                &larr; Back to Step 2
              </button>
              <button
                type="submit"
                className="px-8 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4" /> Submit Intent to Enroll
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
