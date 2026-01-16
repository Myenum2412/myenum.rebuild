export default function StatsSection() {
    return (
        <section className="py-12 md:py-20" style={{ backgroundColor: '#f9f3e5' }}>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl" style={{ color: '#0d1b1a' }}>Myenum Agency in numbers</h2>
                    <p style={{ color: '#5b625d' }}>We&apos;re committed to delivering exceptional digital solutions that help businesses build, market, and grow. Our track record speaks for itself.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0" style={{ borderColor: '#bbccc2' }}>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold" style={{ color: '#40d2c5' }}>500+</div>
                        <p style={{ color: '#124c4a' }}>Projects Delivered</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold" style={{ color: '#3faeb0' }}>200+</div>
                        <p style={{ color: '#124c4a' }}>Happy Clients</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold" style={{ color: '#35868e' }}>98%</div>
                        <p style={{ color: '#124c4a' }}>Client Satisfaction</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
