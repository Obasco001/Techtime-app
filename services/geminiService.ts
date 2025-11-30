import { TimeEntry } from "../types";

/**
 * Lightweight local analysis fallback — does not call any external service.
 * Returns a short plain-text summary and a few actionable tips.
 */
export const analyzeProductivity = async (entries: TimeEntry[]): Promise<string> => {
  try {
    if (!entries || entries.length === 0) return "No data available to analyze.";

    const totalMinutes = entries.reduce((s, e) => s + (e.duration || 0), 0);
    const byProject: Record<string, number> = {};
    entries.forEach((e) => {
      byProject[e.project] = (byProject[e.project] || 0) + (e.duration || 0);
    });
    const top = Object.entries(byProject).sort((a, b) => b[1] - a[1])[0];

    const tips = [
      "Break large tasks into smaller subtasks to reduce context switching.",
      "Block focused time for high-priority work and minimize interruptions.",
      "Review recurring blockers weekly and allocate time to resolve them."
    ];

    const summary = `Summary:\n- Total tracked time: ${Math.floor(totalMinutes / 60)}h ${totalMinutes % 60}m\n- Top project: ${top ? top[0] : 'N/A'}\n\nActionable tips:\n${tips.map(t => `- ${t}`).join('\n')}`;

    return summary;
  } catch (e) {
    console.error('Error during analysis:', e);
    return 'Analysis unavailable.';
  }
};

/**
 * Generates a small set of mock time entries for demos or initial state.
 */
export const generateMockSchedule = async (): Promise<TimeEntry[]> => {
  return [
    { id: '1', project: 'Website Redesign', task: 'Hero Section', duration: 120, date: '2023-10-27', status: 'Completed' },
    { id: '2', project: 'Mobile App', task: 'Fix Login Bug', duration: 45, date: '2023-10-27', status: 'Completed' },
    { id: '3', project: 'Website Redesign', task: 'Footer Work', duration: 90, date: '2023-10-27', status: 'In Progress' },
    { id: '4', project: 'Internal Tools', task: 'Refactor Logger', duration: 60, date: '2023-10-27', status: 'Blocked' },
    { id: '5', project: 'Mobile App', task: 'New Feature', duration: 150, date: '2023-10-27', status: 'Completed' }
  ];
};