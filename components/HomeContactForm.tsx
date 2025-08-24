'use client';

import { useState } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';
import {
  Mail,
  User,
  Phone,
  Loader2,
  Palette,
  Users,
  Cloud,
  ShieldCheck,
} from 'lucide-react';

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters').optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function HomeContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send email');
      }

      toast.success('Thank you for your message! We\'ll get back to you soon.', {
        description: 'Your contact form has been submitted successfully.',
        duration: 5000,
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<ContactFormData> = {};
        error.issues.forEach((issue) => {
          const field = issue.path[0] as keyof ContactFormData;
          fieldErrors[field] = issue.message;
        });
        setErrors(fieldErrors);
        toast.error('Please fix the errors in the form.', {
          description: 'Some fields have validation errors.',
        });
      } else {
        console.error("Email error:", error);
        toast.error('Failed to send message. Please try again.', {
          description: error instanceof Error ? error.message : 'An error occurred while sending your message.',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden p-4">
      <style jsx>{`
        .contact-btn {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          position: relative;
          overflow: hidden;
        }
        .contact-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s;
        }
        .contact-btn:hover::before {
          left: 100%;
        }
      `}</style>
      <div className="z-10 w-full max-w-6xl">
        <div className="bg-secondary/50 overflow-hidden rounded-[40px] shadow-2xl">
          <div className="grid min-h-[700px] lg:grid-cols-2">
            
            {/* Left Side */}
            <div className="brand-side relative m-4 rounded-3xl bg-[url('https://cdn.midjourney.com/299f94f9-ecb9-4b26-bead-010b8d8b01d9/0_0.webp?w=800&q=80')] bg-cover p-12 text-white">
              <div>
                <div className="mb-12 text-lg font-semibold uppercase">
                  MyEnum Agency
                </div>
                <h1 className="mb-4 text-6xl font-medium">
                  Build. Market. Grow.
                </h1>
                <p className="mb-12 text-xl opacity-80">
                  From code to customers, we deliver complete digital solutions.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Users size={16} />,
                      title: 'Software Development',
                      desc: 'Custom business software built to scale and streamline your operations.',
                    },
                    {
                      icon: <Cloud size={16} />,
                      title: 'Website Development',
                      desc: 'Modern, responsive, and secure websites tailored to your business needs.',
                    },
                    {
                      icon: <Palette size={16} />,
                      title: 'Digital Marketing',
                      desc: 'Smart strategies to boost your online presence and generate leads.',
                    },
                    {
                      icon: <ShieldCheck size={16} />,
                      title: 'SEO & Growth',
                      desc: 'Optimize, rank, and grow with SEO-driven strategies for long-term success.',
                    },
                  ].map(({ icon, title, desc }, i) => (
                    <div
                      key={i}
                      className="feature-item animate-fadeInUp flex items-center"
                      style={{ animationDelay: `${0.2 * (i + 1)}s` }}
                    >
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm">
                        {icon}
                      </div>
                      <div>
                        <div className="font-semibold">{title}</div>
                        <div className="text-sm opacity-70">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col justify-center p-12">
              <div className="mx-auto w-full max-w-md">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-light uppercase">
                    Get in touch
                  </h2>
                  <p className="mt-2 text-sm text-stone-600">
                    Let’s discuss how our Software, Websites, and Marketing solutions can grow your business.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium uppercase"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`border-border bg-input block w-full rounded-lg border py-3 pr-3 pl-10 text-sm ${
                          errors.name ? 'border-red-500 focus:border-red-500' : ''
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium uppercase"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`border-border bg-input block w-full rounded-lg border py-3 pr-3 pl-10 text-sm ${
                          errors.email ? 'border-red-500 focus:border-red-500' : ''
                        }`}
                        placeholder="Enter your email"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium uppercase"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`border-border bg-input block w-full rounded-lg border py-3 pr-3 pl-10 text-sm ${
                          errors.phone ? 'border-red-500 focus:border-red-500' : ''
                        }`}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium uppercase"
                    >
                      Message | Anything on your mind
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={4}
                      className={`border-border bg-input block w-full rounded-lg border py-3 px-3 text-sm ${
                        errors.message ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      placeholder="Tell us about your project or inquiry..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={` bg-primary w-full rounded-lg py-3 text-sm font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
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
