'use client';

import { useState, useEffect } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';
import {
  Mail,
  Phone,
  MapPin,
  Loader2,
  Send,
  Calendar,
  Facebook,
  Instagram,
  Youtube,
  Globe,
  User,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/logos';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useGeoData } from '@/lib/useGeoData';

const services = [
  'Website Development',
  'E-commerce Development',
  'Software Development',
  'Mobile App Development',
  'Digital Marketing',
  'SEO Optimization',
  'Social Media Management',
  'Content Writing',
  'Graphic Design',
  'UI/UX Design',
  'Web Hosting & Maintenance',
  'Payment Gateway Integration',
  'Custom Development',
  'Other',
];

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  country: z.string().min(1, 'Select a country'),
  state: z.string().min(1, 'Select a state/region'),
  city: z.string().optional(),
  phoneCountryCode: z.string().min(1, 'Required'),
  phone: z.string().min(7, 'Phone must be at least 7 digits'),
  service: z.string().min(1, 'Select a service'),
  dateRange: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const DEFAULT_COUNTRY = 'India';

export default function ContactPageForm() {
  const {
    countries, states, cities,
    loadingCountries, loadingStates, loadingCities,
    fetchStates, fetchCities,
  } = useGeoData();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    country: '',
    state: '',
    city: '',
    phoneCountryCode: '+91',
    phone: '',
    service: '',
    dateRange: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [loading, setLoading] = useState(false);

  // Auto-select India on mount
  useEffect(() => {
    if (countries.length > 0) {
      setFormData(prev => {
        if (prev.country) return prev;
        const india = countries.find(c => c.name === DEFAULT_COUNTRY);
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

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
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

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      toast.success('Message sent! We\'ll get back to you soon.', {
        description: 'Your contact form submitted successfully.',
        duration: 5000,
      });

      const india = countries.find(c => c.name === DEFAULT_COUNTRY);
      setFormData({
        name: '', email: '', country: india?.name || '', state: '', city: '',
        phoneCountryCode: india?.callingCode || '+91', phone: '',
        service: '', dateRange: '', message: '',
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
        console.error('Contact form error:', error);
        toast.error('Failed to send.', {
          description: error instanceof Error ? error.message : 'Unknown error',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const selectedCountryData = countries.find(c => c.name === formData.country);

  return (
    <section className="bg-background relative w-full py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left Side — Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Keep in touch with us</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Transform your business with cutting-edge digital solutions. Connect with us to discuss your website development needs, explore our services, and discover how we can help your business grow online. We&apos;re here to turn your vision into reality.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0"><MapPin className="h-5 w-5 text-primary" /></div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Address</h3>
                  <p className="text-muted-foreground text-sm">MyEnum Agency<br />Tamil Nadu, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0"><Phone className="h-5 w-5 text-primary" /></div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Phone</h3>
                  <p className="text-muted-foreground text-sm">
                    <a href="tel:+919042376479" className="hover:text-primary transition-colors text-foreground">+91 90423 76479</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0"><Mail className="h-5 w-5 text-primary" /></div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                  <p className="text-muted-foreground text-sm">
                    <a href="mailto:developer@myenum.in" className="hover:text-primary transition-colors text-foreground">developer@myenum.in</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0"><div className="h-5 w-5 rounded-full bg-primary" /></div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Follow Us</h3>
                  <div className="flex gap-3">
                    <a href="https://wa.me/919042376479" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors" aria-label="WhatsApp"><WhatsAppIcon className="h-5 w-5" /></a>
                    <a href="https://www.facebook.com/p/My-enum-61572140267076/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
                    <a href="https://www.instagram.com/myenum.in/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                    <a href="https://www.youtube.com/@myenum" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side — Form */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Send a Message</h2>
              <p className="text-muted-foreground text-sm">Send us your comments! We value your feedback and look forward to hearing from you.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1 — Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="cp-name" className="mb-2 block text-sm font-medium text-foreground">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="cp-name" type="text" value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter Name"
                      className={cn('pl-10 bg-white text-black dark:bg-white dark:text-black', errors.name && 'border-destructive')} />
                  </div>
                  {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="cp-email" className="mb-2 block text-sm font-medium text-foreground">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="cp-email" type="email" value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter Email"
                      className={cn('pl-10 bg-white text-black dark:bg-white dark:text-black', errors.email && 'border-destructive')} />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
                </div>
              </div>

              {/* Row 2 — Country & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="cp-country" className="mb-2 block text-sm font-medium text-foreground">Country</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <select id="cp-country" value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      disabled={loadingCountries}
                      className={cn('flex h-9 w-full rounded-md border border-input bg-white pl-10 pr-3 py-1 text-sm text-black', errors.country && 'border-destructive')}>
                      <option value="">{loadingCountries ? 'Loading...' : 'Select Country'}</option>
                      {countries.map(c => (
                        <option key={c.code} value={c.name}>{c.flag} {c.name}</option>
                      ))}
                    </select>
                  </div>
                  {errors.country && <p className="mt-1 text-sm text-destructive">{errors.country}</p>}
                </div>
                <div>
                  <label htmlFor="cp-phone" className="mb-2 block text-sm font-medium text-foreground">Mobile Number</label>
                  <div className="flex gap-2">
                    <div className="relative w-28 shrink-0">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                      <Input id="cp-phone-code" type="text" value={formData.phoneCountryCode}
                        onChange={(e) => handleInputChange('phoneCountryCode', e.target.value)}
                        placeholder="+91"
                        className="pl-10 bg-white text-black dark:bg-white dark:text-black text-center" />
                    </div>
                    <Input id="cp-phone" type="tel" value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Mobile number"
                      className={cn('flex-1 bg-white text-black dark:bg-white dark:text-black', errors.phone && 'border-destructive')} />
                  </div>
                  {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone}</p>}
                </div>
              </div>

              {/* Row 3 — State & City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="cp-state" className="mb-2 block text-sm font-medium text-foreground">State / Region</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
                    <select id="cp-state" value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      disabled={!formData.country || loadingStates}
                      className={cn('flex h-9 w-full rounded-md border border-input bg-white pl-10 pr-3 py-1 text-sm text-black', errors.state && 'border-destructive')}>
                      <option value="">{loadingStates ? 'Loading...' : !formData.country ? 'Select country first' : 'Select State'}</option>
                      {states.map(s => (
                        <option key={s.stateCode} value={s.name}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                  {errors.state && <p className="mt-1 text-sm text-destructive">{errors.state}</p>}
                </div>
                <div>
                  <label htmlFor="cp-city" className="mb-2 block text-sm font-medium text-foreground">City / District</label>
                  <select id="cp-city" value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    disabled={!formData.state || loadingCities}
                    className="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-sm text-black">
                    <option value="">{loadingCities ? 'Loading...' : !formData.state ? 'Select state first' : 'Select City'}</option>
                    {cities.map(c => (
                      <option key={c.name} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4 — Service & Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="cp-service" className="mb-2 block text-sm font-medium text-foreground">Service</label>
                  <select id="cp-service" value={formData.service}
                    onChange={(e) => handleInputChange('service', e.target.value)}
                    className={cn('flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-sm text-black', errors.service && 'border-destructive')}>
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <p className="mt-1 text-sm text-destructive">{errors.service}</p>}
                </div>
                <div>
                  <label htmlFor="cp-date" className="mb-2 block text-sm font-medium text-foreground">Preferred Date</label>
                  <div className="relative">
                    <Input id="cp-date" type="date" value={formData.dateRange}
                      onChange={(e) => handleInputChange('dateRange', e.target.value)}
                      className="pr-10 bg-white text-black dark:bg-white dark:text-black" />
                    <Calendar className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="cp-message" className="mb-2 block text-sm font-medium text-foreground">Message</label>
                <textarea id="cp-message" value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4} placeholder="Enter Message"
                  className={cn('flex min-h-[80px] w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-black', errors.message && 'border-destructive')} />
                {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button type="submit" disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:cursor-not-allowed disabled:opacity-50">
                {loading ? (<><Loader2 className="h-4 w-4 animate-spin" />Sending...</>) : (<><Send className="h-4 w-4" />Send Message</>)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
