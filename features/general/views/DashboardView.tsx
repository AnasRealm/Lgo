// features/general/views/DashboardView.tsx

export function DashboardView() {
  return (
    <div className="p-8 w-full">
      <h1 className="text-2xl font-bold mb-6 text-slate-800">Overview Dashboard</h1>
      
      {/* مثال على محتوى الداشبورد */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-slate-800">1,240</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Active Courses</h3>
          <p className="text-3xl font-bold text-slate-800">42</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Revenue</h3>
          <p className="text-3xl font-bold text-slate-800">$12,450</p>
        </div>
      </div>
    </div>
  );
}