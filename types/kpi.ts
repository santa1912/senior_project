export interface KPICategory {
  name: string;
  value: number;
  color: string;
  percent: number;
}

export interface KPIRound {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  categories: KPICategory[];
}
