import React, { useState } from "react";
import { issueCredential } from "../services/api";

interface Credential {
  id: string;
  name: string;
  issuer: string;
}

export default function IssueCredential(): React.ReactElement {
  const [formData, setFormData] = useState<Credential>({ id: "", name: "", issuer: "" });
  const [result, setResult] = useState<unknown>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = (await issueCredential(formData)) as Record<string, unknown>;
      setResult(response);
    } catch {
      setResult({ message: "Failed to issue credential" });
    }
  };

  const renderTable = () => {
    if (!result || typeof result !== "object" || result === null) return null;
    const res = result as Record<string, unknown>;
    const credential = res.credential as Record<string, unknown> | undefined;

    return (
      <div className="table-container">
        <h3>Response</h3>
        <table>
          <tbody>
            <tr><td>Message:</td><td>{String(res.message)}</td></tr>
            {credential && (
              <>
                <tr><td>ID:</td><td>{String(credential.id)}</td></tr>
                <tr><td>Name:</td><td>{String(credential.name)}</td></tr>
                <tr><td>Issuer:</td><td>{String(credential.issuer)}</td></tr>
                <tr><td>Worker:</td><td>{String(credential.worker)}</td></tr>
                <tr><td>Timestamp:</td><td>{String(credential.timestamp)}</td></tr>
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
        <h2>Issue Credential</h2>
        <form onSubmit={handleSubmit}>
          <input name="id" value={formData.id} onChange={handleChange} placeholder="ID" />
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
          <input name="issuer" value={formData.issuer} onChange={handleChange} placeholder="Issuer" />
          <button type="submit" className="issue-btn">Issue Credential</button>
        </form>
        {renderTable()}
      </div>
    </div>
  );
}
