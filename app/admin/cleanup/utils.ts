export function formatNumber(value: number | null | undefined): string {
  if (value === null || value === undefined) {
    return "0";
  }
  return new Intl.NumberFormat("en-US").format(value);
}

export function formatRelativeTime(isoDate: string | null | undefined): string {
  if (!isoDate) {
    return "No runs yet";
  }
  const date = new Date(isoDate);
  const diffMs = Date.now() - date.getTime();
  const diffSeconds = Math.round(diffMs / 1000);

  if (diffSeconds < 60) {
    return "just now";
  }

  const diffMinutes = Math.round(diffSeconds / 60);
  if (diffMinutes < 60) {
    return `${diffMinutes} min${diffMinutes === 1 ? "" : "s"} ago`;
  }

  const diffHours = Math.round(diffMinutes / 60);
  if (diffHours < 24) {
    return `${diffHours} hour${diffHours === 1 ? "" : "s"} ago`;
  }

  const diffDays = Math.round(diffHours / 24);
  return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
}

export function formatDuration(durationMs: number | null | undefined): string {
  if (!durationMs && durationMs !== 0) {
    return "-";
  }
  const totalSeconds = Math.round(durationMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (minutes <= 0) {
    return `${seconds}s`;
  }

  return `${minutes}m ${seconds.toString().padStart(2, "0")}s`;
}

export function formatDateTime(isoDate: string | null | undefined): string {
  if (!isoDate) {
    return "-";
  }
  const date = new Date(isoDate);
  const datePart = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
  const timePart = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
  return `${datePart} ${timePart}`;
}

export function formatRetentionHours(hours: number | null | undefined): string {
  if (!hours && hours !== 0) {
    return "Unknown";
  }
  if (hours % 24 === 0) {
    const days = hours / 24;
    return `${days}d`;
  }
  return `${hours}h`;
}
