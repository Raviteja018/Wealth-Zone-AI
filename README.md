# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.














      <section id="wzg-ai" className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6"
            >
              <Cpu className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Future of Education</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold mb-2 text-gray-900"
            >
              WZG-AI – STEM & Robotics Education
            </motion.h2>
            <p className="text-blue-700 font-medium mb-6 text-center">Available in: Andhra Pradesh, Telangana, Karnataka</p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Turning students into creators: hands-on STEM, Robotics and AI aligned with NEP 2020.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-blue-900/5 border border-blue-100 hover:border-blue-300 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Project Overview</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  WZG-AI transforms traditional schooling by integrating STEM, Robotics and AI into everyday learning. Our curriculum — co-developed by educators and engineers — gives students hands-on experience through real projects, coding, and engineering activities that spark curiosity, build critical thinking, and develop future-ready skills.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Aligned to NEP 2020, WZG-AI supports classroom adoption, teacher upskilling, and measurable student outcomes through project portfolios and certification. This project embodies our commitment to excellence, combining cutting-edge technology with intuitive design.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg shadow-blue-900/5 border border-blue-50 hover:shadow-xl transition-shadow">
                  <BookOpen className="w-8 h-8 text-purple-500 mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">NEP 2020 Aligned</h4>
                  <p className="text-sm text-gray-600">Curriculum designed to meet modern educational standards.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg shadow-blue-900/5 border border-blue-50 hover:shadow-xl transition-shadow">
                  <School className="w-8 h-8 text-pink-500 mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">For Schools</h4>
                  <p className="text-sm text-gray-600">Implemented from Standard 1 onwards with teacher support.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-900/10 border-t-4 border-blue-600"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">School Collaboration Inquiry</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Enter school name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Principal Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Enter principal name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location / Address</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="School address" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Details</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Phone or Email" />
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-900/20 transition-all duration-300 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </div>

          {/* Internship / Demo Class Section */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl shadow-blue-900/10 border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8">
                  <h3 className="text-4xl font-extrabold text-blue-600 mb-2">Internship Program</h3>
                  <p className="text-lg font-semibold text-gray-800 italic mb-2">People | Process | Technology</p>
                  <p className="text-blue-700 font-medium mb-4">Available in: Andhra Pradesh, Telangana</p>

                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
                    <h4 className="text-lg font-bold text-blue-800 mb-4">Our Services Include</h4>
                    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                      {[
                        "AI / ML", "Data Analytics", "Cyber Security SME's", "Robotic Engineer",
                        "Microsoft Technologies", "Java Full Stack Development", "Python Full Stack Development",
                        "Mern Stack, React JS, Node JS", "Salesforce", "Testing", "SAP", "Pega"
                      ].map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          <span className="text-sm text-gray-700 font-medium">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Locations</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-500" />
                        <span className="font-medium">Andhra Pradesh</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-500" />
                        <span className="font-medium">Telangana</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Why Choose Us?</h4>
                    <ul className="space-y-2">
                      {[
                        "Internship Certification", "Live Project Sessions",
                        "Best Lead (Industry Experts)", "Placement Assistance"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <Award className="w-4 h-4 text-orange-500" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold text-xl shadow-lg">
                      JOIN NOW
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Duration</p>
                      <p className="text-2xl font-bold text-gray-900">6 Months</p>
                    </div>
                  </div>

                  <p className="text-gray-600 italic border-l-4 border-blue-500 pl-4 py-1 mb-6">
                    "Join with us where your contribution matters and your growth is our priority."
                  </p>

                  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm overflow-hidden">
                    <p className="text-sm font-semibold text-gray-500 mb-2">Send Your CV at</p>
                    <div className="flex flex-col gap-3">
                      <a href="mailto:info@wealthzonegroupai.com" className="flex items-center gap-2 text-blue-600 font-bold hover:underline break-all">
                        <Send className="w-4 h-4 flex-shrink-0" />
                        info@wealthzonegroupai.com
                      </a>
                      <a href="https://www.wealthzonegroupai.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 font-medium hover:text-blue-600 transition-colors break-all">
                        <Globe className="w-4 h-4 flex-shrink-0" />
                        www.wealthzonegroupai.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Candidate Registration</h4>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Candidate Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Your full name" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                      <input type="tel" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="+91..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Year of Passing</label>
                      <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all">
                        <option>Select Year</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Qualification</label>
                    <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all">
                      <option>Select Qualification</option>
                      <option>B.Tech</option>
                      <option>B.Sc</option>
                      <option>BBA</option>
                      <option>BCA</option>
                      <option>MCA</option>
                      <option>M.Tech</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <textarea rows="2" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Your current address"></textarea>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-300">
                    Register for Demo Class
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>