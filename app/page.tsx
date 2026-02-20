import React from 'react';
import { Shield, CheckCircle, Leaf, Star, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen text-slate-900">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-900">{"Alamo Termite & Pest Control"}</span>
          </div>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="cursor-pointer text-slate-700 hover:text-blue-600 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">How It Works</a>
            <a href="#why-choose-us" className="cursor-pointer text-slate-700 hover:text-blue-600 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">Why Us</a>
            <a href="#testimonials" className="cursor-pointer text-slate-700 hover:text-blue-600 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">Reviews</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:(214) 949-1904" className="hidden md:flex items-center gap-2 text-blue-900 font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">
              <Phone className="w-5 h-5 text-blue-600" />
              {"(214) 949-1904"}
            </a>
            <a href="#quote" className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
      <section className="relative bg-blue-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800/50 border border-blue-700 mb-6">
                <MapPin className="w-4 h-4 text-blue-300" />
                <span className="text-sm font-medium text-blue-100">Proudly serving Dallas, TX & Surrounding Areas</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Premium Pest Control for Your Peace of Mind
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Say goodbye to unwanted guests. We provide safe, effective, and reliable pest management solutions tailored to your home or business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#quote" className="cursor-pointer bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg text-center transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                  Request Free Quote <ArrowRight className="w-5 h-5" />
                </a>
                <div className="flex items-center gap-3 px-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-blue-100">{"4.9"}/5 from {"0"} Google reviews</span>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div id="quote" className="bg-white rounded-2xl p-8 shadow-2xl text-slate-900 lg:ml-auto w-full max-w-md">
              <h3 className="text-2xl font-bold mb-2 text-center text-blue-900">Get Your Free Quote</h3>
              <p className="text-slate-500 text-center mb-6">Fast response. No obligation.</p>
              <form className="space-y-4" aria-label="Request a free pest control quote">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" id="name" autoComplete="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" autoComplete="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" id="email" autoComplete="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Pest Issue</label>
                  <select id="service" name="service" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-white">
                    <option>General Pest Control</option>
                    <option>Termites</option>
                    <option>Mosquitoes</option>
                    <option>Rodents</option>
                    <option>Bed Bugs</option>
                    <option>Other</option>
                  </select>
                </div>
                <button type="submit" className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                  Request My Quote
                </button>
                <p className="text-xs text-center text-slate-500 mt-4">
                  By submitting, you agree to our privacy policy. We respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges / Why Choose Us */}
      <section id="why-choose-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Dallas Trusts {"Alamo Termite & Pest Control"}</h2>
            <p className="text-lg text-slate-600">We don't just treat pests; we provide long-term solutions with a commitment to excellence and safety.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Licensed & Insured</h3>
              <p className="text-slate-600">Our technicians are fully certified, highly trained, and insured for your complete protection.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Eco-Friendly Options</h3>
              <p className="text-slate-600">We offer treatments that are tough on pests but safe for your family, pets, and the environment.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">100% Satisfaction</h3>
              <p className="text-slate-600">If pests return between your scheduled treatments, we'll come back and retreat at no extra cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Simple 3-Step Process</h2>
            <p className="text-lg text-slate-600">Getting rid of pests has never been easier. Here is how we restore your peace of mind.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-blue-200 z-0"></div>
            
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-blue-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Thorough Inspection</h3>
              <p className="text-slate-600">We inspect your property to identify the type of pests, their entry points, and the extent of the infestation.</p>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-blue-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-3xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Targeted Treatment</h3>
              <p className="text-slate-600">Using advanced techniques, we apply the most effective treatments to eliminate the pests quickly and safely.</p>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-blue-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-3xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Ongoing Prevention</h3>
              <p className="text-slate-600">We establish a protective barrier and provide ongoing maintenance to ensure pests stay out for good.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-blue-200">Don't just take our word for it. See why we have a {"4.9"}/5 rating from {"0"} Google reviews.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Local Customer',
                location: 'Dallas',
                text: 'Professional, on-time, and extremely thorough. They solved our issue fast.',
              },
              {
                name: 'Homeowner',
                location: 'Plano',
                text: 'Great communication and fair pricing. We have used them for recurring service.',
              },
              {
                name: 'Property Manager',
                location: 'Richardson',
                text: 'Friendly technicians and excellent results. Highly recommended.',
              },
            ].map((review, idx) => (
              <article key={idx} className="bg-blue-800/50 rounded-2xl p-8 border border-blue-700">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-blue-50 mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-sm text-blue-300">{review.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Take Back Your Home?</h2>
          <p className="text-xl text-blue-100 mb-10">Contact us today for a free inspection and quote. Let us handle the pests so you don't have to.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:(214) 949-1904" className="cursor-pointer bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <Phone className="w-5 h-5" /> Call {"(214) 949-1904"}
            </a>
            <a href="#quote" className="cursor-pointer bg-blue-800 text-white hover:bg-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 border border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              Request Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8 border-b border-slate-800 pb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-8 h-8 text-blue-500" />
                <span className="text-2xl font-bold text-white">{"Alamo Termite & Pest Control"}</span>
              </div>
              <p className="mb-6 max-w-md">
                Premium pest control services for residential and commercial properties in Dallas, Texas. Safe, effective, and guaranteed.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span>{"(214) 949-1904"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-500" aria-hidden="true" />
                  <a href="https://alamopest.com/locations/pest-control-dallas?utm_source=gbp&utm_medium=organic&utm_campaign=dallas" className="hover:text-white transition-colors">{"https://alamopest.com/locations/pest-control-dallas?utm_source=gbp&utm_medium=organic&utm_campaign=dallas"}</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>Dallas, TX</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Business Hours</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>Mon-Fri: 8am - 6pm</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>Sat: 9am - 2pm</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>Sun: Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} {"Alamo Termite & Pest Control"}. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}
