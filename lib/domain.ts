export const STAR_LEVELS = [
  "새싹별", "꼬마별", "반짝별", "빛나는별", "큰별", "왕큰별", "으뜸별", "우주별",
] as const;

export type StarLevel = (typeof STAR_LEVELS)[number];
export type UserRole = "consumer" | "artisan" | "admin";
export type JobType = "custom" | "repair" | "restore" | "remodel" | "class";
export type HandoffMethod = "visit" | "round_trip_delivery" | "parcel";
export type JobStatus =
  | "requested"
  | "quoted"
  | "accepted"
  | "pickup_requested"
  | "received"
  | "inspection"
  | "in_progress"
  | "completed"
  | "returning"
  | "delivered";

export interface Workshop {
  id: string;
  ownerId: string;
  name: string;
  category: string[];
  starLevel: StarLevel;
  address: string;
  latitude?: number;
  longitude?: number;
  verified: boolean;
}

export interface WorkRequest {
  id: string;
  consumerId: string;
  type: JobType;
  title: string;
  description: string;
  imageUrls: string[];
  handoffMethod: HandoffMethod;
  status: JobStatus;
}
