'use client';

import { useState, useEffect } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';
import {
  Mail,
  User,
  Loader2,
  MapPin,
  Globe,
} from 'lucide-react';
import { useGeoData } from '@/lib/useGeoData';

const services = [
  'Website Development','E-commerce Development','Software Development',
  'Mobile App Development','Digital Marketing','SEO Optimization',
  'Social Media Management','Content Writing','Graphic Design',
  'UI/UX Design','Web Hosting & Maintenance','Payment Gateway Integration',
  'Custom Development','Other',
];

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email'),
  country: z.string().min(1, 'Select a country'),
  state: z.string().min(1, 'Select a state/region'),
  city: z.string().optional(),
  phoneCountryCode: z.string().min(1, 'Required'),
  phone: z.string().min(7, 'Phone must be at least 7 digits'),
  service: z.string().min(1, 'Select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function HomeContactForm() {
  const {
    countries, states, cities,
    loadingCountries, loadingStates, loadingCities,
    fetchStates, fetchCities,
  } = useGeoData();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '', email: '', country: '', state: '', city: '',
    phoneCountryCode: '+91', phone: '', service: '', message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (countries.length > 0) {
      setFormData(prev => {
        if (prev.country) return prev;
        const india = countries.find(c => c.name === 'India');
        if (india) {
          fetchStates(india.name);
          return { ...prev, country: india.name, phoneCountryCode: india.callingCode || '+91' };
        }
        return prev;
      });
    }
  }, [countries, fetchStates]);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      if (field === 'country') {
        updated.state = '';
        updated.city = '';
        const country = countries.find(c => c.name === value);
        if (country) updated.phoneCountryCode = country.callingCode;
        fetchStates(value);
      }
      if (field === 'state') {
        updated.city = '';
        fetchCities(updated.country, value);
      }
      return updated;
    });
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validatedData),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Failed to send');

      toast.success('Message sent! We\'ll get back to you soon.', {
        description: 'Form submitted successfully.', duration: 5000,
      });

      const india = countries.find(c => c.name === 'India');
      setFormData({
        name: '', email: '', country: india?.name || '', state: '', city: '',
        phoneCountryCode: india?.callingCode || '+91', phone: '',
        service: '', message: '',
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.issues.forEach((issue) => {
          const field = issue.path[0] as keyof ContactFormData;
          fieldErrors[field] = issue.message;
        });
        setErrors(fieldErrors);
        toast.error('Fix form errors.');
      } else {
        console.error('Email error:', error);
        toast.error('Failed to send.', {
          description: error instanceof Error ? error.message : 'Unknown error',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden p-4">
      <div className="z-10 w-full max-w-6xl">
        <div className="bg-secondary/50 overflow-hidden rounded-[40px] shadow-2xl">
          <div className="grid min-h-[700px] lg:grid-cols-2">

            {/* Left Side */}
            <div className="relative m-4 rounded-3xl bg-[url('https://cdn.midjourney.com/299f94f9-ecb9-4b26-bead-010b8d8b01d9/0_0.webp?w=800&q=80')] bg-cover p-12 text-white">
              <div>
                <div className="mb-12 text-lg font-semibold uppercase">MyEnum Agency</div>
                <h1 className="mb-4 text-6xl font-medium">Build. Market. Grow.</h1>
                <p className="mb-12 text-xl opacity-80">From code to customers, we deliver complete digital solutions.</p>
              </div>
            </div>

            {/* Right Side — Form */}
            <div className="flex flex-col justify-center p-8 md:p-12 max-h-[90vh] overflow-y-auto">
              <div className="mx-auto w-full max-w-md">
                <div className="mb-6 text-center">
                  <h2 className="text-3xl font-light uppercase">Get in touch</h2>
                  <p className="mt-2 text-sm text-stone-600">Let&apos;s discuss how we can grow your business.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="hc-name" className="mb-1 block text-xs font-medium uppercase">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input id="hc-name" type="text" value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className={`block w-full rounded-lg border bg-input py-2.5 pr-3 pl-10 text-sm ${errors.name ? 'border-red-500' : 'border-border'}`}
                          placeholder="Full name" />
                      </div>
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="hc-email" className="mb-1 block text-xs font-medium uppercase">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input id="hc-email" type="email" value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`block w-full rounded-lg border bg-input py-2.5 pr-3 pl-10 text-sm ${errors.email ? 'border-red-500' : 'border-border'}`}
                          placeholder="Email" />
                      </div>
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Country & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="hc-country" className="mb-1 block text-xs font-medium uppercase">Country</label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                        <select id="hc-country" value={formData.country}
                          onChange={(e) => handleInputChange('country', e.target.value)}
                          disabled={loadingCountries}
                          className="flex h-10 w-full rounded-md border border-input bg-input pl-10 pr-3 py-1 text-sm">
                          <option value="">{loadingCountries ? 'Loading...' : 'Country'}</option>
                          {countries.map(c => <option key={c.code} value={c.name}>{c.flag} {c.name}</option>)}
                        </select>
                      </div>
                      {errors.country && <p className="mt-1 text-xs text-red-500">{errors.country}</p>}
                    </div>
                    <div>
                      <label htmlFor="hc-phone" className="mb-1 block text-xs font-medium uppercase">Mobile</label>
                      <div className="flex gap-2">
                        <input id="hc-phone-code" type="text" value={formData.phoneCountryCode}
                          onChange={(e) => handleInputChange('phoneCountryCode', e.target.value)}
                          className="w-20 shrink-0 rounded-lg border border-border bg-input py-2.5 px-2 text-sm text-center"
                          placeholder="+91" />
                        <input id="hc-phone" type="tel" value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className={`flex-1 rounded-lg border bg-input py-2.5 px-3 text-sm ${errors.phone ? 'border-red-500' : 'border-border'}`}
                          placeholder="Mobile number" />
                      </div>
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* State & City */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="hc-state" className="mb-1 block text-xs font-medium uppercase">State</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none z-10" />
                        <select id="hc-state" value={formData.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                          disabled={!formData.country || loadingStates}
                          className={`flex h-10 w-full rounded-md border bg-input pl-10 pr-3 py-1 text-sm ${errors.state ? 'border-red-500' : 'border-border'}`}>
                          <option value="">{loadingStates ? 'Loading...' : !formData.country ? 'Select country' : 'State'}</option>
                          {states.map(s => <option key={s.stateCode} value={s.name}>{s.name}</option>)}
                        </select>
                      </div>
                      {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state}</p>}
                    </div>
                    <div>
                      <label htmlFor="hc-city" className="mb-1 block text-xs font-medium uppercase">City</label>
                      <select id="hc-city" value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        disabled={!formData.state || loadingCities}
                        className="flex h-10 w-full rounded-md border border-input bg-input px-3 py-1 text-sm">
                        <option value="">{loadingCities ? 'Loading...' : !formData.state ? 'Select state' : 'City'}</option>
                        {cities.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="hc-service" className="mb-1 block text-xs font-medium uppercase">Service</label>
                    <select id="hc-service" value={formData.service}
                      onChange={(e) => handleInputChange('service', e.target.value)}
                      className={`flex h-10 w-full rounded-md border bg-input px-3 py-1 text-sm ${errors.service ? 'border-red-500' : 'border-border'}`}>
                      <option value="">Select service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="hc-message" className="mb-1 block text-xs font-medium uppercase">Message</label>
                    <textarea id="hc-message" value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={3}
                      className={`block w-full rounded-lg border bg-input py-2.5 px-3 text-sm ${errors.message ? 'border-red-500' : 'border-border'}`}
                      placeholder="Tell us about your project..." />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <button type="submit" disabled={loading}
                    className="bg-primary w-full rounded-lg py-2.5 text-sm font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed">
                    {loading ? (
                      <span className="flex items-center justify-center gap-2"><Loader2 className="h-4 w-4 animate-spin" />Sending...</span>
                    ) : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
