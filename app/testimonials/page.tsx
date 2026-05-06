import SEO from '@/components/SEO';
import { getMergedKeywords } from '@/src/seo/defaultKeywords';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbList } from '@/components/ui/breadcrumb';
import { BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechStart Solutions',
    location: 'Bangalore, India',
    quote: 'MyEnum transformed our vision into a world-class SaaS platform. Their team understood our requirements perfectly and delivered ahead of schedule. The product has already helped us secure $2M in funding.',
    rating: 5,
    project: 'SaaS Platform Development',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Marketing Director, HealthCare UK',
    location: 'London, UK',
    quote: 'Outstanding work on our hospital management system. The team was professional, responsive, and went above and beyond to ensure everything worked flawlessly. Highly recommend!',
    rating: 5,
    project: 'Healthcare Software',
  },
  {
    name: 'Arun Prasath',
    role: 'Founder, RetailHub',
    location: 'Chennai, India',
    quote: 'Our e-commerce sales increased 300% after the website redesign by MyEnum. The new platform is fast, user-friendly, and our customers love the experience.',
    rating: 5,
    project: 'E-commerce Development',
  },
  {
    name: 'Michael Schmidt',
    role: 'CTO, FinanceFlow GmbH',
    location: 'Berlin, Germany',
    quote: 'Exceptional technical expertise and project management. They built our fintech app with security and scalability in mind. Zero downtime since launch.',
    rating: 5,
    project: 'Mobile App Development',
  },
  {
    name: 'Priya Menon',
    role: 'Owner, Ayurveda Wellness',
    location: 'Kochi, Kerala',
    quote: 'MyEnum helped us establish our online presence with a beautiful website and effective SEO. We now rank #1 for local searches and bookings have doubled.',
    rating: 5,
    project: 'Web Design & SEO',
  },
  {
    name: 'David Johnson',
    role: 'Founder, EduTech Global',
    location: 'Dubai, UAE',
    quote: 'Built our entire learning management system from scratch. The platform handles 10,000+ daily users without any issues. Fantastic team to work with!',
    rating: 5,
    project: 'LMS Development',
  },
  {
    name: 'Lakshmi Narayan',
    role: 'Director, AutoParts India',
    location: 'Coimbatore, India',
    quote: 'Our inventory management system streamlined operations across 5 warehouses. Real-time tracking and reporting have saved us countless hours.',
    rating: 5,
    project: 'ERP Development',
  },
  {
    name: 'Emma Thompson',
    role: 'CEO, StyleBrand',
    location: 'Manchester, UK',
    quote: 'The rebranding and website redesign exceeded expectations. Our conversion rate improved by 150% and customer engagement is at an all-time high.',
    rating: 5,
    project: 'Branding & Web Design',
  },
  {
    name: 'Karthik Subramanian',
    role: 'Founder, FoodieApp',
    location: 'Salem, India',
    quote: 'MyEnum developed our food delivery app with seamless payment integration and real-time tracking. We launched in 3 cities within 2 months!',
    rating: 5,
    project: 'Mobile App Development',
  },
  {
    name: 'Thomas Mueller',
    role: 'Managing Director, LogiTrans',
    location: 'Munich, Germany',
    quote: 'Their logistics management software optimized our entire supply chain. Delivery times reduced by 40% and customer satisfaction improved significantly.',
    rating: 5,
    project: 'Logistics Software',
  },
  {
    name: 'Anitha Reddy',
    role: 'Founder, BeautyBox',
    location: 'Hyderabad, India',
    quote: 'SEO and social media marketing services drove incredible results. Our organic traffic grew 500% in 6 months and leads increased exponentially.',
    rating: 5,
    project: 'Digital Marketing',
  },
  {
    name: 'Robert Chen',
    role: 'CTO, DataFlow Systems',
    location: 'Singapore',
    quote: 'Complex data integration project handled expertly. The API architecture they designed processes millions of requests daily with 99.99% uptime.',
    rating: 5,
    project: 'API Development',
  },
];

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Countries Served' },
  { value: '10+', label: 'Years Experience' },
];

<SEO title="Client Testimonials | MyEnum Agency - Reviews from 500+ Happy Clients" description="Read what our clients say about MyEnum Agency. Real reviews from businesses we have helped with software development, web design, mobile apps, and digital marketing. 500+ projects delivered globally." keywords={["MyEnum Agency reviews',","client testimonials',","customer reviews',","client feedback',","MyEnum client reviews',","software company reviews',","web development reviews',","digital marketing reviews',","client success stories',","customer testimonials India',","MyEnum success stories',","client case studies',","happy clients',","5 star reviews',","trusted software company',","verified reviews',","client ratings',","MyEnum ratings',","software development testimonials',","web design testimonials',","mobile app testimonials',","SEO testimonials',","client quotes',","what clients say',","client experience',","project reviews',","service reviews',"]} />
export default function TestimonialsPage() {
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
                <BreadcrumbPage>Testimonials</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl font-bold lg:text-5xl mb-4">What Our Clients Say</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Real feedback from businesses we have helped transform through software development,
            web design, and digital marketing.
          </p>
        </div>

        {/* Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="py-8">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Grid */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col">
                <CardContent className="pt-6 flex-1">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                  <div className="mt-auto flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <span className="text-xs text-muted-foreground">
                      Project: {testimonial.project}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center">
          <Card>
            <CardContent className="py-12">
              <h3 className="text-2xl font-semibold mb-4">Ready to be our next success story?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let us help you build something amazing. Get a free consultation for your project today.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                Start Your Project
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
