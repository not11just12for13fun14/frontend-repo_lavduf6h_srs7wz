import { Shield, Users, Settings, Database } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Admin Portal',
    desc: 'Manage users, roles, and permissions with audit-ready controls.'
  },
  {
    icon: Users,
    title: 'Team Workspace',
    desc: 'Collaborate with colleagues, share files, and track tasks.'
  },
  {
    icon: Settings,
    title: 'Settings Center',
    desc: 'Customize preferences, notifications, and integrations.'
  },
  {
    icon: Database,
    title: 'Data Hub',
    desc: 'Access reports, datasets, and analytics in one place.'
  }
];

function Modules() {
  return (
    <section id="modules" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900">Work Modules</h2>
        <p className="text-gray-600 mt-2">Quick access to the portals you use every day.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition bg-white">
              <it.icon className="text-indigo-600" />
              <h3 className="mt-3 font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{it.desc}</p>
              <button className="mt-4 text-sm text-indigo-700 hover:text-indigo-900 font-medium">Open</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Modules;
