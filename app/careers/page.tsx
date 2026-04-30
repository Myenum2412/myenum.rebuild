import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbList } from '@/components/ui/breadcrumb';
import { BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Careers | MyEnum Agency - Join Our Team of Developers & Designers',
  description: 'Join MyEnum Agency - We are hiring talented software developers, web developers, UI/UX designers, digital marketers, and more. Work on exciting projects with a dynamic team. Apply now!',
  keywords: [
    'careers at MyEnum Agency',
    'jobs at MyEnum',
    'MyEnum hiring',
    'software developer jobs',
    'web developer jobs',
    'UI UX designer jobs',
    'digital marketing jobs',
    'frontend developer jobs',
    'backend developer jobs',
    'full stack developer jobs',
    'React developer jobs',
    'Node.js developer jobs',
    'Python developer jobs',
    'mobile app developer jobs',
    'Flutter developer jobs',
    'React Native developer jobs',
    'SEO specialist jobs',
    'social media manager jobs',
    'content writer jobs',
    'graphic designer jobs',
    'video editor jobs',
    'project manager jobs',
    'business development jobs',
    'sales executive jobs',
    'HR executive jobs',
    'internship opportunities',
    'freshers jobs',
    'experienced jobs',
    'work at MyEnum',
    'join MyEnum team',
    'MyEnum careers page',
    'software jobs India',
    'IT jobs Salem',
    'IT jobs Chennai',
    'IT jobs Bangalore',
    'IT jobs Kerala',
    'remote developer jobs',
    'work from home jobs',
    'hybrid work jobs',
  ],
  openGraph: {
    title: 'Careers | MyEnum Agency - Join Our Team',
    description: 'Join MyEnum Agency - We are hiring talented developers, designers, and digital marketers. Apply now!',
    url: 'https://myenum.in/careers',
    siteName: 'MyEnum Agency',
    type: 'website',
    images: [
      {
        url: '/iconc.webp',
        width: 1200,
        height: 630,
        alt: 'Careers at MyEnum Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | MyEnum Agency - Join Our Team',
    description: 'Join MyEnum Agency - We are hiring talented developers, designers, and digital marketers.',
  },
  alternates: {
    canonical: 'https://myenum.in/careers',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jobOpenings = [
  {
    title: 'Senior Full Stack Developer',
    type: 'Full-time',
    location: 'Salem / Remote',
    experience: '5+ years',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    description: 'Lead development of enterprise web applications. Mentor junior developers and architect scalable solutions.',
  },
  {
    title: 'Frontend Developer (React)',
    type: 'Full-time',
    location: 'Salem / Chennai / Remote',
    experience: '2-4 years',
    skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    description: 'Build responsive, performant user interfaces for web applications. Work closely with designers and backend teams.',
  },
  {
    title: 'Backend Developer (Node.js/Python)',
    type: 'Full-time',
    location: 'Salem / Bangalore / Remote',
    experience: '2-5 years',
    skills: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis'],
    description: 'Design and implement RESTful APIs and microservices. Optimize database queries and ensure system reliability.',
  },
  {
    title: 'Mobile App Developer (Flutter/React Native)',
    type: 'Full-time',
    location: 'Remote',
    experience: '2-4 years',
    skills: ['Flutter', 'React Native', 'Dart', 'JavaScript', 'iOS', 'Android'],
    description: 'Develop cross-platform mobile applications. Publish apps to App Store and Google Play.',
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Salem / Remote',
    experience: '2-4 years',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
    description: 'Create intuitive, beautiful user experiences. Conduct user research and design wireframes, prototypes, and final UI designs.',
  },
  {
    title: 'Digital Marketing Specialist',
    type: 'Full-time',
    location: 'Salem / Remote',
    experience: '2-4 years',
    skills: ['SEO', 'Google Ads', 'Facebook Ads', 'Content Marketing', 'Analytics'],
    description: 'Manage SEO campaigns, PPC advertising, and social media marketing. Drive organic and paid traffic growth.',
  },
  {
    title: 'SEO Specialist',
    type: 'Full-time',
    location: 'Remote',
    experience: '2-5 years',
    skills: ['Technical SEO', 'Content Strategy', 'Link Building', 'Keyword Research', 'Google Search Console'],
    description: 'Optimize websites for search engines. Conduct audits, keyword research, and implement on-page and off-page SEO strategies.',
  },
  {
    title: 'Content Writer (Tech)',
    type: 'Full-time / Freelance',
    location: 'Remote',
    experience: '1-3 years',
    skills: ['Technical Writing', 'SEO Writing', 'Blog Writing', 'Copywriting'],
    description: 'Write engaging blog posts, case studies, website copy, and technical documentation for software products.',
  },
  {
    title: 'Graphic Designer',
    type: 'Full-time',
    location: 'Salem / Remote',
    experience: '1-3 years',
    skills: ['Adobe Photoshop', 'Illustrator', 'After Effects', 'Branding', 'Social Media Design'],
    description: 'Create visual content for branding, social media, websites, and marketing campaigns.',
  },
  {
    title: 'DevOps Engineer',
    type: 'Full-time',
    location: 'Remote',
    experience: '3-6 years',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Linux'],
    description: 'Manage cloud infrastructure, CI/CD pipelines, and ensure system reliability and security.',
  },
  {
    title: 'Project Manager',
    type: 'Full-time',
    location: 'Salem / Chennai / Remote',
    experience: '4-7 years',
    skills: ['Agile', 'Scrum', 'Jira', 'Client Communication', 'Team Management'],
    description: 'Manage software development projects from inception to delivery. Coordinate with clients and internal teams.',
  },
  {
    title: 'Business Development Executive',
    type: 'Full-time',
    location: 'Salem / Chennai / Remote',
    experience: '1-3 years',
    skills: ['Lead Generation', 'Client Communication', 'Proposal Writing', 'CRM'],
    description: 'Generate new business leads, prepare proposals, and build client relationships.',
  },
];

const benefits = [
  {
    title: 'Competitive Salary',
    description: 'Industry-leading compensation packages with performance bonuses.',
  },
  {
    title: 'Remote Work Options',
    description: 'Flexible work-from-home and hybrid work arrangements.',
  },
  {
    title: 'Learning Budget',
    description: 'Annual budget for courses, certifications, and conferences.',
  },
  {
    title: 'Health Insurance',
    description: 'Comprehensive health coverage for you and your family.',
  },
  {
    title: 'Paid Time Off',
    description: 'Generous vacation days, sick leave, and holidays.',
  },
  {
    title: 'Dynamic Team Culture',
    description: 'Work with talented, passionate people in a collaborative environment.',
  },
];

export default function CareersPage() {
  return (
    <div className="pt-26 pb-20">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Careers</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl font-bold lg:text-5xl mb-4">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Build amazing software with a passionate team. We are always looking for talented individuals
            who love solving complex problems and creating exceptional digital experiences.
          </p>
        </div>

        {/* Why Join Us */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Why Work at MyEnum?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Job Openings */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Current Openings</h2>
          <div className="grid gap-6">
            {jobOpenings.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    <Button asChild>
                      <a href={`mailto:hr@myenum.in?subject=Application for ${encodeURIComponent(job.title)}`}>
                        Apply Now
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* No matching role? */}
        <section className="mt-16 text-center">
          <Card>
            <CardContent className="py-12">
              <h3 className="text-xl font-semibold mb-4">Don&apos;t see your role?</h3>
              <p className="text-muted-foreground mb-6">
                We are always interested in meeting talented people. Send us your resume and we&apos;ll keep you in mind for future opportunities.
              </p>
              <Button asChild variant="outline">
                <a href="mailto:hr@myenum.in?subject=Career Inquiry">
                  Send Your Resume
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
