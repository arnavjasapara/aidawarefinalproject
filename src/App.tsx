import { useState, useEffect } from 'react';
import {
  BookOpen,
  Target,
  Calendar,
  DollarSign,
  Users,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Quote
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              AidAware
            </h1>
            <div className="hidden md:flex gap-6">
              {['why', 'solution', 'milestones', 'budget', 'team', 'lessons', 'impact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-500'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              FBLA Capstone Project 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
              AidAware
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              Empowering Students Through Financial Aid Clarity
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              By Arnav Jasapara | Chattahoochee High School
            </p>
            <button
              onClick={() => scrollToSection('why')}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore My Journey
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section id="why" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-100 rounded-lg">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">The Why</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Students do not receive timely and accessible resources that explain the effects of
                  education finance policy changes on their affordability of colleges. When students
                  don't receive early and accessible guidance, they miss opportunities, make mistakes,
                  and struggle to understand how changes in policy affect their individual situations.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Confusing government language buries critical updates</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Families find out about changes too late to take action</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Students miss deadlines and financial opportunities</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">My Inspiration</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  My inspiration came from conversations with peers who felt overwhelmed or completely
                  unaware of how to pay for college. I saw how confusing even the most basic steps could
                  be, and I realized that financial literacy and policy awareness has a direct impact on
                  students' futures.
                </p>
                <div className="bg-white p-6 rounded-xl border border-blue-200">
                  <Quote className="w-6 h-6 text-blue-600 mb-3" />
                  <p className="text-gray-600 italic">
                    "I care about this issue because financial literacy and policy awareness has a
                    direct impact on students' futures - it affects where they go to college, how
                    much debt they take on, and much more."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-600 rounded-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">The Solution</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">AidAware Platform</h3>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                A two-part solution designed by students, for students, to demystify financial aid
                and empower informed decision-making.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Website Resource Hub</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Clear, simplified explanations of financial aid changes including FAFSA updates,
                    Pell Grant changes, and state programs like Georgia Promise.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Plain language policy summaries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Downloadable checklists and templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Year-round automated updates</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Live Webinars</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Student-led interactive sessions where participants can ask questions and receive
                    real-time guidance on completing FAFSA and understanding financial aid.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Step-by-step FAFSA walkthrough</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Live Q&A sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Recorded for on-demand access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8">
              <img
                src="/screenshot_2025-12-11_at_12.05.19_am.png"
                alt="AidAware FAFSA Webinar in Action"
                className="w-full rounded-lg shadow-2xl"
              />
              <p className="text-white text-center mt-4 font-semibold">
                Our live webinar helping students understand FAFSA and financial aid options
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
              <h4 className="font-bold text-lg mb-2 text-gray-900">Goal 1</h4>
              <p className="text-gray-600 mb-3">Increase awareness of financial aid policy changes</p>
              <div className="flex items-center gap-2 text-sm text-blue-600">
                <CheckCircle2 className="w-4 h-4" />
                <span>10 summaries posted</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-600">
                <CheckCircle2 className="w-4 h-4" />
                <span>100+ unique visitors</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-cyan-100">
              <h4 className="font-bold text-lg mb-2 text-gray-900">Goal 2</h4>
              <p className="text-gray-600 mb-3">Provide tools for informed decision-making</p>
              <div className="flex items-center gap-2 text-sm text-cyan-600">
                <CheckCircle2 className="w-4 h-4" />
                <span>Webinar with 25+ attendees</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-cyan-600">
                <CheckCircle2 className="w-4 h-4" />
                <span>3 downloadable resources</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
              <h4 className="font-bold text-lg mb-2 text-gray-900">Sustainability</h4>
              <p className="text-gray-600 mb-3">Built for long-term impact</p>
              <div className="flex items-center gap-2 text-sm text-blue-600">
                <CheckCircle2 className="w-4 h-4" />
                <span>Automated updates</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-600">
                <CheckCircle2 className="w-4 h-4" />
                <span>Training for underclassmen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="milestones" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-green-100 rounded-lg">
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Project Milestones</h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-cyan-600 to-green-600"></div>

            {[
              {
                date: 'Oct 15-20, 2025',
                title: 'Project Scope Finalized',
                description: 'Pivoted from scholarship tracker to financial aid awareness platform based on stakeholder feedback',
                color: 'blue'
              },
              {
                date: 'Oct 10-31, 2025',
                title: 'Empathy Research Completed',
                description: 'Conducted 6 stakeholder interviews with students and parents, drafted empathy map',
                color: 'blue'
              },
              {
                date: 'Oct 28 - Nov 3, 2025',
                title: 'Website Wireframe Designed',
                description: 'Created user-friendly mockups and tested with focus groups',
                color: 'cyan'
              },
              {
                date: 'Nov 4-22, 2025',
                title: 'AidAware Website Launched',
                description: 'Built and deployed platform with policy summaries and resources',
                color: 'cyan'
              },
              {
                date: 'Nov 10-26, 2025',
                title: 'Downloadable Tools Created',
                description: 'FAFSA checklist, legislator contact templates, and deadline tracker published',
                color: 'teal'
              },
              {
                date: 'Nov 24 - Dec 7, 2025',
                title: 'Marketing Campaign',
                description: 'Promoted through school channels, FBLA networks, and social media',
                color: 'teal'
              },
              {
                date: 'Dec 8, 2025',
                title: 'Live Webinar Hosted',
                description: 'Successfully hosted financial aid webinar with student Q&A session',
                color: 'green'
              },
              {
                date: 'Dec 8, 2025',
                title: 'Project Completed',
                description: 'Collected feedback and submitted final capstone documentation',
                color: 'green'
              }
            ].map((milestone, index) => (
              <div key={index} className="relative pl-20 pb-12 last:pb-0">
                <div className={`absolute left-5 w-8 h-8 bg-${milestone.color}-600 rounded-full border-4 border-white shadow-lg`}></div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                  <div className={`text-sm font-semibold text-${milestone.color}-600 mb-2`}>
                    {milestone.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="budget" className="py-20 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-green-600 rounded-lg">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Project Budget</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-block">
                <div className="text-6xl font-bold text-green-600 mb-2">$0</div>
                <div className="text-xl text-gray-600">Total Project Cost</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: 'Website Hosting',
                  solution: 'GitHub Pages / Google Sites',
                  cost: 'Free',
                  icon: '🌐'
                },
                {
                  category: 'Webinar Platform',
                  solution: 'Google Meet / Zoom Basic',
                  cost: 'Free',
                  icon: '🎥'
                },
                {
                  category: 'Design Tools',
                  solution: 'Canva, Figma',
                  cost: 'Free',
                  icon: '🎨'
                },
                {
                  category: 'Marketing',
                  solution: 'Social media, school email',
                  cost: 'Free',
                  icon: '📢'
                },
                {
                  category: 'Human Resources',
                  solution: 'Student volunteers',
                  cost: 'Free',
                  icon: '👥'
                },
                {
                  category: 'Content Creation',
                  solution: 'Student research & writing',
                  cost: 'Free',
                  icon: '✍️'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.category}</h4>
                  <p className="text-sm text-gray-600 mb-2">{item.solution}</p>
                  <div className="text-lg font-bold text-green-600">{item.cost}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border border-green-200">
              <h4 className="font-bold text-gray-900 mb-3">Why $0 Matters</h4>
              <p className="text-gray-700 leading-relaxed">
                By leveraging free tools and volunteer support, AidAware demonstrates that meaningful
                impact doesn't require large budgets. This approach makes the project sustainable and
                replicable by other FBLA chapters and student organizations nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Team Management</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Lead</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Arnav Jasapara</h4>
                  <p className="text-purple-600 mb-2">Project Coordinator</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                      <span>Research and development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                      <span>Content writing and curation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                      <span>Stakeholder outreach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                      <span>Project management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 shadow-md">
                <h4 className="font-bold text-lg text-gray-900 mb-2">School Counselor</h4>
                <p className="text-gray-700">Financial aid policy expert, content verification, and accuracy review</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-xl border border-cyan-200 shadow-md">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Mentor</h4>
                <p className="text-cyan-600 mb-3">Vik Kasturi</p>
                <p className="text-gray-700">Business strategy guidance and professional mentorship</p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-green-50 p-6 rounded-xl border border-teal-200 shadow-md">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Student Team</h4>
                <p className="text-teal-600 mb-3">Friends & Volunteers</p>
                <p className="text-gray-700">Web development, event coordination, promotion, and outreach support</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Key Partners</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">FBLA Chapters</h4>
                <p className="text-purple-100">Assisting with event replication and peer-led webinars</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">School Administration</h4>
                <p className="text-purple-100">Promotion through announcements and counselor networks</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Community Organizations</h4>
                <p className="text-purple-100">College readiness programs and outreach support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lessons" className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-yellow-500 rounded-lg">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Lessons Learned</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-yellow-200">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Focus on Impact, Not Impressiveness</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The best advice from my mentor was to stop worrying about what sounds impressive and
                instead ask, "What is truly going to be beneficial for anyone I'm working to support?"
              </p>
              <p className="text-gray-600 italic">
                This advice led me to pivot the direction of our project, which eventually became
                AidAware as it is today—a platform that puts students first.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-200">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Launch Now, Perfect Later</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                One of my biggest mistakes was not narrowing my focus sooner. In the beginning, I
                tried to incorporate too many features into the initial version.
              </p>
              <p className="text-gray-600 italic">
                I learned it's better to launch a product that serves an essential purpose immediately
                than to wait and create something that's "perfect."
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-yellow-100">
              <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📅</span>
                Logistics and Time Management
              </h4>
              <p className="text-gray-700">
                Finding webinar dates during finals was challenging. We worked around this by promoting
                during off-peak times and offering simple registration. I learned the importance of
                flexible scheduling and clear communication.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-orange-100">
              <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">👥</span>
                Delegation and Team Collaboration
              </h4>
              <p className="text-gray-700">
                On a professional level, I learned the importance of delegating work, creating content
                appropriate for a broad audience, and tracking the success of our actions to iterate
                and improve.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-yellow-100">
              <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🤝</span>
                Professional Relationships
              </h4>
              <p className="text-gray-700">
                The interactions I had with school administrators evolved from them treating me as a
                student asking for permission to treating me as a peer running a legitimate program.
                This transition was empowering and an unexpected surprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-white/20 rounded-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold">Project Impact</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-xl">Students Reached</div>
              <p className="text-blue-100 mt-3">Through website visits and webinar attendance</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="text-5xl font-bold mb-2">10</div>
              <div className="text-xl">Policy Summaries</div>
              <p className="text-blue-100 mt-3">Translated into plain, accessible language</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="text-5xl font-bold mb-2">3</div>
              <div className="text-xl">Downloadable Tools</div>
              <p className="text-blue-100 mt-3">Checklists and templates for student action</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8">
            <h3 className="text-2xl font-bold mb-6">Real Student Impact</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Quote className="w-8 h-8 flex-shrink-0 text-yellow-300" />
                <div>
                  <p className="text-lg leading-relaxed mb-2">
                    "It was particularly fulfilling during the Q&As after the webinar when I saw how
                    many participants were no longer confused by the concept of Pell Grants and FAFSA
                    deadlines."
                  </p>
                  <p className="text-blue-100">
                    Listening to comments from students about how they had not been able to get any
                    explanations about financial aid before was very rewarding and made the entire
                    project worthwhile.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h4 className="font-bold text-xl mb-3">Immediate Impact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Students gained clarity on FAFSA process and deadlines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Families accessed resources they didn't know existed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Reduced anxiety around financial aid applications</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h4 className="font-bold text-xl mb-3">Long-term Sustainability</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Automated updates keep information current year-round</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Training underclassmen to continue the program</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Scalable model for other FBLA chapters nationwide</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Personal Growth</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Through AidAware, I not only helped other students but also grew tremendously as a leader,
            communicator, and advocate. I learned to balance ambition with practicality, to listen to
            user feedback, and to focus on creating real value rather than chasing perfection.
          </p>
          <p className="text-lg text-gray-600 italic">
            This project taught me that student-led initiatives can create meaningful change when they
            prioritize the needs of those they serve.
          </p>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">AidAware</h3>
          <p className="text-gray-400 mb-6">
            Empowering students through financial aid clarity
          </p>
          <div className="space-y-2 text-gray-400">
            <p>Arnav Jasapara | Chattahoochee High School</p>
            <p>FBLA Capstone Project 2025</p>
            <p className="text-sm mt-4">Advisor: Allison Poe | Mentor: Vik Kasturi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;