export interface TwilioMessageItem {
  accountSid: string | null;
  apiVersion: string | null;
  body: string | null;
  dateCreated: string | null;
  dateUpdated: string | null;
  dateSent: string | null;
  direction: string | null;
  errorCode: string | null;
  errorMessage: string | null;
  from: string | null;
  messagingServiceSid: string | null;
  numMedia: string | null;
  numSegments: string | null;
  price: string | null;
  priceUnit: string | null;
  sid: string | null;
  status: string | null;
  subresourceUris?: { [key: string]: string };
  to: string | null;
  uri: string | null;
}
