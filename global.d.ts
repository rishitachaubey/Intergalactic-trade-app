declare class Razorpay {
  constructor(options: any);
  open(): void;
  on(event: string, callback: (response: any) => void): void;
}
  
interface Window {
  Razorpay: typeof Razorpay;
}