export interface App {
  faq: FAQ[];
  locations: Location[];
  recesses: Recess[];
  terminology: Terminology[];
}

export interface FAQ {
  order: number;
  slug: string;
  question: string;
  answer: string;
  category: Category;
}

export enum Category {
  Algemeen = "Algemeen",
}

export interface Location {
  id: string;
  streamUrl: string;
  vodUrl: string;
  audioUrl: string;
  videoOffset: VideoOffset;
  slug: string;
  description: string;
  name: string;
  imageUrl: string;
  thumbnailUrl: string;
  posterUrl: string;
  legend: Terminology[];
  downloadOptions: DownloadOption[];
}

export interface DownloadOption {
  label: Label;
  resolution: Resolution;
  type: Type;
  bandwidth: number;
}

export enum Label {
  MXFMedium = "MXF - Medium",
  The1080PMP4 = "1080p - MP4",
  The180PMP4 = "180p - MP4",
  The360PMP4 = "360p - MP4",
  The540PMP4 = "540p - MP4",
  The720PMP4 = "720p - MP4",
}

export enum Resolution {
  The1280X720 = "1280x720",
  The1920X1080 = "1920x1080",
  The320X180 = "320x180",
  The640X360 = "640x360",
  The960X540 = "960x540",
}

export enum Type {
  MXFMedium = "mxf-medium",
  Mp4 = "mp4",
}

export interface Terminology {
  mapId?: number;
  slug: string;
  name: string;
  description: string;
}

export interface VideoOffset {
  mode: Mode;
  stream: number;
  secondScreen: number;
}

export enum Mode {
  Pdt = "pdt",
}

export interface Recess {
  description: string;
  startDate: string;
  endDate: string;
}
