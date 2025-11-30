import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { Button } from '../Button';
import { TimeEntry } from '../../types';
import { analyzeProductivity, generateMockSchedule } from '../../services/geminiService';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Sparkles, Play, Pause, MoreVertical, Plus } from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

const COLORS = ['#0ea5e9', '#8b5cf6', '#10b981', '#f59e0b'];

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [entries, setEntries] = useState<TimeEntry[]>([]);
  const [loading, setLoading] = useState(false);
    const [analyzing, setAnalyzing] = useState(false);
    const [insight, setInsight] = useState<string | null>(null);

  // Initialize with some data
  useEffect(() => {
    const loadData = async () => {
        setLoading(true);
        // Simulate fetching
        setTimeout(async () => {
             const mockData = await generateMockSchedule();
             setEntries(mockData);
             setLoading(false);
        }, 1000);
    };
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    const handleAnalysis = async () => {
        setAnalyzing(true);
        const result = await analyzeProductivity(entries);
        setInsight(result);
        setAnalyzing(false);
    };

  const activeTask = entries.find(e => e.status === 'In Progress') || entries[0];

  return (
    <div className="min-h-screen bg-dark-bg text-white pl-64">
      <Sidebar onLogout={onLogout} />

      <main className="p-8 max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Good morning, Alex</h1>
            <p className="text-gray-400">Here's what's happening with your projects today.</p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" size="sm"><Plus className="w-4 h-4 mr-2"/> New Project</Button>
                 <Button 
                     variant="primary" 
                     size="sm" 
                     onClick={handleAnalysis} 
                     disabled={analyzing}
                     className="bg-gradient-to-r from-indigo-500 to-purple-600 border-none"
                 >
                     <Sparkles className={`w-4 h-4 mr-2 ${analyzing ? 'animate-spin' : ''}`} />
                     {analyzing ? 'Analyzing...' : 'Insights'}
                 </Button>
          </div>
        </header>

        {/* AI Insight Box */}
        {insight && (
          <div className="mb-8 p-6 bg-gradient-to-r from-primary-900/30 to-purple-900/30 border border-primary-500/30 rounded-xl animate-in fade-in slide-in-from-top-4">
             <div className="flex items-start gap-4">
                <div className="p-2 bg-primary-500/20 rounded-lg mt-1">
                    <Sparkles className="w-5 h-5 text-primary-400" />
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Analysis</h3>
                    <div className="prose prose-invert prose-sm max-w-none text-gray-300">
                        {/* Simple rendering for the markdown-like text from analysis */}
                        {insight.split('\n').map((line, i) => (
                            <p key={i} className="mb-1">{line}</p>
                        ))}
                    </div>
                    <Button variant="ghost" size="sm" className="mt-4 -ml-2" onClick={() => setInsight(null)}>Dismiss</Button>
                </div>
             </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Timer Card */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                        <Play className="w-6 h-6 text-primary-500 ml-1" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Current Task</p>
                        <h3 className="text-lg font-medium">{activeTask?.task || "No active task"}</h3>
                        <p className="text-xs text-primary-400">{activeTask?.project}</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="text-3xl font-mono font-light tracking-wider">
                        01:24:32
                    </div>
                    <Button variant="outline" className="h-10 w-10 p-0 rounded-full border-red-500/50 text-red-500 hover:bg-red-500/10 hover:border-red-500">
                        <Pause className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Weekly Activity Chart */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-semibold text-lg">Weekly Activity</h3>
                    <select className="bg-dark-bg border border-dark-border rounded-md text-sm px-2 py-1 outline-none focus:border-primary-500">
                        <option>This Week</option>
                        <option>Last Week</option>
                    </select>
                </div>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={entries}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                            <XAxis dataKey="project" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip 
                                cursor={{fill: '#334155', opacity: 0.2}}
                                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                            />
                            <Bar dataKey="duration" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Recent Tasks List */}
            <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden">
                <div className="p-6 border-b border-dark-border flex justify-between items-center">
                    <h3 className="font-semibold text-lg">Recent Tasks</h3>
                    <Button variant="ghost" size="sm">View All</Button>
                </div>
                <div className="divide-y divide-dark-border">
                    {loading ? (
                        <div className="p-8 text-center text-gray-500">Loading tasks...</div>
                    ) : (
                        entries.map((entry) => (
                            <div key={entry.id} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <div className={`w-2 h-2 rounded-full ${entry.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                                    <div>
                                        <p className="font-medium text-sm">{entry.task}</p>
                                        <p className="text-xs text-gray-500">{entry.project}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-mono text-gray-400">{Math.floor(entry.duration / 60)}h {entry.duration % 60}m</span>
                                    <button className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <MoreVertical className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
          </div>

          {/* Right Column Stats */}
          <div className="space-y-8">
            {/* Project Distribution */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-6">Distribution</h3>
                <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={entries}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="duration"
                            >
                                {entries.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px' }} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-6 space-y-3">
                    {entries.slice(0, 3).map((entry, index) => (
                        <div key={entry.id} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                <span className="text-gray-300">{entry.project}</span>
                            </div>
                            <span className="text-gray-500">{Math.round(entry.duration / 60 * 10) / 10}h</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Members */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-6">Team Status</h3>
                <div className="space-y-4">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 border border-white/10" />
                            <div className="flex-1">
                                <div className="h-2 w-20 bg-white/10 rounded-full mb-1.5" />
                                <div className="h-1.5 w-12 bg-white/5 rounded-full" />
                            </div>
                            <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-green-500' : 'bg-gray-600'}`} />
                        </div>
                    ))}
                </div>
                <Button variant="outline" className="w-full mt-6 text-xs">Manage Team</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};