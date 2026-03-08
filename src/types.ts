export interface CheckAnalysisResult {
  checkId: string;
  analyzedAt: Date;
  valid: boolean;
}

export interface DepositSubmission {
  checkId: string;
  amount: number;
  submittedAt: Date;
}
