import axios from "axios";

const ISSUANCE_BASE_URL = "http://localhost:4000";
const VERIFICATION_BASE_URL = "http://localhost:5000";

export async function issueCredential(data: unknown): Promise<unknown> {
  const res = await axios.post(`${ISSUANCE_BASE_URL}/issue`, data);
  return res.data as unknown;
}

export async function verifyCredential(data: unknown): Promise<unknown> {
  const res = await axios.post(`${VERIFICATION_BASE_URL}/verify`, data);
  return res.data as unknown;
}
