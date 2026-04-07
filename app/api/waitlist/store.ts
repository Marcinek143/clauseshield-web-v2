type WaitlistEntry = {
  email: string;
  createdAt: string;
};

declare global {
  var contractAiWaitlist: WaitlistEntry[] | undefined;
}

const waitlistStore = globalThis.contractAiWaitlist ?? [];

if (!globalThis.contractAiWaitlist) {
  globalThis.contractAiWaitlist = waitlistStore;
}

export function addWaitlistEntry(email: string) {
  const existingEntry = waitlistStore.find((entry) => entry.email === email);

  if (existingEntry) {
    return existingEntry;
  }

  const nextEntry = {
    email,
    createdAt: new Date().toISOString(),
  };

  waitlistStore.push(nextEntry);
  return nextEntry;
}

export function getWaitlistEntries() {
  return waitlistStore;
}
