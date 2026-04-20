export interface StatusPage {
  current_incident_impact: string;
  availability: number;
  updated_at: Date;
  components: Component[];
  active_incidents: ActiveIncident[];
}

export interface ActiveIncident {
  id: number;
  title: string;
  impact: string;
  state: string;
  status: string;
  exclude_from_downtime: boolean;
  incident_at: Date;
  recovery_at: Date | null;
}

export interface Component {
  type: string;
  name: string;
  response_time: number;
  availability: number;
  current_incident_impact: string;
}

let cachedStatusPage: StatusPage | null = null;
let lastCachedTimestamp: number | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 min

export async function getStatusPage(): Promise<StatusPage | null> {
  try {
    const now = Date.now();
    if (
      cachedStatusPage &&
      lastCachedTimestamp &&
      now - lastCachedTimestamp < CACHE_DURATION
    ) {
      return cachedStatusPage;
    }

    const response = await fetch(
      `https://api.phare.io/uptime/status-pages/${
        import.meta.env.PHARE_STATUSPAGE_ID
      }/current-status`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.PHARE_API_KEY}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(
        `Failed to fetch status page: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();

    const statusPage: StatusPage = {
      current_incident_impact: data.current_incident_impact,
      availability: data.availability,
      updated_at: new Date(data.updated_at),
      components: data.components.map((comp: any) => ({
        type: comp.type,
        name: comp.name,
        response_time: comp.response_time,
        availability: comp.availability,
        current_incident_impact: comp.current_incident_impact,
      })),
      active_incidents: data.active_incidents.map((inc: any) => ({
        id: inc.id,
        title: inc.title,
        impact: inc.impact,
        state: inc.state,
        status: inc.status,
        exclude_from_downtime: inc.exclude_from_downtime,
        incident_at: new Date(inc.incident_at),
        recovery_at: inc.recovery_at ? new Date(inc.recovery_at) : null,
      })),
    };

    cachedStatusPage = statusPage;
    lastCachedTimestamp = now;

    return statusPage;
  } catch (error) {
    console.error("Error fetching status page:", error);
    return null;
  }
}

export function impactIntoString(impact: string): string {
  return (
    {
      unknown: "Unknown",
      operational: "All Systems Operational",
      degraded_performance: "Degraded Performance",
      partial_outage: "Partial Outage",
      major_outage: "Major Outage",
      maintenance: "Ongoing Maintenance",
    }[impact] || "Unknown"
  );
}
