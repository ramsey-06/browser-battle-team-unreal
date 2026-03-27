import React from 'react';
import * as Icons from "lucide-react";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import { departments } from '../data/departments';


export default function Departments() {
  return (
    <div>
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-max">
          <SectionHeader
            eyebrow="Academics"
            title="Our Departments"
            subtitle="Explore eight world-class departments offering over 200 programs designed to prepare you for the careers of tomorrow."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

            {departments.map(dept => {
              const Icon = Icons[dept.icon];

              return (
                <Card
                  key={dept.id}
                  className="group flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-slate-700 hover:border-blue-500/40"
                >

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${dept.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {Icon && <Icon className="w-5 h-5 text-white" />}
                  </div>

                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-blue-400 transition" style={{ color: 'var(--text-primary)' }}>
                    {dept.name}
                  </h3>

                  <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--text-secondary)' }}>
                    {dept.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 opacity-80 group-hover:opacity-100 transition" style={{ borderTop: '1px solid var(--border-color)' }}>
                    <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {dept.students.toLocaleString()}
                      </span> students · <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {dept.programs}
                      </span> programs
                    </div>

                    <ArrowRight size={16} className="text-blue-500 group-hover:translate-x-2 transition-all duration-300" />
                  </div>

                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max text-center">
          <h2 className="font-display text-3xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Ready to Find Your Program?</h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>Our advisors are here to help you choose the right path.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/admissions" className="btn-primary">Apply Now</Link>
            <Link to="/contact" className="btn-secondary">Talk to an Advisor</Link>
          </div>
        </div>
      </section>
    </div>
  );
}