export interface ChangelogSchema {
  id: string;
  title: string;
  markdown_content: string;
  ios_version: string;
  android_version: string;
  web_version: string;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
}

const cachedResponses = new Map<string, ChangelogSchema>();
const cacheTimestamps = new Map<string, number>();
const CACHE_DURATION = 5 * 60 * 1000;

export async function fetchChangelog(
  id: string
): Promise<ChangelogSchema | null> {
  try {
    const now = Date.now();
    if (
      cachedResponses.has(id) &&
      cacheTimestamps.has(id) &&
      now - (cacheTimestamps.get(id) ?? 0) < CACHE_DURATION
    ) {
      return cachedResponses.get(id) ?? null;
    }

    const response = await fetch(
      `https://changelog.stoat.chat/v1/changelogs/${id}`
    );
    if (!response.ok && response.status !== 404) {
      throw new Error(
        `Failed to fetch changelog: ${response.status} ${response.statusText}`
      );
    }

    if (response.status === 404) {
      return null;
    }

    const data = await response.json();

    const changelog: ChangelogSchema = {
      id: data.id,
      title: data.title,
      markdown_content: data.markdown_content,
      ios_version: data.ios_version,
      android_version: data.android_version,
      web_version: data.web_version,
      published_at: new Date(data.published_at),
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at),
    };

    if (changelog.published_at > new Date()) {
      return null;
    }

    cachedResponses.set(id, changelog);
    cacheTimestamps.set(id, now);

    return changelog;
  } catch (error) {
    console.error("Error fetching changelog:", error);
    return null;
  }
}
