export interface Lead {
  id: number;
  company: string;
  contact: string;
  stage: string;
  dealValue: number;
  priority: "high" | "medium" | "low";
  expectedClose: string;
  salesperson?: string;
}