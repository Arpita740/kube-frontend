import React, { useState } from "react";
import { verifyCredential } from "../services/api";

export default function VerifyCredential(): React.JSX.Element {
  const [id, setId] = useState<string>("");
  const [result, setResult] = useState<Record<string, unknown> | null>(null);

  const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = (await verifyCredential({ id })) as Record<string, unknown>;
      setResult(response);
    } catch {
      setResult({ message: "Verification failed" });
    }
  };

  const renderTable = () => {
    if (!result || typeof result !== "object" || result === null) return null;
    const res = result as Record<string, unknown>;

    return (
      <div className="table-container">
        <h3>Response</h3>
        <table>
          <tbody>
            <tr><td>Message:</td><td>{String(res.message)}</td></tr>
            {typeof res.issuedBy !== "undefined" && (
              <>
                <tr><td>Issued By:</td><td>{String(res.issuedBy)}</td></tr>
                <tr><td>Issued At:</td><td>{String(res.issuedAt)}</td></tr>
                <tr><td>Verified By:</td><td>{String(res.verifiedBy)}</td></tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Verify Credential</h2>
        <form onSubmit={handleVerify}>
          <input value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter Credential ID" />
          <button type="submit" className="verify-btn">Verify Credential</button>
        </form>
        {renderTable()}
      </div>
    </div>
  );
}
